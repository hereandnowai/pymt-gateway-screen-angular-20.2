import { Component, ChangeDetectionStrategy, signal, computed, inject, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

// Components
import { CreditCardInputComponent, CreditCardData } from '../../components/credit-card-input/credit-card-input.component';
import { AddressFormComponent, AddressData } from '../../components/address-form/address-form.component';
import { PaymentMethodSelectorComponent, PaymentMethod } from '../../components/payment-method-selector/payment-method-selector.component';
import { ProcessingOverlayComponent, ProcessingState } from '../../components/processing-overlay/processing-overlay.component';
import { ErrorDisplayComponent, PaymentError } from '../../components/error-display/error-display.component';

// Services
import { PaymentProcessingService, PaymentResult } from '../../services/payment-processing.service';
import { SecurityService } from '../../services/security.service';
import { ValidationService } from '../../services/validation.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
    selector: 'app-payment-form-container',
    templateUrl: './payment-form-container-simple.html',
    styleUrls: ['./payment-form-container.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
        // CreditCardInputComponent,
        // AddressFormComponent,
        // PaymentMethodSelectorComponent,
        // ProcessingOverlayComponent,
        // ErrorDisplayComponent
    ]
})
export class PaymentFormContainerComponent implements OnDestroy {
    private paymentService = inject(PaymentProcessingService);
    private securityService = inject(SecurityService);
    private validationService = inject(ValidationService);
    private analyticsService = inject(AnalyticsService);

    // Form state signals
    protected readonly selectedPaymentMethod = signal<PaymentMethod>('card');
    protected readonly processingState = signal<ProcessingState>('idle');
    protected readonly currentError = signal<PaymentError | null>(null);

    // Credit card data
    protected readonly creditCardData = signal<CreditCardData>({
        number: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
        name: ''
    });

    // Address data
    protected readonly addressData = signal<AddressData>({
        line1: '',
        line2: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'US'
    });

    // Computed signals
    protected readonly isFormValid = computed(() => {
        const card = this.creditCardData();
        const address = this.addressData();
        return !!(card.number && card.expiryMonth && card.expiryYear && card.cvc && card.name &&
                  address.line1 && address.city && address.state && address.postalCode);
    });

    protected readonly canSubmit = computed(() => {
        return this.isFormValid() && this.processingState() === 'idle';
    });

    // Event handlers
    protected onPaymentMethodChange(method: PaymentMethod): void {
        this.selectedPaymentMethod.set(method);
        this.analyticsService.trackEvent('payment_method_selected', { method });
    }

    protected onCreditCardChange(data: CreditCardData): void {
        this.creditCardData.set(data);
    }

    protected onAddressChange(data: AddressData): void {
        this.addressData.set(data);
    }

    protected async onSubmit(): Promise<void> {
        if (!this.canSubmit()) return;

        try {
            this.processingState.set('processing');
            this.currentError.set(null);

            this.analyticsService.trackEvent('payment_started', {
                method: this.selectedPaymentMethod(),
                amount: 0 // Would be passed from parent component
            });

            const result = await this.paymentService.processPayment({
                method: this.selectedPaymentMethod(),
                creditCard: this.creditCardData(),
                address: this.addressData(),
                amount: 0 // Would be passed from parent component
            });

            if (result.success) {
                this.processingState.set('success');
                this.analyticsService.trackEvent('payment_completed', {
                    method: this.selectedPaymentMethod()
                });
            } else {
                throw new Error(result.error || 'Payment failed');
            }

        } catch (error) {
            const paymentError: PaymentError = {
                code: 'PAYMENT_FAILED',
                message: error instanceof Error ? error.message : 'Payment processing failed',
                details: error
            };

            this.currentError.set(paymentError);
            this.processingState.set('error');

            this.analyticsService.trackEvent('payment_failed', {
                error: paymentError.code,
                method: this.selectedPaymentMethod()
            });
        }
    }

    protected onRetry(): void {
        this.processingState.set('idle');
        this.currentError.set(null);
        this.analyticsService.trackEvent('payment_retry');
    }

    ngOnDestroy(): void {
        // Cleanup any subscriptions or resources
    }
}
import { Component, signal } from '@angular/core';
import { PaymentFormContainerComponent } from './containers/payment-form-container/payment-form-container.component';

@Component({
  selector: 'app-root',
  imports: [PaymentFormContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Payment Gateway');
}
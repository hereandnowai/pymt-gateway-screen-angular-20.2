# Payment Gateway - Angular 20.2

<div align="center">
  <img src="https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/logo-of-here-and-now-ai.png" alt="HERE AND NOW AI Logo" width="200"/>
  <br>
  <h3>designed with passion for innovation</h3>
</div>

A modern, secure payment gateway built with Angular 20.2, Material Design, and TypeScript. This application provides a complete payment processing interface with support for multiple payment methods including credit cards, Apple Pay, and Google Pay.

## 🚀 Features

- **Modern Angular 20.2** - Built with the latest Angular framework
- **Material Design UI** - Professional, responsive interface
- **Multiple Payment Methods** - Credit Card, Apple Pay, Google Pay
- **Security First** - PCI-compliant payment processing
- **TypeScript** - Full type safety and modern development
- **Standalone Components** - Future-proof Angular architecture
- **Comprehensive Testing** - Jest and Cypress test suites
- **Accessibility** - WCAG compliant interface

## 🛠️ Tech Stack

- **Framework**: Angular 20.2.0
- **Language**: TypeScript 5.9.2
- **UI Library**: Angular Material 20.2.2
- **Build Tool**: Angular CLI 20.2.2
- **Testing**: Jest 30.1.3, Cypress 15.1.0
- **Payment Processing**: Stripe SDK integration
- **Security**: DOMPurify for XSS protection

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hereandnowai/pymt-gateway-screen-angular-20.2.git
   cd pymt-gateway-screen-angular-20.2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:4200`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── credit-card-input/
│   │   ├── payment-method-selector/
│   │   ├── address-form/
│   │   ├── error-display/
│   │   └── processing-overlay/
│   ├── containers/          # Container components
│   │   └── payment-form-container/
│   ├── services/            # Business logic services
│   │   ├── payment-processing.service.ts
│   │   ├── security.service.ts
│   │   ├── validation.service.ts
│   │   └── analytics.service.ts
│   ├── app.html             # Main application template
│   ├── app.ts               # Main application component
│   └── app.scss             # Global styles
├── assets/                  # Static assets
├── environments/            # Environment configurations
└── styles.scss              # Global styles
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### End-to-End Tests
```bash
npm run e2e
```

### Cypress Test Runner
```bash
npm run cypress:open
```

## 🚀 Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🔒 Security Features

- **PCI DSS Compliance** - Secure payment data handling
- **XSS Protection** - DOMPurify integration
- **Input Validation** - Comprehensive form validation
- **Secure Communication** - HTTPS enforcement
- **Tokenization** - Secure payment token processing

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices
- All modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Google Material Design for the UI components
- Stripe for payment processing capabilities
- The open source community

## 📞 Support

For support, email info@hereandnowai.com or visit [hereandnowai.com](https://hereandnowai.com)

## 🌐 Connect with HERE AND NOW AI

<div align="center">

[![Website](https://img.shields.io/badge/Website-hereandnowai.com-blue?style=for-the-badge)](https://hereandnowai.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-hereandnowai-blue?style=for-the-badge)](https://www.linkedin.com/company/hereandnowai/)
[![Instagram](https://img.shields.io/badge/Instagram-@hereandnow__ai-pink?style=for-the-badge)](https://instagram.com/hereandnow_ai)
[![GitHub](https://img.shields.io/badge/GitHub-hereandnowai-black?style=for-the-badge)](https://github.com/hereandnowai)
[![X](https://img.shields.io/badge/X-@hereandnow__ai-black?style=for-the-badge)](https://x.com/hereandnow_ai)
[![YouTube](https://img.shields.io/badge/YouTube-@hereandnow__ai-red?style=for-the-badge)](https://youtube.com/@hereandnow_ai)

</div>

---

<div align="center">
  <strong>Built with ❤️ by <a href="https://hereandnowai.com">HERE AND NOW AI</a></strong>
  <br>
  <em>designed with passion for innovation</em>
</div>
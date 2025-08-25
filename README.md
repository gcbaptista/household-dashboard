# 🏠 Household Dashboard

A beautiful, modern web application for managing shared household expenses between two people. Perfect for couples or roommates who want to track rent, utilities, furniture purchases, and groceries in an organized and fair way.

## ✨ Features

### 📊 Overview Dashboard

- Monthly spending trends visualization
- Current balance tracking
- Summary cards for all expense categories
- Settlement due dates

### 🏠 Rent & Salary Management

- Proportional rent splitting based on income
- Equal split option
- Custom ratio support
- Historical salary and rent payment tracking

### ⚡ Utilities Tracking

- Variable expenses (electricity, gas)
- Fixed expenses (internet, TV, mobile bundles)
- Monthly trend charts
- Fair 50/50 splitting

### 🪑 Furniture Expenses

- Categorized furniture tracking (living room, bedroom, kitchen, etc.)
- Multiple payment method support (joint account, individual payments)
- Investment tracking and sharing calculations

### 🛒 Groceries Management

- Store-by-store expense tracking
- Multiple payment sources
- Personal balance calculations
- Monthly summaries

## 🚀 Live Demo

Visit the live application: [https://gcbaptista.github.io/household-dashboard](https://gcbaptista.github.io/household-dashboard)

## 💻 Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Styling**: Modern CSS with custom properties and gradients
- **Responsive**: Mobile-first design approach
- **Deployment**: GitHub Pages

## 🛠️ Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/gcbaptista/household-dashboard.git
   cd household-dashboard
   ```

2. Open `index.html` in your browser or use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000`

## 📱 Features in Detail

### Smart Rent Splitting

The application automatically calculates fair rent contributions based on:

- **Proportional**: Split based on salary ratios
- **Equal**: 50/50 split regardless of income
- **Custom**: Define your own percentage split

### Expense Tracking

- Real-time balance calculations
- Multiple payment source tracking (joint account vs. personal)
- Historical data visualization
- Category-based organization

### Modern UI/UX

- Clean, intuitive interface
- Responsive design for all devices
- Smooth animations and transitions
- Accessible color scheme
- Touch-friendly controls

## 🔧 Customization

### Colors and Theming

The application uses CSS custom properties for easy theming. Modify the `:root` variables in the CSS:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... more variables */
}
```

### Adding New Expense Categories

Extend the application by adding new tabs and corresponding JavaScript functions following the existing patterns.

## 📝 Data Persistence

Currently, the application is client-side only. Data is reset on page refresh. For persistent data storage, consider:

- Local Storage implementation
- Integration with Firebase/Supabase
- Backend API development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chart.js for excellent charting capabilities
- Modern CSS techniques and responsive design principles
- Clean, minimal design inspiration

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainer.

---

Made with ❤️ for better household management

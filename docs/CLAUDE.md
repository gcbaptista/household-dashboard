# Claude AI Assistant Guidelines

This document defines the project context and guidelines for AI assistance on the Household Dashboard project.

## Project Overview

The Household Dashboard is a modern web application designed for managing shared household expenses between two people (couples or roommates). It provides tools for:

- Rent splitting based on income proportions
- Utilities tracking and equal splitting
- Furniture expense management with categorization
- Grocery expense tracking with balance calculations
- Visual analytics and historical data

## Technical Architecture

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Styling**: Modern CSS with custom properties, flexbox, and grid
- **Deployment**: GitHub Pages (static hosting)
- **No Backend**: Client-side only application

### Code Organization
- Single-page application (`index.html`)
- Embedded CSS and JavaScript (no build process)
- Modular JavaScript functions for each feature
- Responsive design with mobile-first approach

## Development Principles

### Code Quality
- Use semantic HTML5 elements
- Follow CSS best practices with custom properties
- Write clean, readable JavaScript with proper error handling
- Maintain accessibility standards (ARIA labels, keyboard navigation)
- Ensure cross-browser compatibility

### UI/UX Guidelines
- Modern, clean interface with gradients and shadows
- Consistent color scheme using CSS custom properties
- Smooth animations and transitions
- Mobile-responsive design
- Intuitive navigation and form validation

### Data Handling
- Currently client-side only (data resets on refresh)
- Use local variables for calculations
- Form validation and user feedback
- Future consideration: Local Storage or cloud integration

## Feature Requirements

### Core Functionality
1. **Rent Calculation**: Support proportional, equal, and custom splitting
2. **Utilities Tracking**: Handle both fixed and variable costs
3. **Expense Categories**: Furniture and groceries with payment source tracking
4. **Visual Analytics**: Charts for trends and summaries
5. **Balance Calculation**: Real-time debt/credit calculations between users

### User Experience
- Immediate feedback on actions (notifications)
- Clear visual hierarchy and information architecture
- Consistent form patterns across all tabs
- Error handling and validation messages

## Deployment Configuration

### GitHub Pages Setup
- Repository: `gcbaptista/household-dashboard`
- Source: Main branch, root directory
- Custom domain: Not configured (uses default GitHub Pages URL)
- HTTPS: Enabled by default

### File Structure
```
/
├── index.html          # Main application file
├── README.md           # Project documentation
├── docs/
│   └── CLAUDE.md       # This file (AI assistant guidelines)
├── .gitignore          # Git ignore patterns
└── LICENSE             # MIT License (optional)
```

## Maintenance Guidelines

### Code Updates
- Test changes across different browsers and devices
- Maintain backward compatibility
- Update documentation when adding features
- Follow semantic versioning principles

### Content Updates
- Keep demo data realistic and helpful
- Update date references to current timeframes
- Ensure calculations remain accurate
- Test all interactive features

## AI Assistant Instructions

When working on this project:

1. **Always read this file first** to understand project context
2. **Maintain the single-file architecture** unless explicitly changing it
3. **Preserve the modern UI/UX design** and responsive behavior
4. **Test calculations thoroughly** - financial accuracy is critical
5. **Keep accessibility in mind** when making changes
6. **Update documentation** when adding new features
7. **Consider mobile users** for any UI changes

### Common Tasks
- Adding new expense categories
- Improving calculations or splitting logic
- Enhancing UI components or responsiveness
- Adding data persistence features
- Implementing new chart types or visualizations

### Code Patterns
- Follow existing JavaScript function naming conventions
- Use CSS custom properties for any new colors
- Maintain consistent form and button styling
- Add proper error handling and user feedback
- Use semantic class names and IDs

## Future Enhancements

Potential areas for expansion:
- Local Storage for data persistence
- Export functionality (CSV, PDF)
- Multi-currency support
- Budget planning features
- Integration with banking APIs
- Progressive Web App (PWA) features
- Dark mode theme
- Multi-language support

---

*Last updated: August 2025*

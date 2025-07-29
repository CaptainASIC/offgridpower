# Contributing to Off-Grid Energy System Design

Thank you for your interest in contributing to this project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement:

1. **Check existing issues** first to avoid duplicates
2. **Use the issue templates** when available
3. **Provide detailed information** including:
   - Steps to reproduce the issue
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/environment details

### Submitting Changes

1. **Fork the repository** to your GitHub account
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards below
4. **Test your changes** thoroughly
5. **Commit with clear messages** following conventional commits:
   ```bash
   git commit -m "feat: add new component specification display"
   git commit -m "fix: resolve mobile responsive layout issue"
   git commit -m "docs: update installation instructions"
   ```
6. **Push to your fork** and create a Pull Request

### Pull Request Guidelines

- **Provide a clear description** of what your PR does
- **Reference related issues** using `Fixes #123` or `Closes #123`
- **Include screenshots** for UI changes
- **Ensure all tests pass** and the build succeeds
- **Keep PRs focused** - one feature or fix per PR
- **Update documentation** if needed

## 🛠️ Development Setup

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm
- Git

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/offgridpower.git
cd offgridpower

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # shadcn/ui components
├── assets/             # Images and static files
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 📝 Coding Standards

### React/JavaScript

- Use **functional components** with hooks
- Follow **React best practices** for performance
- Use **TypeScript** for new components when possible
- Implement **proper error boundaries**
- Write **accessible components** (ARIA labels, semantic HTML)

### Styling

- Use **Tailwind CSS** utility classes
- Follow **responsive design** principles
- Maintain **dark mode** compatibility
- Use **shadcn/ui components** when available
- Keep **consistent spacing** and typography

### Code Quality

- **ESLint** configuration must pass
- **Prettier** formatting is enforced
- **No console.log** statements in production code
- **Meaningful variable names** and comments
- **Modular code** - keep functions small and focused

## 🎨 Design Guidelines

### UI/UX Principles

- **Dark mode first** design approach
- **Professional appearance** suitable for technical documentation
- **Mobile-responsive** layouts
- **Accessible** to users with disabilities
- **Fast loading** and optimized performance

### Component Design

- **Reusable components** with clear props
- **Consistent styling** across the application
- **Loading states** for async operations
- **Error handling** with user-friendly messages
- **Interactive feedback** for user actions

## 📊 System Knowledge

### Energy System Expertise

When contributing system-related content:

- **Verify technical accuracy** with reliable sources
- **Include proper specifications** with model numbers
- **Consider safety implications** of electrical systems
- **Reference manufacturer documentation**
- **Maintain consistency** with existing system design

### Component Categories

- **Solar panels**: Specifications, mounting, wiring
- **Batteries**: Chemistry, capacity, safety features
- **Inverters**: Power ratings, efficiency, features
- **Protection devices**: EMP shields, surge protectors
- **Distribution**: Wiring, breakers, disconnects

## 🚀 Deployment

### Railway Deployment

The project is configured for automatic deployment on Railway:

- **Automatic builds** on push to main branch
- **Environment variables** managed through Railway dashboard
- **Custom domains** can be configured
- **SSL certificates** are automatically provisioned

### Docker Deployment

Alternative deployment using Docker:

```bash
# Build image
docker build -t offgridpower .

# Run container
docker run -p 3000:3000 offgridpower
```

## 📋 Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working correctly
- `enhancement` - New feature or improvement
- `documentation` - Documentation updates needed
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `system-design` - Related to energy system specifications
- `ui/ux` - User interface or experience improvements
- `performance` - Performance optimization
- `accessibility` - Accessibility improvements

## 🔍 Review Process

### Code Review Criteria

- **Functionality** - Does the code work as intended?
- **Code quality** - Is it readable, maintainable, and well-structured?
- **Performance** - Are there any performance implications?
- **Security** - Are there any security concerns?
- **Documentation** - Is the code properly documented?
- **Testing** - Are there adequate tests for the changes?

### Approval Process

- At least **one approval** required from a maintainer
- **All checks must pass** (build, tests, linting)
- **No merge conflicts** with the main branch
- **Documentation updated** if necessary

## 🆘 Getting Help

If you need help with contributing:

1. **Check the documentation** in this repository
2. **Search existing issues** for similar questions
3. **Open a new issue** with the `help wanted` label
4. **Join discussions** in existing issues and PRs

## 📞 Contact

- **Project Creator**: Captain ASIC
- **GitHub**: [@CaptainASIC](https://github.com/CaptainASIC)
- **Repository**: [offgridpower](https://github.com/CaptainASIC/offgridpower)
- **Issues**: [Report here](https://github.com/CaptainASIC/offgridpower/issues)

## 🙏 Recognition

Contributors will be recognized in:

- **README.md** acknowledgments section
- **CHANGELOG.md** for significant contributions
- **GitHub contributors** page

Thank you for helping make this project better! 🚀

---

**⚡ Built for resilience, designed for the future, protected against everything.**


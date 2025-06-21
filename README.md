# Maksim Zaytsev - Personal Links Tree

A modern, responsive personal link tree website built with React, TypeScript, and Tailwind CSS. This project showcases Maksim Zaytsev's professional profile as a fullstack developer based in the Czech Republic.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Social Integration**: Direct links to professional social profiles

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **SEO**: React Helmet Async
- **Icons**: React Icons
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/visit-zaytsev.git
cd visit-zaytsev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run generate-sitemap` - Generate sitemap.xml

## 📁 Project Structure

```
src/
├── components/
│   ├── ProfileCard.tsx    # Main profile component
│   └── SEOHead.tsx        # SEO meta tags component
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🎨 Customization

### Profile Information
Update the profile information in `src/components/ProfileCard.tsx`:
- Name and description
- Profile photo (replace `/photo-profile.png`)
- Social media links
- Tech stack icons

### SEO Settings
Modify SEO settings in `src/components/SEOHead.tsx`:
- Page title and description
- Open Graph images
- Twitter card settings
- Canonical URLs

### Styling
The project uses Tailwind CSS for styling. Customize the design by:
- Modifying Tailwind classes in components
- Updating the background image (`/background.jpg`)
- Adjusting color schemes and typography

## 🌐 Deployment

The site is optimized for deployment on various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use the `gh-pages` branch for static hosting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

- **Website**: [zaytsev.cz](https://www.zaytsev.cz/)
- **LinkedIn**: [zaytsevcz](https://www.linkedin.com/in/zaytsevcz/)
- **GitHub**: [zaymax](https://github.com/zaymax)
- **Email**: maksim@zaytsev.cz

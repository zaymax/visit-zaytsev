import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Maksim Zaytsev - Fullstack Developer",
  description = "I'm a fullstack developer based in the Czech Republic, specializing in enterprise systems with a strong focus on UX/UI design. Expert in TypeScript, React, JavaScript, and Node.js.",
  keywords = "fullstack developer, TypeScript, React, JavaScript, Node.js, Czech Republic, enterprise systems, UX/UI design, web development",
  image = "https://me.zaytsev.cz/og-image.jpg",
  url = "https://me.zaytsev.cz/",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Maksim Zaytsev" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Maksim Zaytsev Links Tree" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@zaytsevcz" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      <meta name="robots" content="index, follow" />
      <meta name="application-name" content="Maksim Zaytsev" />
      <meta name="theme-color" content="#111827" />
    </Helmet>
  );
};

export default SEOHead; 
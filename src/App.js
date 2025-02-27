import React from "react";
import { Helmet } from "react-helmet";

function App() {
  const baseUrl = window.location.origin; // Use current location for production
  const product = {
    title: "Awesome Product",
    description: "Check out our awesome new product. It will change your life!",
    imageUrl: "https://akashgo-mediaready.videoready.tv/akashgo/image/fetch/f_auto,fl_lossy,q_auto,w_620,h_824/https://tstatic.playbinge.in/AkashGo/Images/AadhaIshqHindi_Series_poster.jpg",
    url: baseUrl, // Dynamically set URL
  };
  
  return (
    <>
      <Helmet>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl} />
        <meta property="og:url" content={product.url} />
        <meta property="og:type" content="website" />
        
        {/* Optional for Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={product.imageUrl} />
      </Helmet>

      {/* Your Page Content */}
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
    </>
  );
}

export default App;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>First Choice Insurance Services - San Antonio Insurance Agency</title>
      <meta name="description" content="First Choice Insurance Services is your local independent insurance agency in San Antonio, TX. We offer auto, home, business, and SR-22 insurance." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://firstchoicesa.com/" />
      <meta property="og:title" content="First Choice Insurance Services - San Antonio Insurance Agency" />
      <meta property="og:description" content="Your local independent insurance agency helping you find the best coverage at competitive rates." />
      <meta property="og:image" content="/social-preview.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://firstchoicesa.com/" />
      <meta property="twitter:title" content="First Choice Insurance Services - San Antonio Insurance Agency" />
      <meta property="twitter:description" content="Your local independent insurance agency helping you find the best coverage at competitive rates." />
      <meta property="twitter:image" content="/social-preview.jpg" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "First Choice Insurance Services",
            "image": "/hero.jpg",
            "telephone": "(210) 590-9955",
            "email": "info@firstchoicesa.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8526 Tuxford",
              "addressLocality": "San Antonio",
              "addressRegion": "TX",
              "postalCode": "78239",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "priceRange": "$$",
            "servesCuisine": "Insurance Services",
            "sameAs": [
              "https://www.facebook.com/firstchoiceinsurance",
              "https://www.instagram.com/firstchoiceinsurance"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
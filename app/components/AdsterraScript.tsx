"use client";

import Script from "next/script";

export default function AdsterraScript() {
  return (
    <Script
      src="//a.adsterra.com/s/o.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== 'undefined') {
          if (window.AdstreamStarted === undefined) {
            window.AdstreamStarted = true;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.text = `
              var ad_placement_id = "YOUR_AD_PLACEMENT_ID_HERE";
            `;
            document.body.appendChild(script);
          }
        }
      }}
    />
  );
}

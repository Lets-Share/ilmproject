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
              var ad_placement_id = "30773081";
              var ad_placement_id_300x250 = "30773082";
            `;
            document.body.appendChild(script);
          }
        }
      }}
    />
  );
}

import React from 'react';
import { motion } from 'framer-motion';

interface AdSlotProps {
  slotId: string;
  adCode?: string;
  height?: number;
  width?: string;
  label?: string;
}

/**
 * Adsterra Ad Component
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to adsterra.com and create an account
 * 2. Create ad slots for your website
 * 3. Get your ad code from Adsterra dashboard
 * 4. Replace the placeholder content in this component
 * 
 * USAGE EXAMPLE:
 * <AdstearraAd slotId="ad-slot-1" height={300} />
 */

export const AdstearraAd: React.FC<AdSlotProps> = ({
  slotId,
  adCode,
  height = 300,
  width = "100%",
  label = "Advertisement"
}) => {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const slot = document.getElementById(slotId);
      if (slot && adCode) {
        slot.innerHTML = adCode;
          if (typeof window.atstring !== 'undefined') {
            window.atstring.push({ slot: slotId });
        }
      }
    } catch {
      console.log('Ad loading deferred');
    }
  }, [slotId, adCode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 my-6 sm:my-8"
    >
      <div className="border-2 border-coffee/20 rounded-2xl p-4 sm:p-6 bg-white/50 backdrop-blur-md text-center">
        <p className="text-xs text-coffee/60 mb-4 font-semibold uppercase">{label}</p>
        <div
          id={slotId}
          className="w-full max-w-full overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[250px]"
          style={{
            minHeight: `${Math.max(height, 180)}px`,
            width: width,
          }}
        >
          {!adCode && (
            <div className="w-full flex items-center justify-center bg-terracotta/5 rounded-xl text-coffee/60 text-sm italic" style={{ minHeight: `${Math.max(height, 180)}px` }}>
              Ad Slot ({slotId}) - Replace with your Adsterra code
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * HOW TO REPLACE WITH ACTUAL ADS:
 * 
 * 1. Get your Adsterra ad code:
 *    - Login to adsterra.com
 *    - Navigate to "Ad Units"
 *    - Create new ad unit for your website
 *    - Copy the ad code
 * 
 * 2. Update the ad slots in page.tsx:
 *    Replace:
 *    <div id="ad-slot-1">...</div>
 *    
 *    With your Adsterra code or use the AdstearraAd component:
 *    <AdstearraAd 
 *      slotId="ad-slot-1" 
 *      adCode="YOUR_ADSTERRA_CODE_HERE"
 *      height={300}
 *    />
 * 
 * 3. Recommended ad sizes:
 *    - Ad Slot 1 (After Hero): 728x90 (Leaderboard) or 300x250 (Medium Rectangle)
 *    - Ad Slot 2 (Between Sections): 300x250 (Medium Rectangle) or 300x600 (Half Page)
 *    - Ad Slot 3 (Before FAQ): 728x90 (Leaderboard)
 *    - Ad Slot 4 (Before Contact): 728x90 (Leaderboard)
 * 
 * 4. Make sure Adsterra script is loaded:
 *    The layout.tsx already includes the Adsterra script initialization
 * 
 * 5. Optimize placement:
 *    - Place ads above the fold for better CTR
 *    - Use different ad sizes for variety
 *    - Don't place too many ads to avoid cluttering
 *    - Allow proper spacing between ads and content
 */

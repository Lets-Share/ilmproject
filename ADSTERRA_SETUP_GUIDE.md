# Adsterra Ad Setup Guide for ILM HUB

## Overview
Your website now has **4 strategic ad placements** ready for Adsterra ads:
- **Ad Slot 1**: After Hero Section (Top Banner)
- **Ad Slot 2**: Between Library & Installation (Middle Banner)
- **Ad Slot 3**: Between Installation & FAQ (Middle-Lower Banner)
- **Ad Slot 4**: Before Contact Section (Bottom Banner)

---

## Step 1: Create Adsterra Account
1. Visit: **https://adsterra.com**
2. Click "Sign Up" and create your account
3. Complete email verification
4. Fill in your website information:
   - Website URL: Your domain
   - Website category: Islamic Library / Religious Content
   - Primary traffic source: Mobile App Promotion

---

## Step 2: Verify Website
1. Go to "Websites" section
2. Add your domain: `yoursite.com`
3. Adsterra will send verification code
4. Add verification code to your website's meta tag or HTML file

---

## Step 3: Create Ad Units
1. Navigate to **"Ad Units"** → **"Create New"**
2. Create 4 ad units with these specifications:

### Ad Unit 1 (Top Banner):
- **Name**: ILM HUB - Hero Section
- **Format**: Banner (728×90) or Medium Rectangle (300×250)
- **Size**: 728×90 recommended for better layout
- **Type**: Display
- **Placement**: Above the fold

### Ad Unit 2 (Library Section):
- **Name**: ILM HUB - Library Section
- **Format**: Medium Rectangle (300×250) or Half Page (300×600)
- **Size**: 300×250 recommended
- **Type**: Display
- **Placement**: Middle of page

### Ad Unit 3 (Installation Section):
- **Name**: ILM HUB - Installation Section
- **Format**: Banner (728×90)
- **Size**: 728×90
- **Type**: Display
- **Placement**: Middle-lower area

### Ad Unit 4 (Contact Section):
- **Name**: ILM HUB - Contact Section
- **Format**: Banner (728×90) or 300×250
- **Size**: 728×90
- **Type**: Display
- **Placement**: Bottom area

---

## Step 4: Get Your Ad Code
1. For each ad unit, Adsterra provides HTML code
2. The code will look like:
```html
<!-- Adsterra Ad Code -->
<div id="ezoic-pub-ad-placeholder-109"></div>
```

Or with direct banner code:
```html
<div id="adsterra-slot-XXX">
<!-- Code will be provided by Adsterra -->
</div>
```

---

## Step 5: Update Your Website
### Option A: Direct HTML Replacement (Recommended)
1. Open `app/page.tsx`
2. Find each ad slot:
   ```
   {/* --- AD SLOT 1: Top Banner (After Hero) --- */}
   <div id="ad-slot-1" className="min-h-96">
     <div>Ad Slot 1 - Replace with your Adsterra code</div>
   </div>
   ```

3. Replace the inner content with your Adsterra code:
   ```html
   <div id="ad-slot-1" dangerouslySetInnerHTML={{ 
     __html: `YOUR_ADSTERRA_CODE_HERE` 
   }} />
   ```

### Option B: Using the AdstearraAd Component
1. In `page.tsx`, import the component:
   ```typescript
   import { AdstearraAd } from './components/AdstearraAd';
   ```

2. Replace ad slots with:
   ```jsx
   <AdstearraAd 
     slotId="ad-slot-1" 
     adCode="YOUR_ADSTERRA_CODE_HERE"
     height={300}
   />
   ```

---

## Step 6: Enable Adsterra Script
The Adsterra script is already added to your `layout.tsx`. 

**Update the script with your Adsterra placement ID:**
1. In Adsterra dashboard, find your "Placement ID"
2. Open `app/layout.tsx`
3. Update this section:
   ```typescript
   var ad_placement_id = "YOUR_AD_PLACEMENT_ID_HERE";
   ```

---

## Step 7: Test Your Ads
1. Save your changes
2. Refresh your website at `http://localhost:3000`
3. You should see your Adsterra ads in the 4 locations
4. In Adsterra dashboard, you can see real-time statistics

---

## Ad Placement Recommendations

### Best Practices:
- ✅ Ads should not cover main content
- ✅ Use proper spacing (8-16px margin) around ads
- ✅ Don't place ads too close together
- ✅ Keep ads relevant to your audience
- ✅ Test mobile responsiveness

### Optimal Sizes for Your Design:
- **Top Banner**: 728×90 (Leaderboard) - Perfect for hero section
- **Middle Ads**: 300×250 (Medium Rectangle) - Better visibility
- **Bottom Banner**: 728×90 (Leaderboard) - Standard footer ad

### Mobile-Responsive Sizes:
- Mobile: 300×250 or 320×50
- Tablet: 728×90 or 300×600
- Desktop: 728×90 or 970×90

---

## Ad Revenue Tips

### To Maximize Earnings:
1. **High-Quality Traffic**: Focus on organic, quality visitors
2. **Relevant Ads**: Select categories matching Islamic content
3. **Strategic Placement**: Keep ads visible but not intrusive
4. **Mobile Optimization**: 70% of your users will be on mobile
5. **Frequency Capping**: Don't show same ad too many times
6. **User Experience**: Balance ads with content

### Expected CTR (Click-Through Rate):
- **Above fold ads**: 0.5-2%
- **Mid-page ads**: 0.3-0.8%
- **Below fold ads**: 0.1-0.3%

---

## Troubleshooting

### Ads Not Showing?
1. ✓ Verify website is approved on Adsterra
2. ✓ Check ad code is correctly inserted
3. ✓ Ensure Adsterra script is loaded in `layout.tsx`
4. ✓ Clear browser cache and refresh
5. ✓ Check browser console for errors

### Low Ad Revenue?
1. ✓ Ensure sufficient daily traffic (minimum 100+ daily visitors)
2. ✓ Check ads are from high-paying countries (US, UK, Canada)
3. ✓ Improve ad placement visibility
4. ✓ Add more relevant content

### Script Errors?
1. Check that Script component is imported in layout.tsx
2. Verify your Placement ID is correct
3. Ensure Next.js version supports Script component

---

## Next Steps
1. ✓ Create Adsterra account
2. ✓ Verify your website
3. ✓ Create 4 ad units
4. ✓ Get your ad codes
5. ✓ Update your website
6. ✓ Test the ads
7. ✓ Monitor performance in Adsterra dashboard

---

## Support
- Adsterra Support: https://support.adsterra.com
- Your Publisher ID: [Will be provided in Adsterra dashboard]
- Website: ILM HUB (Islamic Library App)

---

## Important Notes
- Ads should comply with Adsterra's content policy
- Islamic content is generally approved
- Keep ads away from sensitive content
- Monitor ad quality and performance regularly
- Update ad placements based on user feedback

**Happy monetizing! 🎉**

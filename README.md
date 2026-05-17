# 🏡 Country Living Depot

> **Cultivating Faith. Building Self-Sufficiency. Preparing Souls for Eternity.**
>
> Medical Missionary Work · Evangelism · Country Living · Self-Sufficiency

[![Live Site](https://img.shields.io/badge/Live%20Site-countrylivingdepot.com-2D5016?style=for-the-badge)](https://countrylivingdepot.com)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://dwatkins4782.github.io/country-living-depot/)

---

## 📖 About

**Country Living Depot** is a faith-based preparedness and self-sufficiency resource store created for Seventh-day Adventist families and anyone answering the biblical call to country living. We offer carefully crafted eBooks, booklets, and digital guides grounded in the **King James Bible** and the **Spirit of Prophecy** writings of Ellen G. White.

This is more than a store — it is a ministry equipping God's people to leave the cities, build sustainable homesteads, develop natural healing knowledge, and prepare both physically and spiritually for the coming of Christ.

> *"Again and again the Lord has instructed that our people should take their families away from the cities, into the country, where they can raise their own provisions; for in the future the problem of buying and selling will be a very serious one."*
> — Ellen G. White, *Country Living*, p. 9

---

## 🎯 Mission

Country Living Depot exists to fulfill four complementary callings:

### 1. Cultivating Faith
Every resource is anchored in Scripture (KJV) and the Spirit of Prophecy. We do not separate practical knowledge from spiritual conviction — they are woven together throughout every guide.

### 2. Building Self-Sufficiency
Real skills for real families: food production and preservation, water sourcing, energy independence, shelter construction, natural remedies, soap making, and cottage industry income.

### 3. Preparing Souls for Eternity
Practical preparation serves a higher purpose. Country living gives families the simplicity, health, and spiritual environment to grow in Christ and prepare for the soon return of Jesus.

### 4. Medical Missionary Work & Evangelism
Equipping families with NEWSTART health principles, hydrotherapy, herbal medicine, and biblical witnessing tools so they can serve their communities through ministry of healing.

---

## 📚 What We Offer

### Resource Categories

| Type | Count | Description |
|------|-------|-------------|
| **📖 eBooks** | 2 | In-depth digital guides (180-280+ pages) |
| **📜 Booklets** | 3 | Focused topic guides (65-85 pages) |
| **🎁 Bundles** | 1 | Complete library packages with bonus materials |

### Featured Resources

- **Country Living Depot eBook** — $29.99 · 280+ pages · The complete guide
- **City to Country Guide** — $19.99 · 180+ pages · 5-phase transition blueprint
- **Preserve and Provide** — $14.99 · 85+ pages · All 6 food preservation methods
- **Water Wisdom** — $12.99 · 65+ pages · Complete water sourcing and purification
- **Hygiene and First Aid** — $14.99 · 75+ pages · Natural health and remedies
- **Country Living Depot Bundle** — $69.99 · 700+ pages · All resources + bonuses (35% off)

### 13 Topic Guides

Food Production · Water Supply · Grains & Milling · Energy Independence · Shelter & Greenhouses · Land & Resources · First Aid & Remedies · Hygiene & Soap Making · Root Cellar Design · Sustainable Living · Clothing & Textiles · City-to-Country Transition · Income & Financial Stewardship

---

## ✨ Site Features

### For Visitors
- 🛒 **E-commerce** — Browse, filter, and purchase resources via secure Stripe checkout
- 📱 **Mobile responsive** — Looks great on any device
- 🌅 **Editorial design** — Inspired by Squarespace's Applet Studio template aesthetic
- 🎨 **Rich imagery** — Custom-painted SVG illustrations + photography
- ⚡ **Lightning fast** — Static site with global CDN delivery
- 📧 **Newsletter** — Free preparedness checklist with signup
- 💬 **Contact form** — Direct line to ministry support
- 📅 **Booking system** — Schedule free discovery calls
- ✝️ **Sabbath observed** — Friday sundown to Saturday sundown

### For Davonte (Site Owner)
- 🆓 **$0/month hosting** — GitHub Pages with custom domain
- 💳 **Stripe Payment Links** — Industry-standard 2.9% + 30¢ per transaction
- 📬 **FormSubmit.co** — Free contact form backend, no API keys needed
- 📊 **SEO ready** — Schema.org JSON-LD, OG tags, Twitter cards, sitemap-ready
- 🔧 **Full code control** — No vendor lock-in, infinitely customizable

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 (via CDN, no build step) |
| **Styling** | Custom CSS with CSS Variables + design system |
| **Fonts** | Playfair Display (headings) + Jost (body) |
| **Icons** | Inline SVG (no external dependencies) |
| **Hosting** | GitHub Pages (free, global CDN) |
| **Domain** | GoDaddy → CNAME → GitHub Pages |
| **HTTPS** | Free SSL via GitHub Pages + Let's Encrypt |
| **Forms** | FormSubmit.co (free, no backend needed) |
| **Payments** | Stripe Payment Links |
| **Analytics** | Ready for Google Analytics / Plausible |

---

## 🚀 Deployment

### Prerequisites
- A GitHub account (you have: `Dwatkins4782`)
- A domain (you have: `countrylivingdepot.com` via GoDaddy)
- Stripe account (for accepting payments)

### Initial Setup

1. **Clone or download this repo**
2. **Customize** `index.html` with your branding, products, and content
3. **Replace Stripe placeholders** — Search `test_REPLACE_WITH_REAL_LINK` and replace each with real Stripe Payment Link URLs from dashboard.stripe.com/payment-links
4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

### Enable GitHub Pages

1. Go to **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / Folder: `/ (root)`
4. **Save**
5. Site live at `https://dwatkins4782.github.io/country-living-depot/`

### Custom Domain (GoDaddy → GitHub Pages)

Add these DNS records in GoDaddy DNS Manager:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |
| CNAME | `www` | `dwatkins4782.github.io` | 600 |

Then in GitHub Pages settings:
- **Custom domain:** `countrylivingdepot.com`
- ✅ **Enforce HTTPS**

---

## 📁 File Structure

```
country-living-depot/
├── index.html              # Main site (standalone, all-in-one)
├── 404.html                # Friendly redirect for missing pages
├── CNAME                   # Tells GitHub the custom domain
├── README.md               # This file
└── country-living-depot.jsx # React source (for reference)
```

---

## 🎨 Brand Identity

### Color Palette
- **Forest Green** `#2D5016` — Primary accent, faith and growth
- **Cream** `#faf6f0` — Warm background, peace and simplicity
- **Near-Black** `#050000` — Text and emphasis
- **Amber** `#8B6914` — Secondary accent, harvest and abundance
- **Sage Green** `#e8efe0` — Subtle highlights

### Typography
- **Headings:** Playfair Display (elegant serif, light 400 weight)
- **Body:** Jost (clean geometric sans-serif, light 300 weight)

### Design Principles
- Editorial minimalism (Squarespace / Applet Studio inspired)
- Generous white space
- Subtle hairline dividers, no heavy borders
- Cinematic scroll reveals with cubic-bezier easing
- Frosted glass nav, animated gradients

---

## 🔌 Integrations

| Service | Purpose | Cost |
|---------|---------|------|
| **GitHub Pages** | Hosting | Free |
| **Stripe Payment Links** | Checkout | 2.9% + 30¢ per sale |
| **FormSubmit.co** | Contact/Newsletter | Free |
| **GoDaddy** | Domain | ~$20/year |
| **Unsplash CDN** | Hero photography | Free |
| **Google Fonts** | Typography | Free |

**Total recurring cost: ~$20/year** (just the domain renewal)

---

## 🛡️ Ministry Statement

This site is published by **Country Living Depot** as a non-denominational resource for serious Bible students preparing for the close of probation. All teachings align with the historic Seventh-day Adventist understanding of:

- The Sabbath as the seventh day (Saturday)
- The investigative judgment beginning 1844
- The Three Angels' Messages of Revelation 14
- The Spirit of Prophecy as gift to the remnant church
- The soon return of Christ in glory
- The state of the dead and the millennium

> *"Prepare thy work without, and make it fit for thyself in the field; and afterwards build thine house."*
> — Proverbs 24:27

---

## 📬 Contact

- **Website:** [countrylivingdepot.com](https://countrylivingdepot.com)
- **Email:** hello@countrylivingdepot.com
- **Response Time:** 24-48 hours (Sunday–Friday, Sabbath observed)
- **Free Discovery Call:** Schedule via the site

### Social Media
- Instagram · Facebook · Pinterest · YouTube

---

## 📜 License

Site code and design © 2026 Country Living Depot. All rights reserved.

Theological content is offered freely for personal study and edification, with attribution requested when shared.

---

## 🙏 Acknowledgments

- All Scripture quoted from the King James Version (Public Domain)
- Spirit of Prophecy quotations from Ellen G. White (with reference attribution)
- Built with care for the remnant church and all who hunger for the bread of life

---

**"Behold, I come quickly: blessed is he that keepeth the sayings of the prophecy of this book."**
*— Revelation 22:7*

🏡🌾✨

import { useState, useEffect, useRef, useCallback } from "react";

/* ---- ICONS ---- */
const CartIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const EyeIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>);
const ChevDown = ({ open }) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? "rotate(180deg)" : "none", transition: "0.3s", flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>);
const CheckSvg = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>);
const ArrowR = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const ArrowL = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>);

/* ---- SCENE ILLUSTRATION ---- */
function SceneIllust({ type, color }) {
  return (
    <div className="pcard-accent" style={{ background: color || "#2D5016" }} />
  );
}

/* ---- 3D STONE SLAB ---- */
function Stone3D({ children, featured }) {
  return (
    <div className={"slab" + (featured ? " slab-f" : "")}>
      <div className="slab-main">
        <div className="slab-face">
          <div className="slab-tex" />
          <div className="slab-inner">{children}</div>
        </div>
        <div className="slab-edge-r" />
        <div className="slab-edge-b" />
      </div>
    </div>
  );
}

/* ---- ROLLING HILLS ---- */
function HeroHills() {
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 200" fill="none" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
        <path d="M0 200V130C120 160 240 100 400 120C560 140 680 80 840 110C1000 140 1120 90 1280 120C1360 135 1400 110 1440 100V200H0Z" fill="#2D5016" opacity="0.08" />
        <path d="M0 200V150C160 120 280 160 440 130C600 100 720 150 880 120C1040 90 1160 140 1320 110C1400 95 1440 120 1440 120V200H0Z" fill="#2D5016" opacity="0.12" />
        <path d="M0 200V165C100 140 220 175 380 145C540 115 660 160 840 135C1020 110 1140 150 1300 125C1380 115 1440 135 1440 135V200H0Z" fill="#f7f9f5" />
      </svg>
    </div>
  );
}

function RollingHills({ color }) {
  return (
    <div style={{ marginTop: -2, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 100" fill="none" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
        <path d="M0 100V60C120 30 240 70 400 40C560 10 680 50 840 30C1000 10 1120 50 1280 30C1360 20 1440 40 1440 40V100H0Z" fill={color || "#fff"} opacity="0.5" />
        <path d="M0 100V70C100 45 200 80 360 50C520 20 660 60 840 35C1020 10 1140 55 1300 30C1400 20 1440 40 1440 40V100H0Z" fill={color || "#fff"} />
      </svg>
    </div>
  );
}

/* ---- EGW ---- */
const EGW = {
  hero: ["There is a time coming when those who obey God will be herded together in camps. If they could get out of the cities, they would be kept out.", "Manuscript Releases, vol. 3, p. 69"],
  countryLiving: ["Again and again the Lord has instructed that our people should take their families away from the cities, into the country.", "Country Living, p. 9"],
  countryLiving2: ["To parents who are living in the cities, the Lord is sending an urgent message: Gather your children into your own houses.", "Country Living, p. 12"],
  food: ["Grains, fruits, nuts, and vegetables constitute the diet chosen for us by our Creator.", "Ministry of Healing, p. 296"],
  health: ["Pure air, sunlight, abstemiousness, rest, exercise, proper diet, the use of water, trust in divine power: these are the true remedies.", "Ministry of Healing, p. 127"],
  gardening: ["Study in agricultural lines should be the A, B, and C of the education given in our schools.", "Testimonies, vol. 6, p. 179"],
  shelter: ["Fathers and mothers who possess a piece of land and a comfortable home are kings and queens.", "The Adventist Home, p. 141"],
  selfSufficiency: ["Every person should have a knowledge of some useful trade or occupation by which, if need be, he may earn a livelihood.", "Education, p. 218"],
  preparation: ["We are not doing the will of God if we wait in idle expectancy for something to come that we should be working to accomplish.", "Last Day Events, p. 63"],
  water: ["In health and in sickness, pure water is one of heaven's choicest blessings.", "Ministry of Healing, p. 237"],
  clothing: ["Our clothing, while modest and simple, should be of good quality, of becoming colors, and suited for service.", "Ministry of Healing, p. 288"],
  income: ["Those who will do all that they can in the work of saving their own families will also do much in giving God's last message.", "Country Living, p. 16"],
  hygiene: ["Strict habits of cleanliness are vital to physical and mental health.", "Ministry of Healing, p. 275"],
  sustainable: ["The earth has bountiful treasures, and if men would cultivate it intelligently, all would have abundance.", "Testimonies, vol. 7, p. 87"],
  charcoal: ["I would advise the use of charcoal compresses for inflammation.", "Selected Messages, vol. 2, p. 294"],
  land: ["Let the families that are now crowded into the cities, move into the country.", "Country Living, p. 31"],
};

function EGWQuote({ id, style }) {
  const q = EGW[id];
  if (!q) return null;
  return (
    <div className="egw" style={style || {}}>
      <blockquote className="egw-text">{q[0]}</blockquote>
      <cite className="egw-src">{"-- Ellen G. White, " + q[1]}</cite>
    </div>
  );
}

/* ---- EXPANDER ---- */
function Exp({ title, children, num }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={"exp" + (open ? " exp-o" : "")} onClick={() => setOpen(!open)}>
      <div className="exp-h">
        {num && <span className="exp-n">{num}</span>}
        <h4 className="exp-t">{title}</h4>
        <ChevDown open={open} />
      </div>
      {open && <div className="exp-b" onClick={e => e.stopPropagation()}>{children}</div>}
    </div>
  );
}

function Ornament() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: "12px 0 28px", opacity: 0.2 }}>
      <div style={{ width: 60, height: 1, background: "linear-gradient(to right,transparent,#2D5016)" }} />
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5Z" fill="#2D5016" /></svg>
      <div style={{ width: 60, height: 1, background: "linear-gradient(to left,transparent,#2D5016)" }} />
    </div>
  );
}

/* ---- TOPIC PAGES DATA ---- */
const TOPICS = [
  { id: "food", title: "Complete Food Guide", label: "Nourishment", emoji: "\uD83C\uDF3E", color: "#3B6B3A", egw: "food", egw2: "gardening",
    intro: "God's original diet was given in Eden: 'Behold, I have given you every herb bearing seed...to you it shall be for meat' (Genesis 1:29).",
    items: [["Where to Get Resources","Heirloom seeds, agricultural co-ops, local farms, Azure Standard bulk drops. Church seed libraries."],["How to Grow Food","Soil testing, raised beds, companion planting, crop rotation, greenhouses. (6T 179)."],["How to Prepare Food","Mill wheat, sprout grains, ferment vegetables. Simple and natural (MH 296)."],["How to Purchase Food","Buy bulk. Form church co-ops. Budget consistently. (CL 9)."],["How to Preserve Food","Joseph stored grain seven years (Genesis 41:35-36). Six methods: canning, dehydrating, Mylar, freeze drying, dry canning, storage."]],
    extra: [["Canning","Water bath 212F for high-acid. Pressure 240F / 10-15 PSI for low-acid."],["Dehydrating","Removes 80-95% moisture. Lasts 1-5 years."],["Mylar Bags","25-30 year shelf life with O2 absorbers."],["Storage Systems","50-70F, under 15% humidity, darkness."],["Freeze Drying","Retains 97% nutrition. Lasts 25+ years."],["Dry Canning","Oven at 200F for dry goods. Extends to 5-10 years."]],
    extraTitle: "Preservation Methods" },
  { id: "water", title: "Water Supply and Purification", label: "Life Source", emoji: "\uD83D\uDCA7", color: "#1a5276", egw: "water",
    intro: "In health and in sickness, pure water is one of heaven's choicest blessings (MH 237).",
    stats: [["1 gal/day","Per person"],["14 gal","2-week supply"],["365 gal","1-year/person"]],
    items: [["Well Drilling and Springs","Geological surveys, test for purity."],["Rain Catchment","1,000 sq ft roof collects about 18,000 gal per year."],["Gravity Filtration","Berkey, ceramic, biosand. No electricity needed."],["Purification","Boiling (1 min), UV, chemical (8 drops bleach per gal)."],["Long-Term Storage","Food-grade drums, IBC totes. Rotate 6-12 months."],["Emergency Sources","Dew, transpiration bags, solar stills (Isaiah 41:17)."]] },
  { id: "grains", title: "Grains and Milling", label: "Staff of Life", emoji: "\uD83C\uDF3E", color: "#8B6914", egw: null,
    intro: "Give us this day our daily bread (Matthew 6:11). A hand-cranked mill is essential.",
    items: [["Hard Red Wheat","12-15% protein, stores 30+ years."],["Hard White Wheat","Milder, lighter bread."],["Spelt","Ezekiel 4:9. More digestible."],["Einkorn","Oldest wheat. Lower gluten."],["Oats","Groats store 20+ years."],["Barley","Ruth 1:22, John 6:9."],["Quinoa","Complete protein."],["Rice","White stores 25-30 years."]],
    extra: [["Hand Crank Mills","Off-grid essential. $80-$450."],["Electric Burr Mills","Cool-ground flour. $200-$500."],["Stone Ground","Best nutrition retention."],["Impact Mills","Very fast, extremely fine."]],
    extraTitle: "Mill Types" },
  { id: "energy", title: "Energy Independence", label: "Power", emoji: "\u26A1", color: "#d4a843",
    intro: "Energy independence means freedom from centralized systems.",
    items: [["Solar Power","Panels, controller, batteries, inverter. $3,000-$15,000. Lasts 25-30 years."],["Wind Energy","400W-3kW turbines. 100-400 kWh per month."],["Wood and Biomass","Efficient stove 80%+. 4-6 cords per year. Rocket mass heaters 90%+."],["Generators","Propane stores indefinitely. 5,000-8,000W."]] },
  { id: "shelter", title: "Shelter and Greenhouses", label: "Covering", emoji: "\uD83C\uDFE0", color: "#6B4423", egw: "shelter",
    intro: "Fathers and mothers who possess a piece of land and a comfortable home are kings and queens (AH 141).",
    items: [["Log Cabin","R-1.41 per inch. 2-4 months to build."],["Timber Frame","500+ year lifespan."],["Tiny Home","$15,000-$60,000."],["Greenhouse / Hoop House","$300-$800 for 12x24."]] },
  { id: "land", title: "Land and Resources", label: "Stewardship", emoji: "\uD83C\uDF33", color: "#2D5016", egw: "land",
    intro: "The earth is the Lord's (Psalm 24:1).",
    items: [["Acreage Planning","2-5 acres min. 10-20 for full self-sufficiency."],["Firewood","4-6 cords per year. About 1 cord per acre per year sustainable."],["Natural Resources","Inventory water, timber, soil, wild edibles."],["Essential Tools","Axe, maul, saws, shovels, scythes."]] },
  { id: "firstaid", title: "First Aid and Remedies", label: "Healing", emoji: "\u2764\uFE0F", color: "#c0392b", egw: "health", egw2: "charcoal",
    intro: "Pure air, sunlight, abstemiousness, rest, exercise, proper diet, the use of water, trust in divine power: these are the true remedies (MH 127).",
    items: [["Wound Care","Saline cleaning, butterfly closures, suturing."],["Herbal Medicine","Charcoal, garlic, turmeric, echinacea, aloe, plantain."],["NEWSTART","Nutrition, Exercise, Water, Sunlight, Temperance, Air, Rest, Trust."],["Hydrotherapy","Compresses, fomentations, therapeutic baths."],["Charcoal Poultice","Draws toxins. I would advise charcoal (2SM 294)."],["First Aid Kit","75+ items including charcoal, tinctures, essential oils."]] },
  { id: "hygiene", title: "Hygiene and Soap Making", label: "Cleanliness", emoji: "\uD83E\uDDFC", color: "#5B7A5B", egw: "hygiene",
    intro: "Strict habits of cleanliness are vital (MH 275).",
    items: [["Cold Process Soap","Lye + oils = soap. Cure 4-6 weeks."],["Hot Process","Cooked 1-3 hrs. Usable immediately."],["Natural Products","Toothpaste, deodorant, shampoo from pantry ingredients."]] },
  { id: "rootcellar", title: "Root Cellar Design", label: "Preservation", emoji: "\uD83E\uDD54", color: "#8B6914",
    intro: "Nature's refrigerator. There is treasure in the dwelling of the wise (Proverbs 21:20).",
    stats: [["32-40F","Temperature"],["85-95%","Humidity"],["2","Vents"],["50-100 bu","Capacity"]],
    items: [["Carrots, beets, turnips","Damp sand in wooden boxes; 4-6 months."],["Potatoes","Complete darkness, single layer; 4-6 months."],["Onions and garlic","Mesh bags, drier area; 6-8 months."],["Apples and pears","Wrap individually, separate from veggies; 2-6 months."],["Canned goods","Mason jars on shelves for years."]] },
  { id: "sustainable", title: "Sustainable Living", label: "God's Plan", emoji: "\uD83C\uDF31", color: "#2D5016", egw: "sustainable",
    intro: "The earth has bountiful treasures (7T 87). Ark Yourself.",
    items: [["Permaculture","Food forests mimicking God's ecosystems."],["Composting","Browns + greens 30:1. The earth brought forth (Genesis 1:12)."],["Seed Saving","Be fruitful, and multiply (Genesis 1:28)."],["Animal Husbandry","Chickens 250-300 eggs/yr. Goats milk. Bees honey."],["Herbal Gardens","The leaf thereof for medicine (Ezekiel 47:12)."],["Community Networks","Two are better than one (Ecclesiastes 4:9)."]] },
  { id: "clothing", title: "Clothing and Textiles", label: "Covering", emoji: "\uD83E\uDDE5", color: "#5a3e1b", egw: "clothing",
    intro: "Our clothing, while modest and simple, should be of good quality (MH 288).",
    items: [["Sewing and Mending","Treadle machines work off-grid."],["Natural Fibers","Cotton, wool, linen, hemp."],["Knitting","Hats, socks, sweaters. Wool for warmth."],["Work Clothing","Layered: base, mid, outer."],["Footwear","Quality leather and rubber boots."],["Modest Wardrobe","15-20 pieces. Modest apparel (1 Timothy 2:9)."]] },
  { id: "transition", title: "City to Country Living", label: "The Move", emoji: "\uD83D\uDE9C", color: "#6B4423", egw: "countryLiving", egw2: "countryLiving2",
    intro: "Again and again the Lord has instructed...take their families away from the cities (CL 9).",
    items: [["Phase 1: Spiritual Prep","Pray. Study Country Living. Eliminate debt (Romans 13:8)."],["Phase 2: Skill Building","Garden, can, bake, first aid, soap making."],["Phase 3: Land Search","Water, soil, exposure, access, community. $2-5K per acre."],["Phase 4: The Move","90-day plan. Temporary shelter, test water, stockpile food."],["Phase 5: Establish","Year 1: garden. Year 2: trees, chickens. Year 3: income (Galatians 6:9)."]] },
  { id: "income", title: "Income and Financial", label: "Provision", emoji: "\uD83D\uDCB0", color: "#8B6914", egw: "selfSufficiency", egw2: "income",
    intro: "Every person should have a knowledge of some useful trade (Ed 218).",
    items: [["Homestead Products","Eggs, honey, soap, herbs. She selleth it (Proverbs 31:24)."],["Remote Work","Tech skills + Starlink = rural income."],["Cottage Industry","Woodworking, candles, herbals (Ecclesiastes 9:10)."],["Agricultural Sales","Garlic $10-20/lb, microgreens $25-50/lb."],["Education and Ministry","Workshops, courses, eBooks (Matthew 28:20)."],["Financial Stewardship","Eliminate debt (Proverbs 22:7). Tithe first (Malachi 3:10)."]] },
];

/* ---- PRODUCTS ---- */
const PRODUCTS = [
  { id: "ark-ebook", title: "Country Living Depot eBook", sub: "Complete Digital Guide", desc: "Complete guide to self-sufficient, faith-based country living.", price: "$29.99", tag: "eBook", cat: "ebook", color: "#2D5016", scene: "garden", pages: "280+", fmt: "PDF / ePub", egw: "countryLiving", toc: ["The Biblical Call","Transition","Land","Water","Food","Preservation","Grains","Energy","Shelter","First Aid","Hygiene","Root Cellars","Clothing","Sustainable Living","Income","Stewardship","Resources"], features: ["280+ pages","KJV and SOP","Checklists","Directories","Calendars","90-day plan"], test: [["Brother James T.","Changed our trajectory. Moved to 5 acres within 6 months."],["Sister Maria L.","Finally grounded in the Spirit of Prophecy."]] },
  { id: "preserve", title: "Preserve and Provide", sub: "Food Preservation", desc: "Canning, dehydrating, freeze drying, Mylar bags: all six methods.", price: "$14.99", tag: "Booklet", cat: "booklet", color: "#8B6914", scene: "jars", pages: "85+", fmt: "PDF", egw: "food", toc: ["Canning","Dehydrating","Mylar Bags","Storage","Freeze Drying","Dry Canning","Charts","Equipment","20 Recipes"], features: ["All 6 methods","Budget lists","30+ charts","20 recipes","Troubleshooting","Labels"], test: [["Sister Ruth K.","Canned 200 jars my first season."],["Brother David M.","Mylar section saved me hundreds."]] },
  { id: "water-book", title: "Water Wisdom", sub: "Complete Water Guide", desc: "Sourcing, purification, filtration, rain catchment, emergency supply.", price: "$12.99", tag: "Booklet", cat: "booklet", color: "#1a5276", scene: "water", pages: "65+", fmt: "PDF", egw: "water", toc: ["Finding Water","Catchment","Filtration","Purification","Storage","Emergency","Irrigation","Comparison","Calculator"], features: ["Source guide","Designs","8 systems","Emergency","Calculator","Maintenance"], test: [["Brother Caleb P.","Built rain catchment for under $400."],["Sister Hannah W.","Calculator showed we needed 3x more."]] },
  { id: "city-country", title: "City to Country Guide", sub: "Transition Blueprint", desc: "Step-by-step: finding land, shelter, establishing income.", price: "$19.99", tag: "eBook", cat: "ebook", color: "#5a3e1b", scene: "land", pages: "180+", fmt: "PDF / ePub", egw: "countryLiving2", toc: ["Urgency","Preparation","Finances","Skills","Land","Evaluation","Move","Infrastructure","Gardens","Income","Community","Children","Families","Checklists"], features: ["5-phase plan","10-point eval","Worksheets","5 stories","200+ items","SOP counsels"], test: [["The Williams Family","Atlanta to 10 acres in Georgia."],["Brother Isaiah R.","Land checklist saved us."]] },
  { id: "ark-bundle", title: "Country Living Depot Bundle", sub: "Complete Library", desc: "All eBooks + Booklets in one package.", price: "$69.99", oldPrice: "$107.95", tag: "Bundle", cat: "bundle", color: "#8B6914", featured: true, scene: "wheat", pages: "700+", fmt: "All formats", egw: "preparation", toc: ["Country Living Depot eBook","City to Country Guide","Preserve and Provide","Water Wisdom","Hygiene and First Aid","Emergency Checklist","Planting Calendar","Shelf-Life Chart","Land Scorecard","30-Day Plan"], features: ["All 5 titles: 35% off","5 bonuses","700+ pages","Instant delivery","Lifetime updates","Family license"], test: [["Elder Thompson","Most comprehensive in 30 years."],["Sister Grace N.","30-Day Plan saved weeks."]] },
  { id: "hygiene-book", title: "Hygiene and First Aid", sub: "Natural Health", desc: "Soap making, herbal remedies, wilderness first aid.", price: "$14.99", tag: "Booklet", cat: "booklet", color: "#2D5016", scene: "herbs", pages: "75+", fmt: "PDF", egw: "health", toc: ["Soap Making","Hot Process","Body Care","Cleaners","NEWSTART","Wound Care","15 Herbs","Hydrotherapy","Charcoal","Kit"], features: ["8 recipes","Substitutions","NEWSTART","15 herbs","20+ protocols","75-item kit"], test: [["Sister Deborah A.","No commercial soap in over a year."],["Brother Michael J.","Charcoal section: SOP-grounded."]] },
];

const FILTERS = [{ id: "all", l: "All" }, { id: "ebook", l: "eBooks" }, { id: "booklet", l: "Booklets" }, { id: "bundle", l: "Bundles" }];

/* ---- TOPIC PAGE ---- */
function TopicPage({ topic, onBack }) {
  const t = topic;
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [t.id]);
  return (
    <div>
      <div style={{ padding: "76px 24px 0", maxWidth: 1000, margin: "0 auto" }}>
        <button onClick={onBack} className="btn-back"><ArrowL /> Back to Home</button>
      </div>
      <div style={{ padding: "20px 24px 60px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>{t.emoji}</div>
            <span className="slabel">{t.label}</span>
            <h1 className="sh" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>{t.title}</h1>
          </div>
          <Ornament />
          <p className="sintro">{t.intro}</p>
          {t.egw && <EGWQuote id={t.egw} />}
          {t.stats && (
            <div className="stat-row">
              {t.stats.map(([v, l], i) => (
                <div key={i} className="stat-card"><div className="stat-v">{v}</div><div className="stat-l">{l}</div></div>
              ))}
            </div>
          )}
          {t.items.map(([title, desc], i) => (
            <Exp key={i} title={title} num={String(i + 1).padStart(2, "0")}><p>{desc}</p></Exp>
          ))}
          {t.extraTitle && (
            <div>
              <h3 className="subh">{t.extraTitle}</h3>
              {t.extra.map(([title, desc], i) => (
                <Exp key={i} title={title} num={String(i + 1).padStart(2, "0")}><p>{desc}</p></Exp>
              ))}
            </div>
          )}
          {t.egw2 && <EGWQuote id={t.egw2} style={{ marginTop: 20 }} />}
        </div>
      </div>
      <footer className="footer"><p>&#169; 2026 Country Living Depot | countrylivingdepot.com</p></footer>
    </div>
  );
}

/* ---- PRODUCT PAGE ---- */
function ProductPage({ product, onBack, onView }) {
  const p = product;
  const others = PRODUCTS.filter(x => x.id !== p.id).slice(0, 3);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [p.id]);
  return (
    <div>
      <div style={{ padding: "76px 24px 0", maxWidth: 1200, margin: "0 auto" }}>
        <button onClick={onBack} className="btn-back"><ArrowL /> Back</button>
      </div>
      <div className="pp-hero"><div className="pp-inner">
        <div>
          <span className="ptag" style={{ background: p.color }}>{p.tag}</span>
          {p.featured && <span className="feat-b">Save 35%</span>}
          <h1 className="pp-h1">{p.title}</h1>
          <p className="pp-sub2">{p.sub}</p>
          <p className="pp-desc">{p.desc}</p>
          <div className="pp-meta">{p.pages} pages | {p.fmt}</div>
          <div className="pp-pr">{p.oldPrice && <span className="pr-old">{p.oldPrice}</span>}<span className="pr-big">{p.price}</span></div>
          <button className="btn-green btn-lg"><CartIcon /> Add to Cart</button>
        </div>
        <div className="pp-right"><div className="pp-img-block" style={{ background: p.color }}><span className="pp-img-tag">{p.tag}</span><span className="pp-img-pages">{p.pages} Pages</span></div></div>
      </div></div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}><EGWQuote id={p.egw} /></div>
      <div className="sec-w"><div className="ctn-sm"><h2 className="sh">What is Inside</h2><Ornament />{p.toc.map((x, i) => (<div key={i} className="toc-item"><span className="toc-n">{String(i + 1).padStart(2, "0")}</span><span>{x}</span></div>))}</div></div>
      <div className="sec-g"><div className="ctn-sm"><h2 className="sh">Features</h2><Ornament /><div className="feat-grid">{p.features.map((f, i) => (<div key={i} className="feat-card"><CheckSvg /><span>{f}</span></div>))}</div></div></div>
      <div className="sec-w"><div className="ctn-sm"><h2 className="sh">Testimonials</h2><Ornament /><div className="test-grid">{p.test.map((t, i) => (<div key={i} className="test-card"><div className="test-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="test-t">{t[1]}</p><p className="test-n">-- {t[0]}</p></div>))}</div></div></div>
      <div className="cta-sec"><h2 className="sh" style={{ color: "#fff" }}>Get Started</h2><div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "20px 0" }}>{p.oldPrice && <span className="pr-old">{p.oldPrice}</span>}<span className="pr-big" style={{ color: "#fff", fontSize: "2.8rem" }}>{p.price}</span></div><button className="btn-green btn-lg"><CartIcon /> Purchase</button></div>
      <div className="sec-g"><div className="ctn"><h2 className="sh">You May Also Need</h2><Ornament /><div className="pgrid">{others.map((r, i) => (<div key={i} className="pcard" onClick={() => onView(r.id)}><SceneIllust color={r.color} /><div className="pcard-body"><span className="pcard-tag-line">{r.tag}</span><h3 className="pcard-title">{r.title}</h3><p className="pcard-desc">{r.desc}</p><div className="pcard-foot"><span className="pcard-price">{r.price}</span><span className="pcard-link">View <ArrowR /></span></div></div></div>))}</div></div></div>
      <footer className="footer"><p>&#169; 2026 Country Living Depot | countrylivingdepot.com</p></footer>
    </div>
  );
}

/* ============================================
   MAIN APP
   ============================================ */
export default function App() {
  const [pg, setPg] = useState("home");
  const [mob, setMob] = useState(false);
  const [sy, setSy] = useState(0);
  const [fil, setFil] = useState("all");
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [drawer, setDrawer] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    const fn = () => setSy(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goHome = () => { setPg("home"); window.scrollTo({ top: 0 }); };
  const addCart = (e, product) => {
    e.stopPropagation();
    setCart(c => c + 1);
    setCartItems(items => {
      const existing = items.find(i => i.id === product.id);
      if (existing) return items.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...items, { ...product, qty: 1 }];
    });
    setDrawer(true);
  };
  const removeItem = (id) => {
    setCartItems(items => {
      const item = items.find(i => i.id === id);
      setCart(c => c - (item ? item.qty : 0));
      return items.filter(i => i.id !== id);
    });
  };
  const fp = fil === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === fil);
  const cartTotal = cartItems.reduce((sum, i) => sum + parseFloat(i.price.replace("$", "")) * i.qty, 0);

  // ---- ROUTING ----
  const activeProd = PRODUCTS.find(p => p.id === pg);
  const activeTopic = TOPICS.find(t => t.id === pg);

  const navBar = (
    <div>
      {/* ANNOUNCEMENT BAR */}
      <div className="announce-bar">
        <span>&#x1F33E; FREE SHIPPING on Country Living Depot Bundle | Use code: <strong>COUNTRYLIVING</strong></span>
      </div>
      <nav className={"nav" + (sy > 50 || pg !== "home" ? " nav-solid" : "")}>
        <div className="nav-inner">
          <div className="logo" onClick={goHome}>
            <span className="logo-i">{"D83CDFE1"}</span>
            <span className="logo-t">COUNTRY LIVING DEPOT</span>
          </div>
          <div className="nav-r">
            {pg !== "home" && <button onClick={goHome} className="nav-link active">Home</button>}
            <div className="cart-i" onClick={() => setDrawer(!drawer)}><CartIcon />{cart > 0 && <span className="cart-c">{cart}</span>}</div>
            <button className="mob-btn" onClick={() => setMob(!mob)}>{mob ? "\u2715" : "\u2630"}</button>
          </div>
        </div>
        {mob && (
          <div className="mob-menu">
            <button onClick={goHome} className="mob-link active">Home</button>
            {TOPICS.map(t => (<button key={t.id} onClick={() => { setPg(t.id); setMob(false); window.scrollTo({ top: 0 }); }} className="mob-link">{t.title}</button>))}
          </div>
        )}
      </nav>
      {/* CART DRAWER */}
      {drawer && <div className="drawer-overlay" onClick={() => setDrawer(false)} />}
      <div className={"cart-drawer" + (drawer ? " cart-drawer-open" : "")}>
        <div className="cd-header">
          <h3 className="cd-title">Your Cart ({cart})</h3>
          <button className="cd-close" onClick={() => setDrawer(false)}>{"\u2715"}</button>
        </div>
        {cartItems.length === 0 ? (
          <div className="cd-empty">
            <p style={{ fontSize: "2rem", marginBottom: 12 }}>{"\uD83D\uDED2"}</p>
            <p>Your cart is empty</p>
            <button className="btn-green" onClick={() => { setDrawer(false); if (pg !== "home") goHome(); }} style={{ marginTop: 16 }}>Shop Now</button>
          </div>
        ) : (
          <div>
            <div className="cd-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cd-item">
                  <div className="cd-item-info">
                    <h4 className="cd-item-name">{item.title}</h4>
                    <p className="cd-item-tag">{item.tag}</p>
                    <p className="cd-item-price">{item.price} x {item.qty}</p>
                  </div>
                  <button className="cd-remove" onClick={() => removeItem(item.id)}>{"\u2715"}</button>
                </div>
              ))}
            </div>
            <div className="cd-footer">
              <div className="cd-subtotal"><span>Subtotal</span><span className="cd-total">${cartTotal.toFixed(2)}</span></div>
              <div className="cd-trust">
                <span>{"\uD83D\uDD12"} Secure Checkout</span>
                <span>{"\u21A9\uFE0F"} 30-Day Guarantee</span>
              </div>
              <button className="btn-green btn-lg" style={{ width: "100%" }}>Checkout</button>
              <p style={{ textAlign: "center", fontSize: "0.82rem", color: "#888", marginTop: 8 }}>Instant digital delivery</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Product page
  if (activeProd) {
    return (<div className="app"><style>{CSS}</style>{navBar}<ProductPage product={activeProd} onBack={goHome} onView={(id) => { setPg(id); window.scrollTo({ top: 0 }); }} /></div>);
  }

  // Topic page
  if (activeTopic) {
    return (<div className="app"><style>{CSS}</style>{navBar}<TopicPage topic={activeTopic} onBack={goHome} /></div>);
  }

  // ---- HOME PAGE ----
  return (
    <div className="app">
      <style>{CSS}</style>
      {navBar}

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">{"\uD83C\uDF3E"} A Faith-Based Preparedness Resource</div>
          <h1 className="hero-title">Country Living Depot</h1>
          <p className="hero-tag">Your Faith-Based Resource for Self-Sufficient Country Living</p>
          <p className="hero-verse">"By faith Noah, being warned of God of things not seen as yet, moved with fear, prepared an ark to the saving of his house." -- Hebrews 11:7</p>
          <div className="hero-btns">
            <button className="btn-green btn-lg" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>Shop Resources</button>
            <button className="btn-outline" onClick={() => document.getElementById("topics")?.scrollIntoView({ behavior: "smooth" })}>Explore Guides</button>
          </div>
        </div>
        <HeroHills />
      </section>

      <div className="sec-w" style={{ paddingTop: 16, paddingBottom: 16 }}><EGWQuote id="hero" /></div>

      {/* MISSION */}
      <section className="sec-g">
        <div className="ctn">
          <div className="mission-grid">
            {[["Spiritual Readiness", "Grounded in Scripture and the Spirit of Prophecy."], ["Self-Sufficiency", "Food, water, energy, shelter: essential skills."], ["Country Living", "Answering the prophetic call to leave the cities."]].map(([h, p], i) => (
              <div key={i} className="mission-card"><h3 className="mission-h">{h}</h3><p className="mission-p">{p}</p></div>
            ))}
          </div>
        </div>
      </section>
      <RollingHills />

      {/* PRODUCTS */}
      <section className="sec-w" id="products">
        <div className="ctn">
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span className="slabel">Resources</span>
            <h2 className="sh">eBooks, Booklets and Bundles</h2>
          </div>
          <Ornament />
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button key={f.id} className={"fbtn" + (fil === f.id ? " fbtn-a" : "")} onClick={() => setFil(f.id)}>
                {f.l}<span className="fcnt">{f.id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === f.id).length}</span>
              </button>
            ))}
          </div>
          <div className="pgrid">
            {fp.map(p => (
              <div key={p.id} className={"pcard" + (p.featured ? " pcard-feat" : "")} onClick={() => { setPg(p.id); window.scrollTo({ top: 0 }); }}>
                {p.featured && <div className="pcard-badge">Best Value</div>}
                <SceneIllust color={p.color} />
                <div className="pcard-body">
                  <span className="pcard-tag-line">{p.tag}</span>
                  <h3 className="pcard-title">{p.title}</h3>
                  <p className="pcard-sub">{p.sub}</p>
                  <p className="pcard-desc">{p.desc}</p>
                  <div className="pcard-foot">
                    <div className="pcard-pricing">
                      {p.oldPrice && <span className="pcard-old">{p.oldPrice}</span>}
                      <span className="pcard-price">{p.price}</span>
                    </div>
                    <div className="pcard-acts">
                      <button className="btn-sm btn-v" onClick={(e) => { e.stopPropagation(); setPg(p.id); window.scrollTo({ top: 0 }); }}>Details</button>
                      <button className="btn-sm btn-c" onClick={(e) => addCart(e, p)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <div className="trust-section">
        <div className="trust-grid">
          <div className="trust-badge">{"\uD83D\uDD12"}<span>Secure Checkout</span></div>
          <div className="trust-badge">{"\u21A9\uFE0F"}<span>30-Day Guarantee</span></div>
          <div className="trust-badge">{"\u26A1"}<span>Instant Delivery</span></div>
          <div className="trust-badge">{"\uD83D\uDCE7"}<span>Lifetime Updates</span></div>
        </div>
      </div>

      {/* TOPIC GRID */}
      <section className="sec-g" id="topics">
        <div className="ctn">
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <span className="slabel">Explore</span>
            <h2 className="sh">Preparedness Topics</h2>
          </div>
          <Ornament />
          <p className="sintro">Click any topic to explore the full guide with detailed information, Scripture references, and Spirit of Prophecy counsel.</p>
          <div className="topic-grid">
            {TOPICS.map(t => (
              <div key={t.id} className="topic-card" onClick={() => { setPg(t.id); window.scrollTo({ top: 0 }); }} style={{ borderTopColor: t.color }}>
                <div className="topic-emoji">{t.emoji}</div>
                <h3 className="topic-title">{t.title}</h3>
                <p className="topic-label">{t.label}</p>
                <span className="topic-link">Explore <ArrowR /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <RollingHills color="#1a3008" />
      <section className="cta-sec">
        <div className="ctn-sm" style={{ textAlign: "center" }}>
          <h2 className="sh" style={{ color: "#fff", fontSize: "clamp(2rem,4vw,2.6rem)" }}>Ready to Build Your Ark?</h2>
          <Ornament />
          <EGWQuote id="preparation" style={{ textAlign: "left" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, margin: "24px 0" }}>
            <span className="pr-old">$107.95</span>
            <span className="pr-big" style={{ color: "#fff", fontSize: "2.8rem" }}>$69.99</span>
            <span className="save-b">Save 35%</span>
          </div>
          <button className="btn-green btn-lg" onClick={() => { setPg("ark-bundle"); window.scrollTo({ top: 0 }); }}>Get the Bundle</button>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-sec">
        <div className="ctn-sm" style={{ textAlign: "center" }}>
          <h3 className="sh" style={{ fontSize: "1.8rem" }}>Stay Prepared</h3>
          <p style={{ color: "var(--txl)", margin: "12px 0 24px", fontSize: "1rem" }}>Get weekly preparedness tips, Scripture-based encouragement, and first access to new resources.</p>
          {emailSent ? (
            <div style={{ padding: 20, background: "var(--gl)", borderRadius: 10 }}>
              <p style={{ color: "var(--green)", fontWeight: 600 }}>{"\u2705"} Thank you! Check your inbox for your free checklist.</p>
            </div>
          ) : (
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
              <button className="btn-green" onClick={() => { if (email) setEmailSent(true); }}>Subscribe</button>
            </div>
          )}
          <p style={{ fontSize: "0.82rem", color: "#aaa", marginTop: 12 }}>Free Emergency Preparedness Checklist with signup</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="ctn">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">{"D83CDFE1"} Country Living Depot</div>
              <p className="footer-desc">Your faith-based resource for self-sufficient country living.</p>
            </div>
            <div>
              <h4 className="footer-h4">Resources</h4>
              {PRODUCTS.map((p, i) => (<p key={i} className="footer-link" onClick={() => { setPg(p.id); window.scrollTo({ top: 0 }); }}>{p.title}</p>))}
            </div>
            <div>
              <h4 className="footer-h4">Topics</h4>
              {TOPICS.slice(0, 6).map((t, i) => (<p key={i} className="footer-link" onClick={() => { setPg(t.id); window.scrollTo({ top: 0 }); }}>{t.title}</p>))}
            </div>
            <div>
              <h4 className="footer-h4">Connect</h4>
              {["Contact", "Newsletter", "Ministry", "About"].map((l, i) => (<p key={i} className="footer-link">{l}</p>))}
            </div>
          </div>
          <div className="footer-bot">
            <p>&#169; 2026 Country Living Depot | countrylivingdepot.com | All Rights Reserved</p>
            <p style={{ fontStyle: "italic", marginTop: 4 }}>"Prepare thy work without, and make it fit for thyself in the field." -- Proverbs 24:27</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


/* ---- CSS ---- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

:root {
  --cream: #faf6f0;
  --white: #ffffff;
  --black: #050000;
  --green: #2D5016;
  --green-soft: #3a6b2a;
  --sage: #e8efe0;
  --amber: #8B6914;
  --txl: #6a6a6a;
  --bdr: #e8e4dc;
  --cream-dark: #f0ebe2;
}

* { margin: 0; padding: 0; box-sizing: border-box }
html { scroll-behavior: smooth }
body { background: var(--cream); color: var(--black); font-family: 'Jost', sans-serif; font-size: 16px; line-height: 1.75; font-weight: 300 }
::selection { background: rgba(45, 80, 22, 0.1) }
@keyframes fadeUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
.app { min-height: 100vh; overflow-x: hidden }

/* ANNOUNCE BAR */
.announce-bar { background: var(--black); color: var(--cream); text-align: center; padding: 11px 24px; font-size: 0.78rem; letter-spacing: 2px; text-transform: uppercase; position: fixed; top: 0; left: 0; right: 0; z-index: 101; font-weight: 400 }
.announce-bar strong { color: #c8deb8 }

/* NAV */
.nav { position: fixed; top: 36px; left: 0; right: 0; z-index: 100; transition: all 0.4s }
.nav-solid { background: rgba(250,246,240,0.96); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(0,0,0,0.05) }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 20px 40px; display: flex; align-items: center; justify-content: space-between }
.logo { display: flex; align-items: center; gap: 10px; cursor: pointer }
.logo-i { font-size: 1.4rem }
.logo-t { font-family: 'Jost', sans-serif; font-size: 0.72rem; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: var(--black) }
.desk-nav { display: flex; gap: 0 }
.nav-link { background: none; border: none; font-family: 'Jost', sans-serif; font-size: 0.82rem; font-weight: 400; letter-spacing: 0.5px; cursor: pointer; padding: 8px 18px; color: var(--txl); transition: color 0.3s }
.nav-link:hover, .nav-link.active { color: var(--black) }
.nav-r { display: flex; align-items: center; gap: 16px }
.cart-i { position: relative; cursor: pointer; color: var(--black); padding: 8px }
.cart-c { position: absolute; top: 0; right: 0; background: var(--green); color: #fff; font-size: 0.56rem; width: 15px; height: 15px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600 }
.mob-btn { display: none; background: none; border: none; color: var(--black); font-size: 1.3rem; cursor: pointer; letter-spacing: 2px }
.mob-menu { display: flex; flex-direction: column; padding: 16px 40px 24px; background: var(--cream); border-bottom: 1px solid var(--bdr) }
.mob-link { background: none; border: none; font-size: 0.88rem; font-weight: 300; cursor: pointer; padding: 12px 0; text-align: left; border-bottom: 1px solid rgba(0,0,0,0.04); color: var(--txl); font-family: 'Jost', sans-serif }
.mob-link.active { color: var(--black); font-weight: 500 }
@media(max-width:900px) { .desk-nav { display: none !important } .mob-btn { display: block !important } }

/* HERO */
.hero { min-height: 90vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background: var(--cream); padding-bottom: 100px }
.hero-content { text-align: center; padding: 160px 40px 100px; max-width: 800px; animation: fadeUp 0.9s ease; position: relative; z-index: 2 }
.hero-badge { display: inline-block; padding: 10px 28px; border: 1px solid rgba(0,0,0,0.1); font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; color: var(--txl); margin-bottom: 40px; font-weight: 400 }
.hero-title { font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 10vw, 7rem); font-weight: 400; line-height: 0.95; color: var(--black); margin-bottom: 24px; letter-spacing: -2px }
.hero-tag { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2.5vw, 1.4rem); color: var(--green); font-style: italic; margin-bottom: 32px; font-weight: 400 }
.hero-verse { font-size: 0.95rem; color: var(--txl); line-height: 1.9; max-width: 480px; margin: 0 auto 48px; font-style: italic; font-weight: 300 }
.hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap }

/* BUTTONS - Applet Studio style */
.btn-green { background: var(--black); color: var(--cream); border: none; padding: 16px 40px; font-family: 'Jost', sans-serif; font-size: 0.82rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.35s }
.btn-green:hover { background: var(--green); transform: translateY(-1px) }
.btn-lg { padding: 18px 48px; font-size: 0.85rem }
.btn-outline { background: transparent; color: var(--black); border: 1px solid rgba(0,0,0,0.2); padding: 15px 40px; font-size: 0.82rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; transition: all 0.35s; font-family: 'Jost', sans-serif }
.btn-outline:hover { border-color: var(--black); background: rgba(0,0,0,0.03) }
.btn-back { background: none; border: none; color: var(--black); font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 8px; padding: 16px 0; font-weight: 400; font-family: 'Jost', sans-serif; letter-spacing: 1px; text-transform: uppercase }
.btn-sm { padding: 10px 20px; font-size: 0.75rem; font-weight: 400; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: all 0.3s; border: none; font-family: 'Jost', sans-serif }
.btn-v { background: var(--cream-dark); color: var(--black) } .btn-v:hover { background: var(--bdr) }
.btn-c { background: var(--black); color: var(--cream) } .btn-c:hover { background: var(--green) }

/* SECTIONS */
.sec-w { padding: 100px 0; background: var(--white) }
.sec-g { padding: 100px 0; background: var(--cream) }
.ctn { max-width: 1100px; margin: 0 auto; padding: 0 40px }
.ctn-md { max-width: 900px; margin: 0 auto; padding: 0 40px }
.ctn-sm { max-width: 720px; margin: 0 auto; padding: 0 40px }
.slabel { font-family: 'Jost', sans-serif; font-size: 0.7rem; letter-spacing: 4px; text-transform: uppercase; color: var(--txl); font-weight: 400; display: block; margin-bottom: 12px }
.sh { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 400; color: var(--black); line-height: 1.1; letter-spacing: -1px }
.sintro { font-size: 1rem; color: var(--txl); line-height: 1.85; max-width: 560px; margin: 0 auto 44px; text-align: center; font-weight: 300 }
.subh { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--black); text-align: center; margin: 56px 0 20px; font-weight: 400 }

/* EGW QUOTE */
.egw { position: relative; padding: 40px 44px; background: var(--white); border-left: 2px solid var(--green); max-width: 600px; margin: 40px auto }
.egw-text { font-family: 'Playfair Display', serif; font-size: 1.05rem; color: var(--black); line-height: 1.85; font-style: italic; margin: 0; font-weight: 400 }
.egw-src { display: block; font-size: 0.75rem; color: var(--txl); margin-top: 16px; font-style: normal; font-weight: 400; letter-spacing: 1px; text-transform: uppercase }

/* MISSION */
.mission-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--bdr) }
.mission-card { text-align: center; padding: 60px 36px; background: var(--white); transition: all 0.4s }
.mission-card:hover { background: var(--cream) }
.mission-h { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--black); margin-bottom: 14px; font-weight: 400 }
.mission-p { font-size: 0.92rem; color: var(--txl); line-height: 1.8; font-weight: 300 }

/* FILTER */
.filter-bar { display: flex; gap: 0; justify-content: center; margin-bottom: 48px; border-bottom: 1px solid var(--bdr) }
.fbtn { background: none; border: none; border-bottom: 2px solid transparent; padding: 14px 28px; font-size: 0.78rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.3s; color: var(--txl); font-family: 'Jost', sans-serif; margin-bottom: -1px }
.fbtn:hover { color: var(--black) }
.fbtn-a { color: var(--black) !important; border-bottom-color: var(--black) !important }
.fcnt { font-size: 0.7rem; font-weight: 400; opacity: 0.5 }

/* 3D STONE SLAB */
.slab { position: relative; transition: transform 0.5s ease }
.slab:hover { transform: translateY(-6px) }
.slab-main { position: relative; transform: rotateX(1deg); transition: transform 0.5s ease }
.slab:hover .slab-main { transform: rotateX(0deg) }
.slab-face { position: relative; z-index: 2; overflow: hidden; background: linear-gradient(160deg, #d8ccb0, #e0d4ba 12%, #eae0c8 28%, #efe6d0 45%, #e8dcc4 60%, #e0d4ba 78%, #d8ccb0 100%); box-shadow: inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 6px rgba(0,0,0,0.06) }
.slab-tex { position: absolute; inset: 0; opacity: 0.04; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); pointer-events: none; z-index: 1 }
.slab-inner { position: relative; z-index: 3 }
.slab-edge-r { position: absolute; top: 8px; right: -7px; bottom: 8px; width: 7px; z-index: 1; background: linear-gradient(180deg, #c4b498, #b8a88c, #a89878, #b8a88c) }
.slab-edge-b { position: absolute; left: 4px; right: 4px; bottom: -7px; height: 7px; z-index: 1; background: linear-gradient(90deg, #b8a88c, #c4b498, #b8a88c) }
.slab-f .slab-face { box-shadow: inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 6px rgba(0,0,0,0.06), 0 0 0 1px var(--green) }

/* TOPIC GRID */
.topic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1px; background: var(--bdr) }
.topic-card { background: var(--white); padding: 36px 20px; text-align: center; cursor: pointer; transition: all 0.4s; border-top: none }
.topic-card:hover { background: var(--cream) }
.topic-emoji { font-size: 2rem; margin-bottom: 16px; display: block }
.topic-title { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--black); font-weight: 400; margin-bottom: 6px; line-height: 1.3 }
.topic-label { font-size: 0.68rem; color: var(--txl); margin-bottom: 16px; letter-spacing: 2px; text-transform: uppercase; font-weight: 400 }
.topic-link { font-size: 0.72rem; color: var(--black); font-weight: 400; display: inline-flex; align-items: center; gap: 4px; letter-spacing: 2px; text-transform: uppercase; transition: gap 0.3s }
.topic-card:hover .topic-link { gap: 10px }

/* PRODUCT CARDS - Squarespace Editorial */
.pgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px }
.pcard { cursor: pointer; transition: all 0.4s; position: relative; display: flex; flex-direction: column; background: var(--white); border: 1px solid var(--bdr) }
.pcard:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.06); transform: translateY(-3px) }
.pcard-feat { border-color: var(--green) }
.pcard-accent { width: 100%; height: 6px }
.pcard-badge { position: absolute; top: 16px; right: 16px; background: var(--black); color: var(--cream); padding: 6px 16px; font-size: 0.62rem; font-weight: 400; z-index: 5; letter-spacing: 2px; text-transform: uppercase }
.pcard-body { padding: 32px 28px 28px; display: flex; flex-direction: column; flex: 1 }
.pcard-tag-line { font-size: 0.65rem; color: var(--txl); font-weight: 400; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 14px; display: block }
.pcard-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--black); margin-bottom: 6px; font-weight: 400; line-height: 1.2; letter-spacing: -0.5px }
.pcard-sub { font-family: 'Playfair Display', serif; font-size: 0.95rem; color: var(--green); font-style: italic; margin-bottom: 16px; font-weight: 400 }
.pcard-desc { font-size: 0.88rem; color: var(--txl); line-height: 1.8; flex: 1; margin-bottom: 24px; font-weight: 300 }
.pcard-foot { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--bdr); padding-top: 20px; flex-wrap: wrap; gap: 12px }
.pcard-pricing { display: flex; align-items: baseline; gap: 8px }
.pcard-old { font-size: 0.82rem; color: #bbb; text-decoration: line-through }
.pcard-price { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--black); font-weight: 400 }
.pcard-acts { display: flex; gap: 8px }
.pcard-link { color: var(--black); font-size: 0.72rem; display: flex; align-items: center; gap: 5px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase }
.pp-img-block { width: 100%; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: rgba(255,255,255,0.8) }
.pp-img-tag { font-size: 0.72rem; letter-spacing: 4px; text-transform: uppercase; font-weight: 400; opacity: 0.7 }
.pp-img-pages { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 400; color: #fff }

/* EXPANDER */
.exp { background: var(--white); border: 1px solid var(--bdr); padding: 20px 28px; cursor: pointer; transition: all 0.3s; margin-bottom: 4px }
.exp:hover { background: var(--cream) }
.exp-o { border-color: var(--green); background: var(--cream) }
.exp-h { display: flex; align-items: center; gap: 14px }
.exp-n { font-family: 'Playfair Display', serif; font-size: 0.9rem; color: var(--txl); font-weight: 400; min-width: 32px }
.exp-t { flex: 1; font-family: 'Playfair Display', serif; font-size: 1.05rem; color: var(--black); margin: 0; font-weight: 400 }
.exp-b { margin-top: 18px; padding-left: 46px; font-size: 0.95rem; color: var(--txl); line-height: 1.9; font-weight: 300 }

/* STATS */
.stat-row { display: flex; justify-content: center; gap: 1px; background: var(--bdr); margin: 32px 0 40px }
.stat-card { text-align: center; padding: 32px 36px; background: var(--white); flex: 1; min-width: 130px }
.stat-v { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--black); font-weight: 400 }
.stat-l { font-size: 0.72rem; color: var(--txl); margin-top: 6px; letter-spacing: 1px; text-transform: uppercase; font-weight: 400 }

/* FEATURES / TESTIMONIALS */
.feat-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 8px }
.feat-card { display: flex; align-items: center; gap: 12px; padding: 18px 22px; background: var(--cream); font-size: 0.95rem; color: var(--black); font-weight: 300 }
.test-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px }
.test-card { padding: 40px; background: var(--white); border: 1px solid var(--bdr) }
.test-stars { color: var(--amber); letter-spacing: 4px; margin-bottom: 16px; font-size: 0.9rem }
.test-t { font-size: 1rem; color: var(--black); line-height: 1.8; font-style: italic; margin-bottom: 16px; font-weight: 300 }
.test-n { font-size: 0.72rem; color: var(--txl); font-weight: 400; letter-spacing: 2px; text-transform: uppercase }

/* CTA */
.cta-sec { padding: 120px 0; text-align: center; background: var(--black); color: var(--cream) }
.cta-sec .sh { color: var(--cream) }
.cta-sec .egw { background: rgba(255,255,255,0.04); border-left-color: rgba(255,255,255,0.15) }
.cta-sec .egw-text { color: rgba(255,255,255,0.75) }
.cta-sec .egw-src { color: rgba(255,255,255,0.35) }
.cta-sec .btn-green { background: var(--cream); color: var(--black) }
.cta-sec .btn-green:hover { background: #fff }

/* PRICING */
.pr-old { font-size: 0.95rem; color: #aaa; text-decoration: line-through }
.pr-big { font-family: 'Playfair Display', serif; font-size: 2.4rem; color: var(--black); font-weight: 400 }
.save-b { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7); padding: 6px 20px; font-size: 0.72rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase }
.feat-b { background: var(--sage); color: var(--green); padding: 6px 20px; font-size: 0.72rem; font-weight: 400; letter-spacing: 1px; margin-left: 10px }

/* PRODUCT PAGE */
.pp-hero { padding: 48px 40px 80px; background: var(--cream); border-bottom: 1px solid var(--bdr) }
.pp-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; align-items: center }
.pp-right { overflow: hidden }
.pp-h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4.5vw, 3.2rem); font-weight: 400; color: var(--black); line-height: 1.05; margin-bottom: 8px; letter-spacing: -1px }
.pp-sub2 { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--green); font-style: italic; margin-bottom: 20px }
.pp-desc { font-size: 1rem; color: var(--txl); line-height: 1.85; margin-bottom: 28px; max-width: 480px; font-weight: 300 }
.pp-meta { font-size: 0.85rem; color: var(--txl); margin-bottom: 24px; letter-spacing: 0.5px }
.pp-pr { display: flex; align-items: center; gap: 14px; margin-bottom: 28px }

/* TOC */
.toc-item { display: flex; align-items: center; gap: 18px; padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.04); font-size: 0.95rem; color: var(--black); font-weight: 300 }
.toc-n { font-family: 'Playfair Display', serif; font-size: 0.85rem; color: var(--txl); font-weight: 400; min-width: 32px }

/* CART DRAWER */
.drawer-overlay { position: fixed; inset: 0; background: rgba(5,0,0,0.3); z-index: 200; backdrop-filter: blur(3px) }
.cart-drawer { position: fixed; top: 0; right: -440px; width: 420px; max-width: 92vw; height: 100vh; background: var(--cream); z-index: 201; transition: right 0.45s ease; display: flex; flex-direction: column }
.cart-drawer-open { right: 0 }
.cd-header { display: flex; justify-content: space-between; align-items: center; padding: 28px 32px; border-bottom: 1px solid var(--bdr) }
.cd-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--black); font-weight: 400; margin: 0 }
.cd-close { background: none; border: none; font-size: 1.1rem; cursor: pointer; color: var(--txl); padding: 8px }
.cd-empty { padding: 80px 32px; text-align: center; color: var(--txl); font-size: 0.95rem; font-weight: 300 }
.cd-items { flex: 1; overflow-y: auto; padding: 20px 32px }
.cd-item { display: flex; align-items: center; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(0,0,0,0.04) }
.cd-item-info { flex: 1 }
.cd-item-name { font-family: 'Playfair Display', serif; font-size: 1rem; color: var(--black); font-weight: 400; margin: 0 0 4px }
.cd-item-tag { font-size: 0.68rem; color: var(--txl); margin: 0 0 4px; text-transform: uppercase; letter-spacing: 2px }
.cd-item-price { font-size: 0.9rem; color: var(--green); font-weight: 500; margin: 0 }
.cd-remove { background: none; border: none; color: #ccc; cursor: pointer; font-size: 0.9rem; padding: 6px }
.cd-remove:hover { color: #c0392b }
.cd-footer { padding: 28px 32px; border-top: 1px solid var(--bdr); background: var(--white) }
.cd-subtotal { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px }
.cd-total { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--black); font-weight: 400 }
.cd-trust { display: flex; justify-content: center; gap: 28px; margin-bottom: 20px; font-size: 0.72rem; color: var(--txl); letter-spacing: 0.5px }

/* TRUST BADGES */
.trust-section { padding: 40px 0; background: var(--white); border-top: 1px solid var(--bdr) }
.trust-grid { max-width: 800px; margin: 0 auto; display: flex; justify-content: center; gap: 48px; flex-wrap: wrap; padding: 0 40px }
.trust-badge { display: flex; align-items: center; gap: 10px; font-size: 0.78rem; color: var(--txl); font-weight: 400; letter-spacing: 0.5px }

/* NEWSLETTER */
.newsletter-sec { padding: 80px 0; background: var(--cream); border-top: 1px solid var(--bdr) }
.nl-form { display: flex; gap: 0; justify-content: center; max-width: 480px; margin: 0 auto }
.nl-input { flex: 1; min-width: 240px; padding: 16px 24px; border: 1px solid var(--bdr); border-right: none; font-size: 0.88rem; font-family: 'Jost', sans-serif; font-weight: 300; outline: none; transition: border-color 0.3s; background: var(--white) }
.nl-input:focus { border-color: var(--black) }

/* FOOTER */
.footer { padding: 80px 0 40px; background: var(--black); color: rgba(250,246,240,0.6) }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px }
.footer-logo { font-family: 'Playfair Display', serif; font-size: 1.15rem; color: var(--cream); font-weight: 400; margin-bottom: 12px }
.footer-desc { font-size: 0.85rem; line-height: 1.7 }
.footer-h4 { font-size: 0.68rem; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; color: rgba(250,246,240,0.4); font-weight: 400 }
.footer-link { font-size: 0.85rem; margin-bottom: 10px; cursor: pointer; transition: color 0.2s; color: rgba(250,246,240,0.6) }
.footer-link:hover { color: var(--cream) }
.footer-bot { text-align: center; border-top: 1px solid rgba(250,246,240,0.08); padding-top: 24px; font-size: 0.78rem; color: rgba(250,246,240,0.3) }

@media(max-width:768px) {
  .pp-inner { grid-template-columns: 1fr !important }
  .pp-right { display: none !important }
  .footer-grid { grid-template-columns: 1fr 1fr !important }
  .pgrid { grid-template-columns: 1fr !important }
  .feat-grid { grid-template-columns: 1fr !important }
  .topic-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important }
  .mission-grid { grid-template-columns: 1fr !important }
  .stat-row { flex-direction: column }
  .trust-grid { gap: 20px }
  .nl-form { flex-direction: column }
  .nl-input { border-right: 1px solid var(--bdr) }
  .hero-content { padding: 140px 24px 80px }
  .sec-w, .sec-g { padding: 70px 0 }
  .nav-inner { padding: 16px 24px }
  .ctn, .ctn-md, .ctn-sm { padding: 0 24px }
}
`;

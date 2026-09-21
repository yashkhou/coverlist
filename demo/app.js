const NIGHTS = [
  {
    id: "tea-towel",
    date: "2026-09-25",
    cook: "Nessa Baird",
    title: "Tea Towel Supper",
    deck: "Soft things, sharp pickles, proper gravy. A Scottish-Mancunian Friday with no tiny tweezers.",
    price: 38,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1500&q=86",
    story: "Nessa cooks in pubs, borrowed kitchens and once, memorably, a florist. Her food is generous, slightly stubborn and built for a late table.",
    menu: [
      ["Warm oatcake", "whipped cultured butter, leek ash"],
      ["Roast squash broth", "barley, burnt onion, dill"],
      ["Chicken pie", "mustard greens, cider gravy"],
      ["Cranachan-ish", "raspberry, oats, cream, too much whisky"]
    ]
  },
  {
    id: "night-bus",
    date: "2026-10-02",
    cook: "Malik Shah",
    title: "Night Bus Nihari",
    deck: "A slow pot made for people who missed dinner and probably the last tram.",
    price: 42,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1500&q=86",
    story: "Malik grew up between Rusholme takeaways and his auntie's kitchen in Bradford. This is the food he wants at 11pm, not the food he wants photographed at noon.",
    menu: [
      ["Papad crackle", "green chilli, lime salt"],
      ["Beef nihari", "ginger, bone marrow, proper time"],
      ["Tandoor-ish cabbage", "black lime, yoghurt"],
      ["Kulfi sandwich", "cardamom, malt biscuit"]
    ]
  },
  {
    id: "steam-table",
    date: "2026-10-09",
    cook: "Emi Tan",
    title: "Steam Table",
    deck: "Manchester rain, Tokyo convenience-store precision, and one very serious rice cooker.",
    price: 39,
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=1500&q=86",
    story: "Emi is a pastry cook who prefers savoury things after dark. Her menus are quiet, exact and usually involve something steamed.",
    menu: [
      ["Chawanmushi", "sweetcorn, brown butter, chive"],
      ["Miso aubergine", "sesame, crisp rice"],
      ["Pork rice", "ginger, pickled mustard leaf"],
      ["Black sesame pudding", "pear, warm milk"]
    ]
  },
  {
    id: "bad-decisions",
    date: "2026-10-16",
    cook: "Cora Venn",
    title: "Butter, Beans & Bad Decisions",
    deck: "Vegetables with pub energy. Butter appears frequently. Regret does not.",
    price: 36,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1500&q=86",
    story: "Cora runs small vegetarian pop-ups when she is not designing record sleeves. She believes beans are a main course and menus should fit on a beer mat.",
    menu: [
      ["Fried bread", "anchovy-free green sauce, lemon"],
      ["Big white beans", "tomato, smoked butter, herbs"],
      ["Crispy potatoes", "pickled walnut, old cheddar"],
      ["Brown sugar tart", "crème fraîche, sea salt"]
    ]
  },
  {
    id: "red-sauce",
    date: "2026-10-23",
    cook: "Luca Orrell",
    title: "Red Sauce / White Socks",
    deck: "Italian-American comfort food in a room where your laundry is still going round.",
    price: 41,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1500&q=86",
    story: "Luca has cooked in expensive rooms and prefers cheap red-check tablecloths. He makes the sort of pasta that stains clothing. Appropriate.",
    menu: [
      ["Garlic knot", "parsley, pecorino"],
      ["Sunday sauce", "beef cheek, rigatoni"],
      ["Bitter leaves", "orange, fennel, parmesan"],
      ["Tiramisu", "coffee, marsala, no innovation"]
    ]
  },
  {
    id: "ninety-degrees",
    date: "2026-10-30",
    cook: "Rae Okafor",
    title: "Spin Cycle 90°",
    deck: "West African heat, northern produce, Halloween without the novelty cobwebs.",
    price: 45,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1500&q=86",
    story: "Rae cooks loud food in small spaces. She likes char, fermented chilli and feeding strangers until they stop being strangers.",
    menu: [
      ["Plantain crisp", "smoked peanut, hot honey"],
      ["Charred squash", "egusi, greens, lime"],
      ["Goat suya", "onion, tomato, flatbread"],
      ["Malt ice cream", "burnt banana, cocoa nib"]
    ]
  }
];

const STORE_KEY = "afterTheSpin_demo_v1";
const MY_REFS_KEY = "afterTheSpin_myRefs_v1";
const WAIT_REFS_KEY = "afterTheSpin_waitRefs_v1";

const seedState = () => ({
  bookings: [
    { reference: "ATS-M7L2P", nightId: "tea-towel", name: "Maya Cole", email: "maya@example.test", seats: 2, dietary: "One pescatarian.", status: "confirmed", createdAt: "2026-09-20T18:20:00.000Z" },
    { reference: "ATS-Q4N8R", nightId: "night-bus", name: "Ben Iqbal", email: "ben@example.test", seats: 3, dietary: "No nuts.", status: "confirmed", createdAt: "2026-09-17T20:10:00.000Z" },
    { reference: "ATS-3FJ9K", nightId: "night-bus", name: "Tess Green", email: "tess@example.test", seats: 4, dietary: "", status: "confirmed", createdAt: "2026-09-18T19:30:00.000Z" },
    { reference: "ATS-H6D2S", nightId: "night-bus", name: "Owen Price", email: "owen@example.test", seats: 2, dietary: "Shellfish allergy.", status: "confirmed", createdAt: "2026-09-19T11:04:00.000Z" },
    { reference: "ATS-V9C4M", nightId: "night-bus", name: "Leah Ford", email: "leah@example.test", seats: 3, dietary: "One vegan.", status: "confirmed", createdAt: "2026-09-19T22:14:00.000Z" },
    { reference: "ATS-B5T8X", nightId: "steam-table", name: "Dan Wu", email: "dan@example.test", seats: 2, dietary: "", status: "confirmed", createdAt: "2026-09-20T08:45:00.000Z" },
    { reference: "ATS-Z3R6A", nightId: "bad-decisions", name: "Jo Vale", email: "jo@example.test", seats: 1, dietary: "Gluten-free if possible.", status: "confirmed", createdAt: "2026-09-20T12:01:00.000Z" }
  ],
  waitlist: [
    { reference: "WAIT-P3M7", nightId: "night-bus", name: "Ari Bell", email: "ari@example.test", seats: 2, dietary: "", createdAt: "2026-09-20T14:44:00.000Z" },
    { reference: "WAIT-K8R2", nightId: "night-bus", name: "Sam Lo", email: "sam@example.test", seats: 1, dietary: "Vegetarian.", createdAt: "2026-09-20T16:09:00.000Z" }
  ]
});

function getState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY));
    if (parsed && Array.isArray(parsed.bookings) && Array.isArray(parsed.waitlist)) return parsed;
  } catch {}
  const seeded = seedState();
  localStorage.setItem(STORE_KEY, JSON.stringify(seeded));
  return seeded;
}
function saveState(state) {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}
function getRefs(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
}
function addRef(key, ref) {
  const refs = Array.from(new Set([...getRefs(key), ref]));
  localStorage.setItem(key, JSON.stringify(refs));
}
function removeRef(key, ref) {
  localStorage.setItem(key, JSON.stringify(getRefs(key).filter(x => x !== ref)));
}
function resetDemo() {
  localStorage.setItem(STORE_KEY, JSON.stringify(seedState()));
  localStorage.removeItem(MY_REFS_KEY);
  localStorage.removeItem(WAIT_REFS_KEY);
}

const app = document.querySelector("#app");
const toastRoot = document.querySelector("#toast-root");

function esc(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]));
}
function money(n) { return `£${Number(n).toFixed(0)}`; }
function nightById(id) { return NIGHTS.find(n => n.id === id); }
function formatDate(date, long = false) {
  return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: long ? "long" : "short" }).format(new Date(`${date}T12:00:00`));
}
function bookedSeats(nightId, state = getState()) {
  return state.bookings.filter(b => b.nightId === nightId && b.status === "confirmed").reduce((sum, b) => sum + Number(b.seats), 0);
}
function remainingSeats(nightId, state = getState()) {
  return Math.max(0, 12 - bookedSeats(nightId, state));
}
function statusFor(nightId, state = getState()) {
  const left = remainingSeats(nightId, state);
  if (left === 0) return { cls: "sold", text: "Sold out" };
  if (left <= 3) return { cls: "tight", text: `${left} left` };
  return { cls: "available", text: `${left} seats` };
}
function makeRef(prefix = "ATS") {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  return `${prefix}-${Array.from(bytes, b => chars[b % chars.length]).join("")}`;
}
function showToast(message) {
  toastRoot.innerHTML = `<div class="toast">${esc(message)}</div>`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toastRoot.innerHTML = "", 3400);
}
function navActive(section) {
  return section === location.hash.split("/")[1] ? "active" : "";
}
function shell(content, section = "") {
  return `
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#/">
        <span class="brand-mark">40°</span>
        <span>AFTER THE SPIN</span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a class="${section === "nights" ? "active" : ""}" href="#/nights">Nights</a>
        <a class="${section === "manage" ? "active" : ""}" href="#/manage">Manage booking</a>
        <a class="${section === "organiser" ? "active" : ""}" href="#/organiser">Organiser</a>
      </nav>
      <div class="header-note">Fridays · Manchester<br>12 seats, no more</div>
    </header>
    <main class="main" id="main">${content}</main>
    <footer class="footer">
      <div><strong>AFTER THE SPIN</strong><p>Fictional late-night supper club.<br>Working laundrette. Manchester-ish.</p></div>
      <div><strong>THE BORING BIT</strong><p>Demo only. No payment is taken.<br>No email or text is sent.</p></div>
      <div><strong>SHORTCUTS</strong><p><a href="#/manage">Manage a booking</a><br><a href="#/organiser">Open demo organiser</a></p></div>
    </footer>
  </div>`;
}

function nightCard(night, state) {
  const s = statusFor(night.id, state);
  return `
    <a class="night-card" href="#/night/${night.id}">
      <div class="card-photo" style="background-image:url('${night.image}')"></div>
      <div class="card-inner">
        <div class="card-top">
          <div class="card-date">${formatDate(night.date, true)} · 21:15</div>
          <span class="status ${s.cls}">${s.text}</span>
        </div>
        <h3 class="card-title">${esc(night.title)}</h3>
        <p class="card-cook">Guest cook · ${esc(night.cook)}</p>
        <div class="card-bottom">
          <div class="price">${money(night.price)} <small>/ head</small></div>
          <div class="seats">12 total<br>one table</div>
        </div>
      </div>
    </a>`;
}

function nightsSection(state, title = "Upcoming spins") {
  return `
    <section class="section" id="nights">
      <div class="container">
        <div class="section-head">
          <div><span class="kicker">Six Fridays</span><h2 class="section-title">${title}</h2></div>
          <p class="section-note">One guest cook each week. Menu fixed. Seats deliberately scarce. The dryers are not.</p>
        </div>
        <div class="nights-grid">${NIGHTS.map(n => nightCard(n, state)).join("")}</div>
      </div>
    </section>`;
}

function renderHome() {
  const state = getState();
  const content = `
    <section class="hero">
      <div class="hero-copy">
        <div>
          <span class="kicker">Hales Road Launderette · Manchester</span>
          <h1 class="hero-title">After<br><em>the</em> Spin</h1>
          <p class="hero-intro">Twelve seats. One communal table. A different cook every Friday, once the last sensible wash is in.</p>
        </div>
        <div class="hero-meta">
          <span class="label-chip hot">Friday nights only</span>
          <span class="label-chip">Doors 21:00</span>
          <span class="label-chip">Dinner 21:15</span>
          <span class="label-chip">Bring clean socks</span>
        </div>
      </div>
      <div class="hero-photo" role="img" aria-label="Warm late-night communal dining room"></div>
    </section>
    <div class="marquee" aria-hidden="true"><div class="marquee-track">WASH · EAT · RINSE · REPEAT · NO TASTING MENU SPOONS · WASH · EAT · RINSE · REPEAT · NO TASTING MENU SPOONS · WASH · EAT · RINSE · REPEAT · NO TASTING MENU SPOONS · </div></div>
    ${nightsSection(state)}
    <section class="split-story">
      <div class="story-photo" role="img" aria-label="Cook working in a warm kitchen"></div>
      <div class="story-copy">
        <span class="kicker">How this happened</span>
        <h2>Dinner after the final load.</h2>
        <p>The launderette stays a launderette. At nine, we push the folding tables together, set twelve places and let somebody cook.</p>
        <p>No membership. No secret handshake. Just Friday dinner with the spin cycle still audible.</p>
        <div class="dry-note">Please do not put napkins in Dryer 4.<br>We have tried. It becomes admin.</div>
      </div>
    </section>`;
  app.innerHTML = shell(content, "home");
}

function renderNights() {
  const state = getState();
  app.innerHTML = shell(`
    <div class="page-top"><div class="container"><span class="kicker">Friday ledger</span><h1 class="section-title">Every upcoming night</h1></div></div>
    ${nightsSection(state, "Pick your Friday")}
  `, "nights");
}

function renderNight(id) {
  const night = nightById(id);
  if (!night) return renderNotFound();
  const state = getState();
  const left = remainingSeats(id, state);
  const s = statusFor(id, state);
  const action = left > 0
    ? `<a class="btn primary" href="#/book/${id}">Reserve ${left === 1 ? "the last seat" : "seats"}</a>`
    : `<a class="btn red" href="#/waitlist/${id}">Join waitlist</a>`;
  const menu = night.menu.map((m, i) => `<div class="menu-row"><div class="menu-no">0${i+1}</div><div class="menu-dish">${esc(m[0])}<small>${esc(m[1])}</small></div></div>`).join("");
  app.innerHTML = shell(`
    <div class="page-top"><div class="container"><a class="back-link" href="#/nights">All nights</a></div></div>
    <section class="detail-hero fade-up">
      <div class="detail-photo" role="img" aria-label="${esc(night.title)} food and table" style="background-image:url('${night.image}')"></div>
      <div class="detail-copy">
        <span class="kicker">${formatDate(night.date, true)} · Guest cook ${esc(night.cook)}</span>
        <h1>${esc(night.title)}</h1>
        <p class="detail-deck">${esc(night.deck)}</p>
        <div class="detail-facts">
          <div class="fact"><span class="fact-label">Price</span><span class="fact-value">${money(night.price)}</span></div>
          <div class="fact"><span class="fact-label">Sit down</span><span class="fact-value">21:15</span></div>
          <div class="fact"><span class="fact-label">Status</span><span class="fact-value">${esc(s.text)}</span></div>
        </div>
        <div class="cta-row">${action}<a class="btn ghost" href="#/manage">Manage booking</a></div>
      </div>
    </section>
    <section class="container content-grid">
      <div>
        <div class="menu-block">
          <span class="kicker">Four things, roughly</span>
          <h2>The menu</h2>
          <div class="menu-list">${menu}</div>
        </div>
        <div class="cook-block" style="margin-top:52px">
          <span class="kicker">This week's human</span>
          <h2>${esc(night.cook)}</h2>
          <p style="max-width:650px;font-size:19px;line-height:1.3">${esc(night.story)}</p>
        </div>
      </div>
      <aside class="side-ticket" aria-label="Night details">
        <div class="ticket-tear"></div>
        <div class="ticket-head"><strong>HALES ROAD LAUNDERETTE</strong><small>AFTER THE SPIN / DEMO</small></div>
        <div class="ticket-line"><span>DATE</span><b>${formatDate(night.date, true)}</b></div>
        <div class="ticket-line"><span>DOORS</span><b>21:00</b></div>
        <div class="ticket-line"><span>DINNER</span><b>21:15</b></div>
        <div class="ticket-line"><span>HEADS</span><b>12 MAX</b></div>
        <div class="ticket-line"><span>PRICE</span><b>${money(night.price)} PP</b></div>
        <div class="ticket-line"><span>SEATS LEFT</span><b>${left}</b></div>
        <div class="ticket-foot">No real payment. No real message.<br>Very real-looking receipt.</div>
      </aside>
    </section>
  `, "nights");
}

function bookingFormHtml(night, waitlist = false) {
  const left = remainingSeats(night.id);
  const maxSeats = waitlist ? 4 : Math.min(4, left);
  return `
    <section class="form-shell">
      <div class="form-panel">
        <span class="kicker">${waitlist ? "Stand by the machine" : "Hold your chair"}</span>
        <h1>${waitlist ? "Join the waitlist" : "Reserve seats"}</h1>
        <p class="lede">${waitlist ? "If a seat opens, this demo will not actually message you. The organiser view will, however, look impressively aware of you." : "No card details. No deposit. This is a local demo, so your booking lives in this browser."}</p>
        <form id="${waitlist ? "waitlist-form" : "booking-form"}" class="form-grid" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" autocomplete="name" required />
            <span class="error-text" data-error="name"></span>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" autocomplete="email" required />
            <span class="error-text" data-error="email"></span>
          </div>
          <div class="field">
            <label for="seats">Party size</label>
            <select id="seats" name="seats">
              ${Array.from({length:maxSeats}, (_,i) => `<option value="${i+1}">${i+1} ${i === 0 ? "seat" : "seats"}</option>`).join("")}
            </select>
            <span class="help">${waitlist ? "Up to 4 people." : `${left} seats currently left.`}</span>
          </div>
          <div class="field">
            <label for="dietary">Dietary requirements</label>
            <input id="dietary" name="dietary" placeholder="None / allergy / preference" />
            <span class="help">Keep it useful. The cook sees this.</span>
          </div>
          <div class="form-actions">
            <button class="btn ${waitlist ? "red" : "primary"}" type="submit">${waitlist ? "Join waitlist" : "Make demo booking"}</button>
            <a class="btn ghost" href="#/night/${night.id}">Back to night</a>
          </div>
        </form>
      </div>
      <aside class="side-ticket">
        <div class="ticket-tear"></div>
        <div class="ticket-head"><strong>${esc(night.title)}</strong><small>${esc(night.cook)}</small></div>
        <div class="ticket-line"><span>DATE</span><b>${formatDate(night.date, true)}</b></div>
        <div class="ticket-line"><span>TIME</span><b>21:15</b></div>
        <div class="ticket-line"><span>PRICE</span><b>${money(night.price)} PP</b></div>
        <div class="ticket-line"><span>AVAILABLE</span><b>${left}</b></div>
        <div class="ticket-foot">${waitlist ? "Queueing, but make it dinner." : "Seats are only reduced when you submit."}</div>
      </aside>
    </section>`;
}

function renderBook(id, waitlist = false) {
  const night = nightById(id);
  if (!night) return renderNotFound();
  const left = remainingSeats(id);
  if (!waitlist && left === 0) {
    location.hash = `#/waitlist/${id}`;
    return;
  }
  if (waitlist && left > 0) {
    location.hash = `#/book/${id}`;
    return;
  }
  app.innerHTML = shell(bookingFormHtml(night, waitlist), "nights");
  const form = document.querySelector(waitlist ? "#waitlist-form" : "#booking-form");
  form?.addEventListener("submit", e => handleReservationSubmit(e, night, waitlist));
}

function validateForm(form) {
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim().toLowerCase();
  const errors = {};
  if (name.length < 2) errors.name = "Give us a name with at least two characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Use an email-shaped email.";
  form.querySelectorAll("[data-error]").forEach(el => el.textContent = errors[el.dataset.error] || "");
  return { valid: Object.keys(errors).length === 0, data, name, email };
}

function handleReservationSubmit(event, night, waitlist) {
  event.preventDefault();
  const form = event.currentTarget;
  const checked = validateForm(form);
  if (!checked.valid) return;
  const seats = Number(checked.data.get("seats"));
  const dietary = String(checked.data.get("dietary") || "").trim();
  const state = getState();
  if (!waitlist && seats > remainingSeats(night.id, state)) {
    showToast("Someone got there first. Seat count refreshed.");
    renderBook(night.id, false);
    return;
  }
  const reference = makeRef(waitlist ? "WAIT" : "ATS");
  const record = {
    reference,
    nightId: night.id,
    name: checked.name,
    email: checked.email,
    seats,
    dietary,
    createdAt: new Date().toISOString()
  };
  if (waitlist) {
    state.waitlist.push(record);
    addRef(WAIT_REFS_KEY, reference);
  } else {
    record.status = "confirmed";
    state.bookings.push(record);
    addRef(MY_REFS_KEY, reference);
  }
  saveState(state);
  location.hash = `#/confirmation/${reference}`;
}

function renderConfirmation(ref) {
  const state = getState();
  const booking = state.bookings.find(b => b.reference === ref);
  const wait = state.waitlist.find(w => w.reference === ref);
  const record = booking || wait;
  if (!record) return renderNotFound();
  const night = nightById(record.nightId);
  const isWait = Boolean(wait);
  app.innerHTML = shell(`
    <section class="confirm-shell fade-up">
      <div class="receipt">
        <div class="receipt-logo">AFTER THE SPIN</div>
        <div class="receipt-sub">${isWait ? "WAITLIST SLIP" : "BOOKING RECEIPT"} · LOCAL DEMO</div>
        <div class="receipt-ref"><span>${isWait ? "Waitlist reference" : "Booking reference"}</span><strong>${esc(record.reference)}</strong></div>
        <div class="receipt-grid">
          <div class="receipt-row"><span>NAME</span><b>${esc(record.name)}</b></div>
          <div class="receipt-row"><span>FRIDAY</span><b>${formatDate(night.date, true)}</b></div>
          <div class="receipt-row"><span>NIGHT</span><b>${esc(night.title)}</b></div>
          <div class="receipt-row"><span>SEATS</span><b>${record.seats}</b></div>
          ${!isWait ? `<div class="receipt-row"><span>TOTAL</span><b>${money(night.price * record.seats)} · NOT CHARGED</b></div>` : ""}
          <div class="receipt-row"><span>DIETARY</span><b>${esc(record.dietary || "None given")}</b></div>
        </div>
        <div class="receipt-note">${isWait ? "You are on the demo waitlist. No message will actually arrive." : "Doors 21:00 · sit 21:15 · one table · please arrive with a pulse."}<br><br>KEEP THIS REFERENCE. Or don't. This browser remembers it.</div>
      </div>
      <div class="after-actions">
        <button class="btn yellow" id="copy-ref" data-ref="${esc(record.reference)}">Copy reference</button>
        <a class="btn primary" href="#/manage">Manage ${isWait ? "waitlist" : "booking"}</a>
        <a class="btn ghost" href="#/">Back home</a>
      </div>
    </section>
  `, "manage");
}

function ownedBookings(state) {
  const refs = getRefs(MY_REFS_KEY);
  return state.bookings.filter(b => refs.includes(b.reference) && b.status === "confirmed");
}
function ownedWaitlist(state) {
  const refs = getRefs(WAIT_REFS_KEY);
  return state.waitlist.filter(w => refs.includes(w.reference));
}

function bookingItem(record, isWait = false) {
  const night = nightById(record.nightId);
  return `
    <article class="booking-item">
      <div>
        <h3>${esc(night.title)}</h3>
        <p>${formatDate(night.date, true)} · ${record.seats} ${record.seats === 1 ? "seat" : "seats"} · ${isWait ? "waitlist" : "confirmed"}</p>
      </div>
      <div class="booking-ref">${esc(record.reference)}</div>
      <div style="display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end">
        ${isWait ? `<button class="btn ghost" data-leave-waitlist="${esc(record.reference)}">Leave list</button>` : `<button class="btn ghost" data-edit-ref="${esc(record.reference)}">Edit</button><button class="btn red" data-cancel-ref="${esc(record.reference)}">Cancel</button>`}
      </div>
    </article>`;
}

function renderManage() {
  const state = getState();
  const mine = ownedBookings(state);
  const waits = ownedWaitlist(state);
  app.innerHTML = shell(`
    <section class="manage-shell">
      <div class="manage-intro">
        <div class="manage-panel manage-copy">
          <span class="kicker">Browser remembers</span>
          <h1>Manage booking</h1>
          <p>Bookings made in this demo appear here automatically. Got a reference from elsewhere in this demo? Look it up.</p>
        </div>
        <form id="lookup-form" class="lookup-card">
          <div class="lookup-row">
            <input name="reference" aria-label="Booking reference" placeholder="ATS-XXXXX" required />
            <input name="email" type="email" aria-label="Booking email" placeholder="Email used" required />
            <button class="btn primary" type="submit">Find</button>
          </div>
          <div class="error-text" id="lookup-error"></div>
        </form>
      </div>
      <div class="booking-list">
        ${mine.length ? mine.map(b => bookingItem(b)).join("") : `<div class="empty">No bookings made in this browser yet.<br><a href="#/nights">Pick a Friday</a>.</div>`}
      </div>
      ${waits.length ? `<div class="organiser-section"><h2>Your waitlist spots</h2><div class="booking-list">${waits.map(w => bookingItem(w, true)).join("")}</div></div>` : ""}
    </section>
  `, "manage");
}

function renderEditModal(ref) {
  const state = getState();
  const booking = state.bookings.find(b => b.reference === ref && b.status === "confirmed");
  if (!booking) return;
  const night = nightById(booking.nightId);
  const otherBooked = bookedSeats(night.id, { ...state, bookings: state.bookings.filter(b => b.reference !== ref) });
  const max = Math.min(4, 12 - otherBooked);
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="edit-title">
        <div class="modal-head"><div><span class="kicker">Booking ${esc(ref)}</span><h2 id="edit-title">Edit booking</h2></div><button class="icon-btn" data-close-modal aria-label="Close">×</button></div>
        <form id="edit-form" class="form-grid">
          <div class="field">
            <label for="edit-seats">Seats</label>
            <select id="edit-seats" name="seats">${Array.from({length:max},(_,i)=>`<option value="${i+1}" ${booking.seats===i+1?"selected":""}>${i+1}</option>`).join("")}</select>
          </div>
          <div class="field full">
            <label for="edit-dietary">Dietary requirements</label>
            <textarea id="edit-dietary" name="dietary">${esc(booking.dietary || "")}</textarea>
          </div>
          <div class="form-actions"><button class="btn primary" type="submit">Save changes</button><button class="btn ghost" type="button" data-close-modal>Never mind</button></div>
        </form>
      </section>
    </div>`);
  document.querySelector("#edit-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    booking.seats = Number(data.get("seats"));
    booking.dietary = String(data.get("dietary") || "").trim();
    saveState(state);
    closeModal();
    renderManage();
    showToast("Booking updated. No email sent, obviously.");
  });
}
function closeModal() { document.querySelector("#modal-backdrop")?.remove(); }

function renderOrganiser() {
  const state = getState();
  const filter = sessionStorage.getItem("ats_org_filter") || "all";
  const bookingRows = state.bookings
    .filter(b => b.status === "confirmed" && (filter === "all" || b.nightId === filter))
    .sort((a,b) => a.nightId.localeCompare(b.nightId))
    .map(b => {
      const n = nightById(b.nightId);
      return `<tr><td class="mono">${esc(b.reference)}</td><td>${esc(b.name)}</td><td>${esc(n.title)}<br><small>${formatDate(n.date, true)}</small></td><td>${b.seats}</td><td>${esc(b.dietary || "—")}</td><td class="mono">${esc(b.email)}</td></tr>`;
    }).join("");
  const waitRows = state.waitlist.map(w => {
    const n = nightById(w.nightId);
    return `<tr><td class="mono">${esc(w.reference)}</td><td>${esc(w.name)}</td><td>${esc(n.title)}</td><td>${w.seats}</td><td>${esc(w.dietary || "—")}</td><td class="mono">${esc(w.email)}</td></tr>`;
  }).join("");
  app.innerHTML = shell(`
    <section class="organiser-shell">
      <div class="organiser-head">
        <div><span class="kicker">Demo back room</span><h1>Organiser</h1></div>
        <div class="organiser-actions"><a class="btn ghost" href="#/nights">Guest view</a><button class="btn yellow" id="reset-demo">Reset demo data</button></div>
      </div>
      <div class="capacity-grid">
        ${NIGHTS.map(n => `<div class="capacity-card"><span>${formatDate(n.date)}</span><strong>${remainingSeats(n.id,state)}</strong><small>seats left · ${bookedSeats(n.id,state)}/12 booked</small></div>`).join("")}
      </div>
      <div class="organiser-section">
        <div class="organiser-section-head">
          <h2>Bookings <small style="font:700 10px var(--mono);color:var(--muted)">(${state.bookings.filter(b=>b.status==="confirmed").length})</small></h2>
          <select id="org-filter" class="filter-select" aria-label="Filter bookings by night">
            <option value="all">All nights</option>
            ${NIGHTS.map(n => `<option value="${n.id}" ${filter===n.id?"selected":""}>${formatDate(n.date)} · ${esc(n.title)}</option>`).join("")}
          </select>
        </div>
        <div class="table-wrap"><table><thead><tr><th>Reference</th><th>Guest</th><th>Night</th><th>Seats</th><th>Dietary</th><th>Email</th></tr></thead><tbody>${bookingRows || `<tr><td colspan="6">No bookings in this filter.</td></tr>`}</tbody></table></div>
      </div>
      <div class="organiser-section">
        <h2>Waitlist <small style="font:700 10px var(--mono);color:var(--muted)">(${state.waitlist.length})</small></h2>
        <div class="table-wrap"><table><thead><tr><th>Reference</th><th>Guest</th><th>Night</th><th>Seats</th><th>Dietary</th><th>Email</th></tr></thead><tbody>${waitRows || `<tr><td colspan="6">Nobody waiting. Suspiciously calm.</td></tr>`}</tbody></table></div>
      </div>
      <p style="margin-top:20px;color:var(--muted);font:600 10px/1.5 var(--mono)">LOCAL DEMO DATA ONLY · Stored in this browser's localStorage · Reset restores seeded bookings and the sold-out night.</p>
    </section>
  `, "organiser");
}

function renderNotFound() {
  app.innerHTML = shell(`<section class="confirm-shell"><div class="empty"><h1 style="font-size:54px;margin:0 0 14px">Wrong machine.</h1><p>That page has gone missing with a sock.</p><a class="btn primary" href="#/">Back home</a></div></section>`);
}

function handleLookup(form) {
  const data = new FormData(form);
  const ref = String(data.get("reference") || "").trim().toUpperCase();
  const email = String(data.get("email") || "").trim().toLowerCase();
  const state = getState();
  const booking = state.bookings.find(b => b.reference.toUpperCase() === ref && b.email.toLowerCase() === email && b.status === "confirmed");
  const wait = state.waitlist.find(w => w.reference.toUpperCase() === ref && w.email.toLowerCase() === email);
  const error = document.querySelector("#lookup-error");
  if (!booking && !wait) {
    error.textContent = "No matching reference + email in this demo.";
    return;
  }
  if (booking) addRef(MY_REFS_KEY, booking.reference);
  if (wait) addRef(WAIT_REFS_KEY, wait.reference);
  renderManage();
  showToast("Found it. This browser will remember it now.");
}

function handleGlobalClick(event) {
  const copy = event.target.closest("#copy-ref");
  if (copy) {
    navigator.clipboard?.writeText(copy.dataset.ref).then(() => showToast("Reference copied.")).catch(() => showToast(copy.dataset.ref));
    return;
  }
  const edit = event.target.closest("[data-edit-ref]");
  if (edit) { renderEditModal(edit.dataset.editRef); return; }
  const cancel = event.target.closest("[data-cancel-ref]");
  if (cancel) {
    if (!confirm("Cancel this demo booking? The seats will go back on sale.")) return;
    const state = getState();
    const booking = state.bookings.find(b => b.reference === cancel.dataset.cancelRef);
    if (booking) booking.status = "cancelled";
    saveState(state);
    removeRef(MY_REFS_KEY, cancel.dataset.cancelRef);
    renderManage();
    showToast("Booking cancelled. Seats released.");
    return;
  }
  const leave = event.target.closest("[data-leave-waitlist]");
  if (leave) {
    const state = getState();
    state.waitlist = state.waitlist.filter(w => w.reference !== leave.dataset.leaveWaitlist);
    saveState(state);
    removeRef(WAIT_REFS_KEY, leave.dataset.leaveWaitlist);
    renderManage();
    showToast("Removed from waitlist.");
    return;
  }
  if (event.target.closest("[data-close-modal]") || (event.target.id === "modal-backdrop")) { closeModal(); return; }
  if (event.target.closest("#reset-demo")) {
    if (!confirm("Reset all demo bookings and waitlist entries to the original seeded state?")) return;
    resetDemo();
    renderOrganiser();
    showToast("Demo data reset.");
  }
}

function renderRoute() {
  closeModal();
  const route = (location.hash.replace(/^#/, "") || "/").split("?")[0];
  const parts = route.split("/").filter(Boolean);
  const [first, second] = parts;
  if (!first) renderHome();
  else if (first === "nights") renderNights();
  else if (first === "night") renderNight(second);
  else if (first === "book") renderBook(second, false);
  else if (first === "waitlist") renderBook(second, true);
  else if (first === "confirmation") renderConfirmation(second);
  else if (first === "manage") renderManage();
  else if (first === "organiser") renderOrganiser();
  else renderNotFound();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", handleGlobalClick);
document.addEventListener("submit", event => {
  if (event.target.id === "lookup-form") {
    event.preventDefault();
    handleLookup(event.target);
  }
});
document.addEventListener("change", event => {
  if (event.target.id === "org-filter") {
    sessionStorage.setItem("ats_org_filter", event.target.value);
    renderOrganiser();
  }
});
window.addEventListener("hashchange", renderRoute);
window.addEventListener("storage", event => {
  if (event.key === STORE_KEY) renderRoute();
});
renderRoute();

import './style.css'

// Edit all sample business details here before launch: name, neighborhood,
// address, mapUrl, phone (country code + number, digits only), and opening hours.
const cafe = {
  name: 'SIDEPOP',
  neighborhood: 'GOOD COFFEE, GOOD COMPANY',
  address: 'Your street address, Your City',
  mapUrl: 'https://maps.google.com/?q=Your+Cafe+Address',
  phone: '15551234567',
  hours: [
    ['Mon – Fri', '7:30 am – 5:00 pm'],
    ['Saturday', '8:00 am – 5:00 pm'],
    ['Sunday', '8:00 am – 3:00 pm'],
  ],
}

// Edit each sample item's name, description, price, category, artwork key, and tag here.
const menu = [
  { name: 'Cloud Nine Latte', detail: 'Double espresso, honey, silky oat milk', price: '$5.50', category: 'Coffee', art: 'latte', tag: 'THE HOUSE FAVE' },
  { name: 'Little Sunshine', detail: 'Iced vanilla matcha, a little extra joy', price: '$6.00', category: 'Coffee', art: 'matcha', tag: 'VERY GREEN' },
  { name: 'The Big Oat', detail: 'A proper flat white with your choice of milk', price: '$4.75', category: 'Coffee', art: 'flatwhite', tag: 'DAILY RITUAL' },
  { name: 'Berry Good Toast', detail: 'Whipped ricotta, berries, hot honey', price: '$9.50', category: 'Bites', art: 'toast', tag: 'SWEET + SAVOURY' },
  { name: 'Sunny Side Sando', detail: 'Egg, cheddar, greens, soft brioche', price: '$10.00', category: 'Bites', art: 'sando', tag: 'A GOOD START' },
  { name: 'Choccy Cloud Cookie', detail: 'Brown butter, dark chocolate, flaky salt', price: '$4.00', category: 'Treats', art: 'cookie', tag: 'BAKED TODAY' },
  { name: 'Lemon Lovely Loaf', detail: 'Soft lemon cake with a bright little glaze', price: '$5.00', category: 'Treats', art: 'lemon', tag: 'A LITTLE ZEST' },
]

const whatsappUrl = `https://wa.me/${cafe.phone}?text=${encodeURIComponent(`Hi ${cafe.name}! I'd love to get in touch.`)}`
const mapUrl = cafe.mapUrl

document.title = `${cafe.name} — Good Mood. Great Brew.`
document.querySelector('meta[name="description"]').content =
  `${cafe.name} is your neighbourhood coffee stop for the little pick-me-ups and the big catch-ups. Good coffee, good company.`

const cupIllustration = `
  <div class="mascot" role="img" aria-label="A happy ${cafe.name} takeaway coffee cup mascot">
    <span class="mascot-steam steam-one"></span><span class="mascot-steam steam-two"></span>
    <span class="cup-lid"></span>
    <span class="cup-body"><span class="cup-logo">S</span><span class="cup-eyes">• &nbsp; •</span><span class="cup-smile"></span></span>
    <span class="cup-sleeve"></span>
    <span class="mascot-shadow"></span>
  </div>`

const productCard = (item) => `
  <article class="menu-card" data-category="${item.category}" data-reveal>
    <div class="product-art art-${item.art}" aria-hidden="true">
      <span class="product-tag">${item.tag}</span>
      <span class="product-emoji">${({ latte: '☕', matcha: '🍵', flatwhite: '☕', toast: '🍓', sando: '🥪', cookie: '🍪', lemon: '🍋' })[item.art]}</span>
      <span class="art-sparkle">✳</span>
    </div>
    <div class="menu-card-copy">
      <div class="menu-card-heading"><h3>${item.name}</h3><span class="price">${item.price}</span></div>
      <p>${item.detail}</p>
    </div>
  </article>`

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main-content">SKIP TO CONTENT</a>
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="${cafe.name} home">${cafe.name}<span class="wordmark-dot">.</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">
      <span></span><span></span>
    </button>
    <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
      <a href="#menu">THE MENU</a><a href="#story">OUR STORY</a><a href="#visit">FIND US</a>
      <a class="nav-cta" href="${whatsappUrl}" target="_blank" rel="noreferrer">SAY HELLO <span aria-hidden="true">↗</span></a>
    </nav>
  </header>

  <main id="main-content" tabindex="-1">
    <section class="hero" id="home" tabindex="-1">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-star">✳</span> ${cafe.neighborhood}</p>
        <h1>GOOD MOOD.<br><span>GREAT BREW.</span></h1>
        <p class="hero-description">Your neighbourhood coffee stop for the little pick-me-ups and the big catch-ups. Made with care. Served with a side of sunshine.</p>
        <div class="hero-actions">
          <a class="button button-blue" href="#menu">VIEW THE MENU <span aria-hidden="true">↘</span></a>
          <a class="button button-outline" href="${mapUrl}" target="_blank" rel="noreferrer">FIND US <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-note"><span class="note-spark">✳</span><span>YOUR DAILY<br>HAPPY PLACE</span></div>
      </div>
      <div class="hero-art" role="img" aria-label="Illustration of the ${cafe.name} coffee cup mascot">
        <span class="hero-sun"></span><span class="hero-scribble scribble-a">✳</span>
        <span class="hero-scribble scribble-b">✳</span><span class="hero-star">★</span>
        <span class="hero-sticker">FRESH<br>FEELINGS<br>ONLY!</span>
        ${cupIllustration}
        <span class="hero-caption">ESPRESSO YOURSELF&nbsp; →</span>
      </div>
    </section>

    <div class="marquee" aria-label="Good coffee, good company, all day long">
      <div class="marquee-track" aria-hidden="true">${Array(4).fill('<span>GOOD COFFEE</span><b>✳</b><span>GOOD COMPANY</span><b>✳</b><span>ALL DAY LONG</span><b>✳</b>').join('')}</div>
    </div>

    <section class="menu-section section-wrap" id="menu" tabindex="-1">
      <div class="section-topline"><span>01 / THE GOOD STUFF</span><span>MADE FRESH, MADE WITH LOVE</span></div>
      <div class="section-heading">
        <div><p class="eyebrow">A LITTLE SOMETHING FOR EVERYONE</p><h2>THE MENU<span class="heading-dot">.</span></h2></div>
        <p class="section-intro">Really good coffee. Really good bites. Nothing complicated — just the things that make your day.</p>
      </div>
      <div class="filter-row" role="group" aria-label="Filter menu by category">
        <button class="filter-button is-active" type="button" data-filter="All" aria-pressed="true">ALL THE GOODIES <span>07</span></button>
        <button class="filter-button" type="button" data-filter="Coffee" aria-pressed="false">COFFEE <span>03</span></button>
        <button class="filter-button" type="button" data-filter="Bites" aria-pressed="false">BITES <span>02</span></button>
        <button class="filter-button" type="button" data-filter="Treats" aria-pressed="false">TREATS <span>02</span></button>
      </div>
      <div class="menu-grid">${menu.map(productCard).join('')}</div>
      <p class="menu-footnote">All good things are made fresh daily. Got an allergy? Just ask our lovely team.</p>
    </section>

    <section class="feature-section">
      <div class="feature-image" role="img" aria-label="Illustration of our featured latte">
        <span class="feature-rays"></span><span class="feature-cup"><span class="feature-coffee">☕</span></span>
        <span class="feature-sticker">SIP<br>HAPPENS</span>
      </div>
      <div class="feature-copy">
        <p class="eyebrow">THE ONE EVERYONE'S TALKING ABOUT</p>
        <h2>MEET YOUR<br>NEW <span>FAVOURITE.</span></h2>
        <p>Meet the Cloud Nine Latte. Our double-shot house espresso, a little drizzle of honey and silky oat milk. It's a hug in a cup — and it might just turn your whole day around.</p>
        <a class="text-link" href="#menu">FIND YOUR NEXT FAVE <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="story-section section-wrap" id="story" tabindex="-1">
      <div class="section-topline"><span>02 / THE SIDEPOP THING</span><span>SMALL CUP, BIG ENERGY</span></div>
      <div class="story-grid">
        <div class="story-copy">
          <p class="eyebrow">A NEIGHBOURHOOD KIND OF LOVE</p>
          <h2>GOOD THINGS<br>HAPPEN <span>OVER</span><br>COFFEE<span class="heading-dot">.</span></h2>
          <p>We think the best days start with a really good cup of coffee — and get even better when you share it. SIDEPOP is your little corner of happy: a place to slow down, catch up, and leave feeling a bit brighter.</p>
          <p>Every cup is made with care, every hello is real, and there's always room for one more at the table.</p>
          <a class="button button-blue" href="${whatsappUrl}" target="_blank" rel="noreferrer">COME SAY HI <span aria-hidden="true">↗</span></a>
        </div>
        <div class="story-art">
          <span class="story-sun"></span><span class="story-flower flower-one">✿</span><span class="story-flower flower-two">✿</span>
          <span class="story-note">MADE WITH<br>A LITTLE<br>EXTRA LOVE</span>
          ${cupIllustration}
          <span class="story-bottom">GOOD PEOPLE. REALLY GOOD COFFEE.</span>
        </div>
      </div>
    </section>

    <section class="visit-section" id="visit" tabindex="-1">
      <div class="visit-wrap section-wrap">
        <div class="section-topline"><span>03 / YOUR NEW REGULAR SPOT</span><span>DOOR'S OPEN</span></div>
        <div class="visit-grid">
          <div class="visit-copy">
            <p class="eyebrow">POP ON BY</p>
            <h2>SEE YOU<br><span>SOON?</span></h2>
            <div class="address-block"><span class="detail-icon">↗</span><div><h3>FIND THE GOOD STUFF</h3><p>${cafe.address}</p><a href="${mapUrl}" target="_blank" rel="noreferrer">OPEN IN MAPS ↗</a><small class="demo-note location-note">Sample address and map URL — update <code>cafe.address</code> and <code>cafe.mapUrl</code> in <code>src/main.js</code> before launch.</small></div></div>
            <div class="address-block"><span class="detail-icon">◷</span><div><h3>WHEN WE'RE HERE</h3><ul class="hours-list">${cafe.hours.map(([day, time]) => `<li><span>${day}</span><span>${time}</span></li>`).join('')}</ul></div></div>
          </div>
          <a class="map-card" href="${mapUrl}" target="_blank" rel="noreferrer" aria-label="Open ${cafe.name} location in maps">
            <span class="map-grid" aria-hidden="true"></span><span class="map-label">DEMO LOCATION · YOUR NEIGHBOURHOOD</span>
            <span class="map-pin"><span>✳</span></span><span class="map-place">${cafe.name}<br><small>YOUR HAPPY PLACE</small></span>
            <span class="map-open">OPEN MAP ↗</span>
          </a>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <span class="contact-spark contact-spark-one">✳</span><span class="contact-spark contact-spark-two">✳</span>
      <p class="eyebrow">GOT A QUESTION? CRAVING A COFFEE?</p>
      <h2>LET'S MAKE<br>YOUR DAY<span>!</span></h2>
      <p>Drop us a message, swing by for a sip, or bring a friend along. The more, the merrier.</p>
      <a class="button button-dark" href="${whatsappUrl}" target="_blank" rel="noreferrer">MESSAGE US ON WHATSAPP <span aria-hidden="true">↗</span></a>
      <small class="demo-note">Sample WhatsApp number — update the demo number in <code>src/main.js</code> before launch.</small>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark footer-mark" href="#home">${cafe.name}<span class="wordmark-dot">.</span></a>
    <p>GOOD COFFEE. GOOD COMPANY. GOOD ON YOU.</p>
    <a href="#home" class="back-top">BACK TO TOP ↑</a>
    <span class="footer-copy">© ${new Date().getFullYear()} ${cafe.name} · MADE WITH A LITTLE LOVE</span>
  </footer>
`

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.primary-nav')

const closeNavigation = (restoreFocus = false) => {
  menuToggle.setAttribute('aria-expanded', 'false')
  menuToggle.setAttribute('aria-label', 'Open navigation')
  navigation.classList.remove('is-open')
  if (restoreFocus && window.matchMedia('(max-width: 800px)').matches) menuToggle.focus()
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true'
  menuToggle.setAttribute('aria-expanded', String(isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
  navigation.classList.toggle('is-open', isOpen)
})

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  const target = link.hash ? document.getElementById(decodeURIComponent(link.hash.slice(1))) : null
  closeNavigation(!target)
  if (target) requestAnimationFrame(() => target.focus({ preventScroll: true }))
}))
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeNavigation(true)
})

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter
    document.querySelectorAll('.filter-button').forEach((filter) => {
      const isActive = filter === button
      filter.classList.toggle('is-active', isActive)
      filter.setAttribute('aria-pressed', String(isActive))
    })
    document.querySelectorAll('.menu-card').forEach((card) => {
      card.hidden = category !== 'All' && card.dataset.category !== category
    })
  })
})

const revealElements = document.querySelectorAll('[data-reveal]')
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  revealElements.forEach((element) => revealObserver.observe(element))
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'))
}

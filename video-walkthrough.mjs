/**
 * VIDEO WALKTHROUGH AUTOMATION
 * ─────────────────────────────
 * 1. Start OBS / Xbox Game Bar (Win+G) recording
 * 2. Run:  node video-walkthrough.mjs
 * 3. Watch the browser auto-navigate — stop recording when done
 */

import puppeteer from 'puppeteer'

const BASE = 'http://localhost:3002'
const PAUSE = ms => new Promise(r => setTimeout(r, ms))

const steps = [
  // Login Page
  { url: '/login',       pause: 5000,  scrollTo: 0,    label: '1. Admin Login Page' },
  // Dashboard
  { url: '/',            pause: 6000,  scrollTo: 400,  label: '2. Dashboard — KPI Cards' },
  { url: '/',            pause: 4000,  scrollTo: 900,  label: '3. Dashboard — Charts' },
  // Products
  { url: '/products',    pause: 6000,  scrollTo: 500,  label: '4. Products Inventory (67 SKUs)' },
  // Orders with CSV Export
  { url: '/orders',      pause: 5000,  scrollTo: 300,  label: '5. Orders Management + CSV Export' },
  // Customers
  { url: '/customers',   pause: 6000,  scrollTo: 400,  label: '6. Customer Analytics — VIP System' },
  // Analytics
  { url: '/analytics',   pause: 6000,  scrollTo: 500,  label: '7. Analytics — Extended KPIs' },
  // Ratings
  { url: '/ratings',     pause: 5000,  scrollTo: 300,  label: '8. Ratings & Reviews' },
  // Shop
  { url: '/shop',        pause: 5000,  scrollTo: 0,    label: '9. Customer Storefront' },
  { url: '/shop',        pause: 4000,  scrollTo: 600,  label: '10. Shop — Carousel' },
  { url: '/shop',        pause: 4000,  scrollTo: 1200, label: '11. Shop — Product Grid' },
  // Track Order (NEW)
  { url: '/track-order', pause: 5000,  scrollTo: 0,    label: '12. ✨ NEW: Order Tracking Page' },
  // Cart
  { url: '/cart',        pause: 4000,  scrollTo: 0,    label: '13. Shopping Cart' },
]

;(async () => {
  console.log('🎬 Opening browser for video recording...')
  console.log('   → Open your screen recorder NOW, then press Enter')

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: [
      '--start-maximized',
      '--no-sandbox',
      '--disable-infobars',
    ],
  })

  const [page] = await browser.pages()
  await page.setViewport({ width: 1440, height: 900 })

  // Intro screen
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle0' })
  await PAUSE(3000)

  for (const step of steps) {
    console.log(`▶ ${step.label}`)
    await page.goto(`${BASE}${step.url}`, { waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {})
    await PAUSE(1500)

    if (step.scrollTo > 0) {
      await page.evaluate(y => window.scrollTo({ top: y, behavior: 'smooth' }), step.scrollTo)
      await PAUSE(800)
    }

    await PAUSE(step.pause)
  }

  console.log('\n✅ Walkthrough complete — stop your screen recording now!')
  await PAUSE(3000)
  await browser.close()
})()

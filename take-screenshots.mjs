import puppeteer from 'puppeteer'
import path from 'path'
import fs from 'fs'

const BASE = 'http://localhost:3002'
const OUT  = 'C:/Users/shery/Desktop/Creamy_Corner_Final/screenshots'
fs.mkdirSync(OUT, { recursive: true })

const pages = [
  { url: '/login',        file: '01_login.png',       wait: 2000, label: 'Admin Login Page' },
  { url: '/',             file: '02_dashboard.png',    wait: 3000, label: 'Dashboard' },
  { url: '/products',     file: '03_products.png',     wait: 3000, label: 'Products Inventory' },
  { url: '/orders',       file: '04_orders.png',       wait: 3000, label: 'Orders Management' },
  { url: '/customers',    file: '05_customers.png',    wait: 3000, label: 'Customer Analytics' },
  { url: '/analytics',    file: '06_analytics.png',    wait: 3000, label: 'Analytics Page' },
  { url: '/ratings',      file: '07_ratings.png',      wait: 3000, label: 'Ratings & Reviews' },
  { url: '/shop',         file: '08_shop.png',         wait: 4000, label: 'Customer Shop' },
  { url: '/shop',         file: '09_shop_mobile.png',  wait: 4000, label: 'Shop Mobile View', mobile: true },
  { url: '/track-order',  file: '10_track_order.png',  wait: 2000, label: 'Order Tracking' },
  { url: '/cart',         file: '11_cart_empty.png',   wait: 2000, label: 'Cart Page' },
]

;(async () => {
  console.log('Launching browser...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: { width: 1440, height: 900 },
  })

  for (const page of pages) {
    const p = await browser.newPage()

    if (page.mobile) {
      await p.setViewport({ width: 390, height: 844, isMobile: true })
    } else {
      await p.setViewport({ width: 1440, height: 900 })
    }

    console.log(`📸 ${page.label}...`)
    await p.goto(`${BASE}${page.url}`, { waitUntil: 'networkidle0', timeout: 15000 }).catch(() => {})
    await new Promise(r => setTimeout(r, page.wait))

    const dest = path.join(OUT, page.file)
    await p.screenshot({ path: dest, fullPage: !page.mobile })
    console.log(`   ✓ saved → ${dest}`)
    await p.close()
  }

  await browser.close()
  console.log('\n✅ All screenshots saved to:', OUT)
})()

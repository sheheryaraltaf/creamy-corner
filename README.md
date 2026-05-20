# 🍦 Ice Cream E-Commerce Platform

A modern, full-stack ice cream e-commerce application built with **Next.js**, **React**, **TypeScript**, **Supabase**. Features live dashboard with customer insights normalized to 1-10 orders, Rs200-2500 spent.

## Quick Start

```
npm install
npm run dev
```

## Features
- **Customer Insights** (1-10 orders, Rs200-2500 normalized) – dynamic with orders
- Total Orders, Revenue, Avg Order Value – realtime Supabase
- Sales/Day chart, Popular Flavors sold – from order items
- Shop, Cart, Orders, Ratings – full platform
- Responsive dashboard @ /analytics

## All Metrics Update Live:
- New customer order → total orders +1, revenue +total, avg recalculated, flavor counts +qty
- Realtime across stat-cards, sales-chart, flavors-chart

View: http://localhost:3001/analytics

## Setup
1. Supabase project, copy URL/Anon Key to .env.local
2. Run SQL for tables (products, orders)
3. `npm run dev`

**Data-driven & ready!** 🎉

// Load environment variables from .env.local
import * as fs from 'fs'
import * as path from 'path'

const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8')
  const lines = envContent.split('\n')
  lines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, value] = line.split('=')
      if (key && value) {
        process.env[key.trim()] = value.trim()
      }
    }
  })
}

import { createClient } from '@supabase/supabase-js'
import { products } from './products'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Error: Missing environment variables in .env.local')
  console.error('Required:')
  console.error('  NEXT_PUBLIC_SUPABASE_URL')
  console.error('  NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function seedProducts() {
  console.log('🌱 Seeding products...')
  console.log(`📝 Adding ${products.length} products to Supabase\n`)
  
  try {
    // Upsert products (update if exists, insert if not)
    const { data, error } = await supabase
      .from('products')
      .upsert(products, { onConflict: 'id' }) as { data: any[], error: any }

    if (error) {
      console.error('❌ Error seeding products:', error.message)
      console.error(error)
      process.exit(1)
    }

    console.log(`✅ Successfully seeded ${data.length} products!`)

    console.log('\n📊 Sample products added:')
    if (data && data.length > 0) {
      data.slice(0, 3).forEach((p: any) => {
        console.log(`   • ${p.name} - Rs${p.price} (${p.category})`)
      })
      console.log(`   ... and ${data.length - 3} more`)
    }
  } catch (error) {
    console.error('❌ Unexpected error during seeding:', error)
    process.exit(1)
  }
}

async function seedAll() {
  await seedProducts()
  console.log('\n🍨 Now run: node lib/data/seed-orders.ts to seed customer orders!')
}

async function main() {
  try {
    console.log('🔄 Starting seed process...\n')
    await seedAll()
    console.log('\n✨ Products seeded! Run `node lib/data/seed-orders.ts` for orders.')
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

main()


export type Product = {
  id: number
  name: string
  description: string
  price: number // PKR
  image_url: string
  stock: number
  rating: number
  category: 'Kulfi' | 'Cone' | 'Sundae' | 'Takeaway' | 'Specialty'
}

export const products: Product[] = [
  { id: 1, name: 'Mango Kulfi', description: 'Rich creamy kulfi made with Alphonso mangoes from Lahore markets', price: 1200, image_url: 'https://images.unsplash.com/photo-1567306301408-9e72a7b888c5?w=400', stock: 120, rating: 4.9, category: 'Kulfi' },
  { id: 2, name: 'Pista Badam Kulfi', description: 'Premium pistachio and almond kulfi with saffron essence', price: 1500, image_url: 'https://images.unsplash.com/photo-1542994893-cef3d3a30a48?w=400', stock: 89, rating: 4.8, category: 'Kulfi' },
  { id: 3, name: 'Chocolate Kulfi', description: 'Belgian chocolate infused kulfi with nuts', price: 950, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', stock: 150, rating: 4.7, category: 'Kulfi' },
  { id: 4, name: 'Falooda Kulfi', description: 'Traditional Lahore falooda topped kulfi with rose syrup', price: 1800, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', stock: 67, rating: 4.9, category: 'Specialty' },
  { id: 5, name: 'Vanilla Cone', description: 'Classic Madagascar vanilla in waffle cone', price: 850, image_url: 'https://images.unsplash.com/photo-1571117333883-85d789e7b640?w=400', stock: 200, rating: 4.6, category: 'Cone' },
  // ... 45 more (full 50+)
  { id: 6, name: 'Strawberry Cone', description: 'Fresh strawberry with real fruit chunks', price: 900, image_url: 'https://images.unsplash.com/photo-1541635848396-8255f97a62e5?w=400', stock: 180, rating: 4.7, category: 'Cone' },
  { id: 7, name: 'Butterscotch Sundae', description: 'Butterscotch sauce and nuts sundae', price: 1100, image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 95, rating: 4.8, category: 'Sundae' },
  { id: 8, name: 'Pistachio Cone', description: 'Rich pistachio flavor cone', price: 1300, image_url: 'https://images.unsplash.com/photo-1542994893-cef3d3a30a48?w=400', stock: 75, rating: 4.8, category: 'Cone' },
  { id: 9, name: 'Mango Sundae', description: 'Layered mango sundae with rabri', price: 1400, image_url: 'https://images.unsplash.com/photo-1567306301408-9e72a7b888c5?w=400', stock: 110, rating: 4.9, category: 'Sundae' },
  { id: 10, name: 'Cookie Dough Kulfi', description: 'House-made cookie dough kulfi', price: 1250, image_url: 'https://images.unsplash.com/photo-1576618148400-f54c4055a497?w=400', stock: 60, rating: 4.7, category: 'Kulfi' },
  { id: 11, name: 'Oreo Sundae', description: 'Oreo crumble and chocolate sundae', price: 1150, image_url: 'https://images.unsplash.com/photo-1578944036280-d5fb6acde3e5?w=400', stock: 130, rating: 4.8, category: 'Sundae' },
  { id: 12, name: 'Banana Split', description: 'Classic banana split Lahore style', price: 1600, image_url: 'https://images.unsplash.com/photo-1579586140626-58c806396799?w=400', stock: 80, rating: 4.6, category: 'Specialty' },
  { id: 13, name: 'Coffee Kulfi', description: 'Robusta coffee flavored kulfi', price: 1100, image_url: 'https://images.unsplash.com/photo-1512568400610-42fe385fb760?w=400', stock: 100, rating: 4.7, category: 'Kulfi' },
  { id: 14, name: 'Kesar Pista Cone', description: 'Saffron pistachio premium cone', price: 1700, image_url: 'https://images.unsplash.com/photo-1542994893-cef3d3a30a48?w=400', stock: 55, rating: 4.9, category: 'Cone' },
  { id: 15, name: 'Malai Kulfi', description: 'Traditional plain malai kulfi', price: 800, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 250, rating: 4.5, category: 'Kulfi' },
  { id: 16, name: 'Rooh Afza Kulfi', description: 'Lahore favorite rooh afza kulfi', price: 1000, image_url: 'https://images.unsplash.com/photo-1627295571077-7c799958a006?w=400', stock: 140, rating: 4.8, category: 'Kulfi' },
  { id: 17, name: 'Dry Fruit Kulfi', description: 'Mixed dry fruits and nuts kulfi', price: 2000, image_url: 'https://images.unsplash.com/photo-1603048297194-8f7e9ee87bf6?w=400', stock: 40, rating: 4.9, category: 'Kulfi' },
  { id: 18, name: 'Chocolate Chip Cone', description: 'Chocolate chips in vanilla cone', price: 950, image_url: 'https://images.unsplash.com/photo-1545189323-4d733cd66a8b?w=400', stock: 190, rating: 4.7, category: 'Cone' },
  { id: 19, name: 'Caramel Sundae', description: 'Salted caramel sundae delight', price: 1350, image_url: 'https://images.unsplash.com/photo-15433513232-213f825539d5?w=400', stock: 85, rating: 4.8, category: 'Sundae' },
  { id: 20, name: 'Mint Chocolate Kulfi', description: 'Mint and chocolate swirled kulfi', price: 1300, image_url: 'https://images.unsplash.com/photo-1577968897966-f97d80a9a761?w=400', stock: 70, rating: 4.6, category: 'Kulfi' },
  { id: 21, name: 'Lahori Falooda', description: 'Complete falooda with ice cream', price: 2200, image_url: 'https://images.unsplash.com/photo-1579586140626-58c806396799?w=400', stock: 45, rating: 4.9, category: 'Specialty' },
  { id: 22, name: 'Gulab Jamun Sundae', description: 'Gulab jamun topped sundae', price: 1900, image_url: 'https://images.unsplash.com/photo-1568173908988-bd19a9 Bargain-hunting-3b5b8b7a2b5b?w=400', stock: 60, rating: 4.8, category: 'Sundae' },
  { id: 23, name: 'Hazelnut Cone', description: 'Nutella-inspired hazelnut cone', price: 1400, image_url: 'https://images.unsplash.com/photo-1563080740-a7f50b976e39?w=400', stock: 90, rating: 4.7, category: 'Cone' },
  { id: 24, name: 'Raspberry Ripple Kulfi', description: 'Raspberry swirl in kulfi', price: 1250, image_url: 'https://images.unsplash.com/photo-1574545543432-27416b83bfe4?w=400', stock: 65, rating: 4.6, category: 'Kulfi' },
  { id: 25, name: 'Tiramisu Takeaway', description: 'Tiramisu ice cream tub', price: 2100, image_url: 'https://images.unsplash.com/photo-1579044334156-777c192d2c43?w=400', stock: 35, rating: 4.9, category: 'Takeaway' },
  { id: 26, name: 'Pineapple Kulfi', description: 'Fresh pineapple kulfi', price: 1100, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 105, rating: 4.5, category: 'Kulfi' },
  { id: 27, name: 'Coconut Cone', description: 'Desiccated coconut cone', price: 900, image_url: 'https://images.unsplash.com/photo-1542640025-286b69117d70?w=400', stock: 175, rating: 4.6, category: 'Cone' },
  { id: 28, name: 'Rocky Road Sundae', description: 'Marshmallow and nuts sundae', price: 1450, image_url: 'https://images.unsplash.com/photo-1571117333883-85d789e7b640?w=400', stock: 95, rating: 4.7, category: 'Sundae' },
  { id: 29, name: 'Almond Joy Kulfi', description: 'Almond coconut chocolate kulfi', price: 1550, image_url: 'https://images.unsplash.com/photo-1603048297194-8f7e9ee87bf6?w=400', stock: 50, rating: 4.8, category: 'Kulfi' },
  { id: 30, name: 'Blueberry Cheesecake Cone', description: 'Cheesecake ice cream cone', price: 1650, image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 75, rating: 4.9, category: 'Cone' },
  { id: 31, name: 'Dates & Cream Kulfi', description: 'Medjool dates in cream kulfi', price: 1350, image_url: 'https://images.unsplash.com/photo-1603048297194-8f7e9ee87bf6?w=400', stock: 80, rating: 4.7, category: 'Kulfi' },
  { id: 32, name: 'Lemon Sorbet Cone', description: 'Refreshing lemon sorbet', price: 800, image_url: 'https://images.unsplash.com/photo-1571117333883-85d789e7b640?w=400', stock: 220, rating: 4.5, category: 'Cone' },
  { id: 33, name: 'Peach Melba Sundae', description: 'Peach and raspberry sundae', price: 1600, image_url: 'https://images.unsplash.com/photo-1544543391-83f8a3a27dd4?w=400', stock: 70, rating: 4.8, category: 'Sundae' },
  { id: 34, name: 'Cardamom Kulfi', description: 'Elaichi flavored authentic kulfi', price: 1050, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', stock: 115, rating: 4.6, category: 'Kulfi' },
  { id: 35, name: 'Ferrero Rocher Takeaway', description: 'Ferrero ice cream tub', price: 2500, image_url: 'https://images.unsplash.com/photo-1545189323-4d733cd66a8b?w=400', stock: 25, rating: 4.9, category: 'Takeaway' },
  { id: 36, name: 'Passion Fruit Kulfi', description: 'Tropical passion fruit kulfi', price: 1400, image_url: 'https://images.unsplash.com/photo-1567306301408-9e72a7b888c5?w=400', stock: 55, rating: 4.7, category: 'Kulfi' },
  { id: 37, name: 'Waffle Cone with KitKat', description: 'KitKat chunks waffle cone', price: 1200, image_url: 'https://images.unsplash.com/photo-1578944036280-d5fb6acde3e5?w=400', stock: 85, rating: 4.8, category: 'Cone' },
  { id: 38, name: 'Rose Falooda Ice Cream', description: 'Rose flavored falooda ice cream', price: 1950, image_url: 'https://images.unsplash.com/photo-1627295571077-7c799958a006?w=400', stock: 40, rating: 4.9, category: 'Specialty' },
  { id: 39, name: 'Brownie Sundae', description: 'Warm brownie ice cream sundae', price: 1700, image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 65, rating: 4.8, category: 'Sundae' },
  { id: 40, name: 'Jackfruit Kulfi', description: 'Kathal ka kulfi seasonal special', price: 1300, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 90, rating: 4.6, category: 'Kulfi' },
  { id: 41, name: 'Snickers Cone', description: 'Snickers inspired cone', price: 1150, image_url: 'https://images.unsplash.com/photo-1545189323-4d733cd66a8b?w=400', stock: 120, rating: 4.7, category: 'Cone' },
  { id: 42, name: 'Fig & Honey Kulfi', description: 'Anjeer honey kulfi', price: 1750, image_url: 'https://images.unsplash.com/photo-1603048297194-8f7e9ee87bf6?w=400', stock: 45, rating: 4.8, category: 'Kulfi' },
  { id: 43, name: 'Mango Lassi Ice Cream', description: 'Lassi flavored mango ice cream', price: 1450, image_url: 'https://images.unsplash.com/photo-1567306301408-9e72a7b888c5?w=400', stock: 75, rating: 4.9, category: 'Specialty' },
  { id: 44, name: 'Cranberry Kulfi', description: 'Tart cranberry kulfi', price: 1250, image_url: 'https://images.unsplash.com/photo-1574545543432-27416b83bfe4?w=400', stock: 60, rating: 4.6, category: 'Kulfi' },
  { id: 45, name: 'Dark Chocolate Takeaway', description: '70% cocoa dark chocolate tub', price: 2300, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', stock: 30, rating: 4.9, category: 'Takeaway' },
  { id: 46, name: 'Lychee Cone', description: 'Lychee fruit ice cream cone', price: 1350, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 80, rating: 4.7, category: 'Cone' },
  { id: 47, name: 'Kulfi Falooda Combo', description: 'Kulfi with falooda vermicelli', price: 2400, image_url: 'https://images.unsplash.com/photo-1579586140626-58c806396799?w=400', stock: 35, rating: 4.9, category: 'Specialty' },
  { id: 48, name: 'Toffee Crunch Sundae', description: 'Crunchy toffee sundae', price: 1550, image_url: 'https://images.unsplash.com/photo-15433513232-213f825539d5?w=400', stock: 100, rating: 4.8, category: 'Sundae' },
  { id: 49, name: 'Walnut Brownie Kulfi', description: 'Walnut brownie mixed kulfi', price: 1650, image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 50, rating: 4.8, category: 'Kulfi' },
  { id: 50, name: 'Royal Falooda Deluxe', description: 'Premium falooda with multiple kulfi scoops', price: 2500, image_url: 'https://images.unsplash.com/photo-1627295571077-7c799958a006?w=400', stock: 20, rating: 5.0, category: 'Specialty' },
  { id: 51, name: 'Custard Kulfi', description: 'Smooth custard flavored kulfi', price: 950, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 160, rating: 4.6, category: 'Kulfi' },
  { id: 52, name: 'Neapolitan Cone', description: 'Triple flavor cone', price: 1100, image_url: 'https://images.unsplash.com/photo-1571117333883-85d789e7b640?w=400', stock: 140, rating: 4.7, category: 'Cone' },
  { id: 53, name: 'Bubblegum Surprise', description: 'Colorful bubblegum with candy pieces', price: 1050, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', stock: 110, rating: 4.5, category: 'Cone' },
  { id: 54, name: 'Birthday Cake Kulfi', description: 'Celebration cake flavored kulfi with sprinkles', price: 1200, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', stock: 85, rating: 4.8, category: 'Kulfi' },
  { id: 55, name: 'Mint Chip Sensation', description: 'Fresh mint with dark chocolate chips', price: 1150, image_url: 'https://images.unsplash.com/photo-1577968897966-f97d80a9a761?w=400', stock: 125, rating: 4.7, category: 'Cone' },
  { id: 56, name: 'Cookies & Cream Sundae', description: 'Crushed cookies mixed in cream sundae', price: 1250, image_url: 'https://images.unsplash.com/photo-1578944036280-d5fb6acde3e5?w=400', stock: 95, rating: 4.8, category: 'Sundae' },
  { id: 57, name: 'Rum Raisin Kulfi', description: 'Premium rum-soaked raisins in kulfi', price: 1400, image_url: 'https://images.unsplash.com/photo-1603048297194-8f7e9ee87bf6?w=400', stock: 60, rating: 4.7, category: 'Kulfi' },
  { id: 58, name: 'Butter Pecan Cone', description: 'Buttery pecans in smooth ice cream', price: 1300, image_url: 'https://images.unsplash.com/photo-1545189323-4d733cd66a8b?w=400', stock: 80, rating: 4.6, category: 'Cone' },
  { id: 59, name: 'Rainbow Gumball Sundae', description: 'Colorful gumballs with layered ice cream', price: 1350, image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', stock: 70, rating: 4.7, category: 'Sundae' },
  { id: 60, name: 'Matcha Green Tea Kulfi', description: 'Japanese matcha powder kulfi', price: 1450, image_url: 'https://images.unsplash.com/photo-1627295571077-7c799958a006?w=400', stock: 50, rating: 4.9, category: 'Kulfi' },
  { id: 61, name: 'Lavender Honey Cone', description: 'Floral lavender with sweet honey', price: 1350, image_url: 'https://images.unsplash.com/photo-1571117333883-85d789e7b640?w=400', stock: 65, rating: 4.8, category: 'Cone' },
  { id: 62, name: 'Bubble Tea Ice Cream', description: 'Boba pearls in creamy tea-flavored ice cream', price: 1550, image_url: 'https://images.unsplash.com/photo-1574545543432-27416b83bfe4?w=400', stock: 40, rating: 4.8, category: 'Specialty' },
  { id: 63, name: 'Black Licorice Cone', description: 'Classic black licorice flavor cone', price: 1000, image_url: 'https://images.unsplash.com/photo-1542640025-286b69117d70?w=400', stock: 55, rating: 4.4, category: 'Cone' },
  { id: 64, name: 'Avocado Cream Kulfi', description: 'Creamy avocado with lime essence', price: 1350, image_url: 'https://images.unsplash.com/photo-1567306301408-9e72a7b888c5?w=400', stock: 45, rating: 4.7, category: 'Kulfi' },
  { id: 65, name: 'Pistachio Crunch Takeaway', description: 'Crushed pistachio in premium tub', price: 2200, image_url: 'https://images.unsplash.com/photo-1543189323-4d733cd66a8b?w=400', stock: 30, rating: 4.9, category: 'Takeaway' },
  { id: 66, name: 'Saffron Rose Sundae', description: 'Luxurious saffron with rose petal garnish', price: 2000, image_url: 'https://images.unsplash.com/photo-15433513232-213f825539d5?w=400', stock: 35, rating: 4.9, category: 'Sundae' },
  { id: 67, name: 'Guava Pineapple Mix', description: 'Tropical blend of guava and pineapple', price: 1200, image_url: 'https://images.unsplash.com/photo-1562440499-64e194ad699e?w=400', stock: 100, rating: 4.8, category: 'Cone' },
]

export const averageProductPrice =
  products.reduce((sum, product) => sum + product.price, 0) / products.length


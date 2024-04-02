import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: 'Dieter Bohlen',
    },
  })

  const shop = await prisma.shop.create({
    data: {
      name: 'Batman',
      abbreviation: 'BTM',
      userId: user.id,
      logoUrl: 'dummy/logo-1.png',
    },
  })

  const dishCategory1 = await prisma.dishCategory.create({
    data: {
      priority: 0,
      name: 'mittagessen',
      imageUrl: '1696921832630.jpg',
      shopId: shop.id,
    },
  })

  const dish1 = await prisma.dish.create({
    data: {
      priority: 0,
      name: 'Döner im Brot mit Salat und Soße',
      price: 650,
      imageUrl: '1696922150160.jpg',
      ingredients: {
        required: ['Brot'],
        optional: ['Fleisch', 'Salat', 'Soße'],
        extra: [
          { name: 'honig', price: 100 },
          { name: 'milch', price: 200 },
          { name: 'käse', price: 400 },
        ],
      },
      labels: ['Vegan', 'Sehr beliebt', 'Gibts nur hierOnly here', 'Geiles FrühstückBest Breakfast'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quod quos perspiciatis, porro voluptate numquam quae facere odit fugiat.',
      dishCategoryId: dishCategory1.id,
    },
  })

  const dishCategory2 = await prisma.dishCategory.create({
    data: {
      priority: 1,
      name: 'abendessen',
      imageUrl: '1696920877162.webp',
      shopId: shop.id,
    },
  })

  const dish2 = await prisma.dish.create({
    data: {
      priority: 0,
      name: 'Nudeln',
      price: 930,
      imageUrl: '1696920037467.jpeg',
      ingredients: {
        required: ['Nudeln'],
        optional: ['Parmesan', 'TomatensoßeTomato sauce'],
        extra: [
          { name: 'honig', price: 100 },
          { name: 'milch', price: 200 },
          { name: 'käse', price: 400 },
        ],
      },
      labels: ['Vegan', 'Sehr beliebt', 'Gibts nur hierOnly here', 'Krass', 'Geiles FrühstückBest Breakfast'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quod quos perspiciatis, porro voluptate numquam quae facere odit fugiat.',
      dishCategoryId: dishCategory2.id,
    },
  })

  const dish3 = await prisma.dish.create({
    data: {
      priority: 0,
      name: 'Pizza',
      price: 1180,
      imageUrl: '1697776589110.jpg',
      ingredients: {
        required: ['teig'],
        optional: ['tomatensoße', 'Käse'],
        extra: [
          { name: 'honig', price: 100 },
          { name: 'milch', price: 200 },
          { name: 'käse', price: 400 },
        ],
      },
      labels: ['Beste Pizza der Stadtpizza in town', 'Sehr beliebt', 'Gibts nur hierOnly here', 'Krass'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quod quos perspiciatis, porro voluptate numquam quae facere odit fugiat.',
      dishCategoryId: dishCategory2.id,
    },
  })

  const dish4 = await prisma.dish.create({
    data: {
      priority: 0,
      name: 'Pizza',
      price: 759,
      imageUrl: '1696916530493.jpg',
      dishCategoryId: dishCategory1.id,
      ingredients: {
        required: ['teig'],
        optional: ['tomatensoße'],
        extra: [
          { name: 'honig', price: 100 },
          { name: 'milch', price: 200 },
          { name: 'käse', price: 400 },
        ],
      },
      labels: ['Beste Pizza der Stadtpizza in town'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempore explicabo id.',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e, 'Prisma Seed')
    await prisma.$disconnect()
    process.exit(1)
  })

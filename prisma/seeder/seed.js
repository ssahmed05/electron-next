const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create some sample users
  await prisma.user.createMany({
    data: [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123', // In a real application, passwords should be hashed
      },
      {
        username: 'jane_doe',
        email: 'jane@example.com',
        password: 'password123', // In a real application, passwords should be hashed
      },
    ],
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

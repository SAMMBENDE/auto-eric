import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "sam",
      email: "admin.example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user.example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Porche Panamera",
      slug: "porche-panamera",
      category: "New",
      image: "/images/red.jpg",
      price: 70000,
      brand: "Ferari",
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: "A beautiful jewel",
    },
    {
      name: "Turbo",
      slug: "turbo",
      category: "New",
      image: "/images/turbo.jpg",
      price: 70000,
      brand: "Porche",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A beautiful jewel",
    },
    {
      name: "Blue Alpine",
      slug: "blue-alpine",
      category: "New",
      image: "/images/car4.jpg",
      price: 70000,
      brand: "Porche",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A beautiful jewel",
    },
    {
      name: "Sideral",
      slug: "sideral",
      category: "Second Hand",
      image: "/images/car3.jpg",
      price: 70000,
      brand: "Porche",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A beautiful jewel",
    },
    {
      name: "Porche basic",
      slug: "porche-basic",
      category: "New",
      image: "/images/car2.jpg",
      price: 70000,
      brand: "Porche",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A beautiful jewel",
    },
    {
      name: "Turbo Panamera",
      slug: "turbo-panamera",
      category: "New",
      image: "/images/car1.jpg",
      price: 70000,
      brand: "Porche",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A beautiful jewel",
    },
  ],
};

export default data;

"use client";

import { useState } from "react";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "App 1",
    category: "app",
    image: "/img/portfolio/portfolio-1.jpg",
    description: "App 1 description",
  },
  {
    id: 2,
    title: "Product 1",
    category: "product",
    image: "/img/portfolio/portfolio-2.jpg",
    description: "Product 1 description",
  },
  {
    id: 3,
    title: "Branding 1",
    category: "branding",
    image: "/img/portfolio/portfolio-3.jpg",
    description: "Branding 1 description",
  },
  {
    id: 4,
    title: "Books 1",
    category: "books",
    image: "/img/portfolio/portfolio-4.jpg",
    description: "Books 1 description",
  },
  {
    id: 5,
    title: "App 2",
    category: "app",
    image: "/img/portfolio/portfolio-5.jpg",
    description: "App 2 description",
  },
  {
    id: 6,
    title: "Product 2",
    category: "product",
    image: "/img/portfolio/portfolio-6.jpg",
    description: "Product 2 description",
  },
  {
    id: 7,
    title: "Branding 2",
    category: "branding",
    image: "/img/portfolio/portfolio-7.jpg",
    description: "Branding 2 description",
  },
  {
    id: 8,
    title: "Books 2",
    category: "books",
    image: "/img/portfolio/portfolio-8.jpg",
    description: "Books 2 description",
  },
  {
    id: 9,
    title: "App 3",
    category: "app",
    image: "/img/portfolio/portfolio-9.jpg",
    description: "App 3 description",
  },
];

export const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "app"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("app")}
          >
            App
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "product"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("product")}
          >
            Product
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "branding"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("branding")}
          >
            Branding
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              filter === "books"
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("books")}
          >
            Books
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm mb-4">{item.description}</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    Preview
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { DesignCard } from "@/widgets/cards";

const designs = [
  {
    title: "Landing Page Modern",
    image: "/img/background-1.jpg",
    description: "Desain landing page yang bersih dan profesional.",
    category: "Landing",
  },
  {
    title: "Portfolio Kreatif",
    image: "/img/background-2.jpg",
    description: "Template portofolio untuk menampilkan karya terbaik.",
    category: "Portfolio",
  },
  {
    title: "Tampilan Produk",
    image: "/img/background-3.png",
    description: "Layout produk dengan fokus pada visual.",
    category: "Product",
  },
 
];

export function Desain() {
  const [selected, setSelected] = React.useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(designs.map((d) => d.category))),
  ];

  const filtered =
    selected === "All" ? designs : designs.filter((d) => d.category === selected);

  return (
    <div className="container mx-auto px-4  ">
      <h2 className="text-3xl mt-20 font-bold mb-4">Kumpulan Desain</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-3 py-1 rounded-full text-sm font-semibold border transition-colors ${
              selected === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((d, i) => (
          <DesignCard
            key={i}
            title={d.title}
            image={d.image}
            description={d.description}
            category={d.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Desain;

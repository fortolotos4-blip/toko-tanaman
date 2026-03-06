"use client";

import plants from "@/data/plants";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductGrid() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPlants = plants.filter((plant) => {

    const matchSearch = plant.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || plant.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Koleksi Tanaman
      </h2>

      {/* SEARCH + FILTER */}

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">

        <input
          type="text"
          placeholder="Cari tanaman..."
          className="border p-3 rounded-lg w-full md:w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Indoor</option>
          <option>Cactus</option>
          <option>Sukulen</option>
        </select>

      </div>

      {/* GRID */}

      <div className="grid gap-8
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4">

        {filteredPlants.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}

      </div>

    </section>
  );
}
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FiFilter, FiUser } from "react-icons/fi";

const properties = [
  {
    id: 1,
    name: "Benowo Permai Indah",
    price: "Rp. 540.000.000",
    location: "Jl. Sukarno, 12B, Malang",
    size: "150 m²",
    image: "/search.png"
  },
  {
    id: 2,
    name: "Benowo Permai Indah",
    price: "Rp. 540.000.000",
    location: "Jl. Sukarno, 12B, Malang",
    size: "150 m²",
    image: "/search.png"
  },
  {
    id: 3,
    name: "Benowo Permai Indah",
    price: "Rp. 540.000.000",
    location: "Jl. Sukarno, 12B, Malang",
    size: "150 m²",
    image: "/search.png"
  }
];

export default function RealEstateApp() {
  const [showProfile, setShowProfile] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6">
        <h1 className="text-xl font-bold">Jual Tanah</h1>
        <nav className="flex space-x-4 items-center">
          <a href="#" className="text-gray-400 hover:text-white">Marketplace</a>
          <a href="#" className="text-gray-400 hover:text-white">List Tanah</a>
          <div className="relative">
            <button onClick={() => setShowProfile(!showProfile)} className="text-white text-xl focus:outline-none">
              <FiUser />
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">Logout</a>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold">Cara terbaik untuk Investasi Jangka Panjang</h2>
        <p className="text-gray-400 mt-2">Dapatkan tanah impian dengan mudah dan aman</p>
      </section>

      {/* Search & Filter */}
      <div className="flex items-center space-x-4 mb-6 relative">
        <Input placeholder="Cari Lokasi Tanah" className="w-full px-4 py-2 bg-gray-800 text-white rounded" />
        <div className="relative">
          <Button onClick={() => setShowFilter(!showFilter)} className="bg-gray-700 text-white px-4 py-2 flex items-center">
            <FiFilter className="mr-2" /> Filter
          </Button>
          {showFilter && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg py-2">
              {["Dalam 1km", "Dalam 3km", "Dalam 5km"].map((distance) => (
                <button
                  key={distance}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${selectedDistance === distance ? "bg-gray-700" : ""}`}
                  onClick={() => {
                    setSelectedDistance(distance);
                    setShowFilter(false);
                  }}
                >
                  {distance}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Properties List */}
      <div className="grid gap-4">
        {properties.map((property) => (
          <Card key={property.id} className="bg-gray-800 text-white rounded-lg overflow-hidden">
            <CardContent className="flex p-4">
              <img src={property.image} alt={property.name} className="w-24 h-24 rounded-lg" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{property.name}</h3>
                <p className="text-gray-400 text-sm">{property.location}</p>
                <p className="text-green-400 font-bold mt-2">{property.price}</p>
                <p className="text-gray-400 text-sm">{property.size}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

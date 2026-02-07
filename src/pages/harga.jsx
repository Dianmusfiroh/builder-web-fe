import React from "react";
import { Button } from "@material-tailwind/react";

const packages = [
  {
    name: "Starter",
    price: "Rp 299.000",
    period: "/bulan",
    description: "Paket untuk pemula",
    features: [
      "5 Desain Template",
      "Editor Dasar",
      "Dukungan Email",
      "Hosting 1GB",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "Rp 799.000",
    period: "/bulan",
    description: "Paket untuk profesional",
    features: [
      "Unlimited Desain",
      "Editor Advanced",
      "Dukungan Priority 24/7",
      "Hosting 50GB",
      "Custom Domain",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Hubungi Kami",
    description: "Solusi khusus untuk bisnis",
    features: [
      "Semua Fitur Professional",
      "Tim Dedicated",
      "Hosting Unlimited",
      "API Access",
      "SLA Guarantee",
    ],
    highlight: false,
  },
];

export function Harga() {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mt-24 mb-12">
          <h2 className="text-4xl font-bold mb-4">Paket Harga Kami</h2>
          <p className="text-gray-600 text-lg">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 ${
                pkg.highlight ? "ring-2 ring-blue-600 scale-105" : "bg-white"
              } ${pkg.highlight ? "bg-blue-50" : "bg-white"}`}
            >
              {pkg.highlight && (
                <div className="bg-blue-600 text-white py-2 text-center font-semibold">
                  Paling Populer
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.period}</span>
                </div>

                <Button
                  variant={pkg.highlight ? "filled" : "outlined"}
                  color="blue"
                  fullWidth
                  className="mb-6"
                >
                  {pkg.name === "Enterprise" ? "Hubungi Kami" : "Pilih Paket"}
                </Button>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Fitur Included:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Harga;

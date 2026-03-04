import React from "react";
import { Button } from "@material-tailwind/react";

const packages = [
  {
    name: "Paket Present",
    price: "Rp 3.500.000",
    // period: "/bulan",
    url: "https://wa.me/6282296973952/?text=Saya%20tertarik%20untuk%20membuat%20website%20dengan%20paket%20Presence",
    description: "Website profesional untuk biro travel umroh yang ingin memiliki website resmi. Cocok untuk Biro Belum punya website & Ingin terlihat profesional",
    features: [
      "Website company profile travel umroh",
      "Halaman Home, Tentang Kami, Fasilitas, Kontak",
      "Halaman daftar paket umroh",
      "Paket ditampilkan dalam bentuk brosur / image",
      "Tombol WhatsApp langsung ke CS",
      "Mobile-friendly & cepat diakses",
      "Domain (.com / .co.id / .id)",
      "Hosting & SSL 1 tahun"
    ],
    // specialized:[
    //   "Belum punya website",
    //   "Mau terlihat profesional dulu",
    //   "Belum terlalu mikir sistem marketing",
    // ],
    highlight: false,
  },
  {
    name: "Paket Closing",
    price: "Rp 5.000.000",
    // period: "/bulan",
    url: "https://wa.me/6282296973952/?text=Saya%20tertarik%20untuk%20membuat%20website%20dengan%20paket%20Web%20Closing",
    description: "Website travel dengan sistem katalog perjalanan, memungkinkan calon jamaah mengeksplorasi detail paket hingga itinerary sebelum menghubungi CS.",
    // specialized:[
    //   "Sudah jalan",
    //   "Sudah punya jamaah",
    //   "Mau website bantu closing",
    // ],
    features: [
      "Semua fitur Paket Starter",
      "Sistem katalog paket umroh",
      "Halaman detail paket perjalanan",
      "Itinerary perjalanan per hari",
      "Informasi hotel & maskapai",
      "Detail fasilitas paket",
      "Struktur katalog paket perjalanan",
      "Tampilan paket lebih jelas dan profesional"
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Hubungi Kami",
    url: "https://wa.me/6282296973952/?text=Saya%20tertarik%20untuk%20membuat%20website%20dengan%20paket%20Enterprise",
    description: "Solusi khusus untuk bisnis",
    features: [
      "Semua Fitur Professional",
      "Tim Dedicated",
      "Custom Fitur sesuai kebutuhan",

    ],
    //  specialized:[
    //   "Bisnis besar",
    //   "Mau solusi custom"
    // ],
    highlight: false,
  },
];

export function Harga() {
  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mt-24 mb-12">
          <h1 className="text-5xl lg:text-7xl font-black mb-4">Paket Website Travel</h1>
          <p className="">
            Pilih paket website yang membantu travel umroh menampilkan profil travel
          </p>
          <p>
            sekaligus menjelaskan paket perjalanan kepada calon jamaah 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.filter((pkg, idx) => idx < 2).map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-blue-500 bg-white"
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2 ">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4 ">{pkg.description}</p>

                <div className="mb-6 ">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">{pkg.period}</span>
                </div>

                <a href={pkg.url} target="_blank" className="block mb-6">
                  <Button
                    variant="outlined"
                    color="blue"
                    fullWidth
                    className="hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {pkg.name === "Enterprise" ? "Hubungi Kami" : "Pilih Paket"}
                  </Button>
                </a>

                {/* <div className="mb-4 text-sm">
                  <h4 className="font-semibold mb-4">Untuk travel yang:</h4>
                  <ul className="list-disc list-inside">
                    {pkg.specialized.map((specialize, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{specialize}</span>
                      </li>
                    ))}
                     </ul>
                </div> */}

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

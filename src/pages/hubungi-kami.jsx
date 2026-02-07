import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

const footerData = {
  title: "Web Builder",
  description:
    "Bangun website impian Anda dengan mudah menggunakan platform Web Builder kami.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com",
    },
    {
      color: "pink",
      name: "instagram",
      path: "https://www.instagram.com",
    },
  ],
  menus: [
    {
      name: "Produk",
      items: [
        { name: "Desain", path: "/desain" },
        { name: "Harga", path: "/harga" },
        { name: "Fitur", path: "#" },
      ],
    },
    {
      name: "Perusahaan",
      items: [
        { name: "Tentang Kami", path: "#" },
        { name: "Blog", path: "#" },
        { name: "Kontak", path: "/hubungi-kami" },
      ],
    },
  ],
  copyright: "Copyright © 2026 Web Builder. All rights reserved.",
};

export function HubungiKami() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Terima kasih! Pesan Anda telah dikirim.");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mt-24 font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 text-lg">
            Ada pertanyaan? Kami siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-blue-600 text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold mb-1">Lokasi</h4>
                    <p className="text-gray-600">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-blue-600 text-2xl">📧</div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@webbuilder.id" className="hover:text-blue-600">
                        info@webbuilder.id
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-blue-600 text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+62123456789" className="hover:text-blue-600">
                        +62 (123) 456-789
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  label="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  label="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  label="Subjek"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  label="Pesan"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                color="blue"
                fullWidth
                className="mt-6"
              >
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
      <Footer
        title={footerData.title}
        description={footerData.description}
        socials={footerData.socials}
        menus={footerData.menus}
        copyright={footerData.copyright}
      />
    </>
  );
}

export default HubungiKami;

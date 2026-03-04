import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

const footerData = {
  title: "Mitrascale",
  description:
    "Bangun website impian Anda dengan mudah lewat Mitrascale.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com",
    },
    {
      color: "light-blue",
      name: "@",
      path: "https://www.threads.com/@mitra_scale",
    },
    {
      color: "pink",
      name: "instagram",
      path: "https://www.instagram.com/mitra_scale/",
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
  copyright: "Copyright © 2026 Mitrascale. All rights reserved.",
};

export function HubungiKami() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message
    const message = `Nama: ${formData.name}%0AEmail: ${formData.email}%0ANo Telepon: ${formData.phone}%0ASubjek: ${formData.subject}%0APesan: ${formData.message}`;
    
    // WhatsApp number (format: 62xxxxxxxxxx without + or space)
    const whatsappNumber = "62123456789";
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
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
                      <a href="mailto:mitrascalearea@gmail.com" className="hover:text-blue-600">
                        mitrascalearea@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="flex gap-4">
                  <div className="text-blue-600 text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold mb-1">Telepon</h4>
                    <p className="text-gray-600">
                      <a href="tel:+62123456789" className="hover:text-blue-600">
                        +62 (123) 456-789
                      </a>
                    </p>
                  </div>
                </div> */}
                
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

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full animate-in">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Terima Kasih!</h3>
              <p className="text-gray-600 mb-6">
                Pesan Anda akan dikirim ke WhatsApp kami. Tim kami akan segera merespons.
              </p>
              <Button
                variant="gradient"
                color="blue"
                fullWidth
                onClick={() => setShowModal(false)}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}

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

import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { AdminSidebar } from "@/widgets/layout";

export function AdminScrapperUserAdd() {
  const navigate = useNavigate();

  const goBackToUsers = () => {
    navigate("/admin/scrapper/products");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="transition-[padding] duration-300 lg:[padding-left:var(--admin-sidebar-width,16rem)]">
        <header className="border-b border-blue-gray-50 bg-white px-4 py-4">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Typography variant="h4" className="font-bold text-gray-900">
                Tambah Pengguna
              </Typography>
              <Typography className="text-sm text-blue-gray-500">
                Buat pengguna baru untuk produk scrapper.
              </Typography>
            </div>
            <Button type="button" variant="outlined" color="blue-gray" size="sm" onClick={goBackToUsers}>
              Kembali
            </Button>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-8">
          <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-6">
            <form className="grid gap-6 lg:grid-cols-2">
              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Nama Pengguna
                </Typography>
                <Input
                  size="lg"
                  placeholder="Masukkan nama pengguna"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Email
                </Typography>
                <Input
                  type="email"
                  size="lg"
                  placeholder="nama@email.com"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Paket
                </Typography>
                <Select label="Pilih paket">
                  <Option>1 bulan</Option>
                  <Option>3 bulan</Option>
                  <Option>6 bulan</Option>
                  <Option>12 bulan</Option>
                </Select>
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Status
                </Typography>
                <Select label="Pilih status">
                  <Option>active</Option>
                  <Option>inactive</Option>
                </Select>
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Tanggal Mulai
                </Typography>
                <Input
                  type="date"
                  size="lg"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Tanggal Expired
                </Typography>
                <Input
                  type="date"
                  size="lg"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <div className="lg:col-span-2">
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Catatan
                </Typography>
                <Textarea label="Catatan pengguna" />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-2">
                <Button color="blue">Simpan Pengguna</Button>
                <Button type="button" variant="outlined" color="blue-gray" onClick={goBackToUsers}>
                  Batal
                </Button>
              </div>
            </form>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default AdminScrapperUserAdd;

import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { AdminSidebar } from "@/widgets/layout";

const users = [
  {
    no: "SCR-001",
    name: "dian",
    email: "dian@email.com",
    phone: "0812-3456-7890",
    package: "3 bulan",
    createdAt: "01 Jan 2024",
    expiredAt: "01 Apr 2027",
    status: "active",
    lastRun: "27 Mei 2026, 09:30",
    totalProducts: "184",
  },
  {
    no: "SCR-002",
    name: "musfiroh",
    email: "musfiroh@email.com",
    phone: "0812-8888-1234",
    package: "3 bulan",
    createdAt: "01 Jan 2024",
    expiredAt: "01 Apr 2027",
    status: "inactive",
    lastRun: "20 Mei 2026, 15:10",
    totalProducts: "72",
  },
];

const activities = [
  { label: "Scrapper dijalankan", value: "Berhasil mengambil 42 produk baru" },
  { label: "Paket diperbarui", value: "Masa aktif diperpanjang ke 01 Apr 2027" },
  { label: "Akun dibuat", value: "Pengguna masuk ke paket 3 bulan" },
];

function getStatusColor(status) {
  return status === "active" ? "green" : "red";
}

export function AdminScrapperUserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((item) => item.no === id) || users[0];

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
                Detail Pengguna
              </Typography>
              <Typography className="text-sm text-blue-gray-500">
                Informasi pengguna produk scrapper.
              </Typography>
            </div>
            <Button type="button" variant="outlined" color="blue-gray" size="sm" onClick={goBackToUsers}>
              Kembali
            </Button>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1fr_360px]">
          <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-6">
            <div className="mb-6 flex flex-col gap-3 border-b border-blue-gray-50 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Typography variant="h5" className="font-bold text-gray-900">
                  {user.name}
                </Typography>
                <Typography className="text-sm text-blue-gray-500">
                  {user.no}
                </Typography>
              </div>
              <Chip value={user.status} color={getStatusColor(user.status)} size="sm" className="w-fit" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Email", user.email],
                ["No. Telepon", user.phone],
                ["Paket", user.package],
                ["Tanggal Mulai", user.createdAt],
                ["Tanggal Expired", user.expiredAt],
                ["Total Produk", user.totalProducts],
              ].map(([label, value]) => (
                <div key={label}>
                  <Typography className="text-sm font-medium text-blue-gray-500">
                    {label}
                  </Typography>
                  <Typography className="mt-1 font-semibold text-gray-900">
                    {value}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button color="blue">Edit Pengguna</Button>
              <Button variant="outlined" color="red">
                Nonaktifkan
              </Button>
            </div>
          </Card>

          <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-6">
            <Typography variant="h5" className="mb-1 font-bold text-gray-900">
              Aktivitas
            </Typography>
            <Typography className="mb-6 text-sm text-blue-gray-500">
              Aktivitas terbaru pengguna.
            </Typography>

            <div className="space-y-5">
              <div>
                <Typography className="text-sm font-medium text-blue-gray-500">
                  Scrapper Terakhir
                </Typography>
                <Typography className="mt-1 font-semibold text-gray-900">
                  {user.lastRun}
                </Typography>
              </div>

              {activities.map((item) => (
                <div key={item.label} className="border-t border-blue-gray-50 pt-4">
                  <Typography className="text-sm font-semibold text-gray-900">
                    {item.label}
                  </Typography>
                  <Typography className="mt-1 text-sm text-blue-gray-500">
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default AdminScrapperUserDetail;

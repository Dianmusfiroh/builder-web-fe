import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import { AdminSidebar } from "@/widgets/layout";

const payments = [
  {
    id: "INV-2401",
    customer: "Budi Santoso",
    product: "Website Company Profile",
    amount: "Rp 2.500.000",
    status: "Paid",
  },
  {
    id: "INV-2402",
    customer: "Siti Aulia",
    product: "Landing Page Produk",
    amount: "Rp 1.250.000",
    status: "Pending",
  },
  {
    id: "INV-2403",
    customer: "Rizky Pratama",
    product: "Toko Online",
    amount: "Rp 4.750.000",
    status: "Review",
  },
];

const stats = [
  { label: "Total Order", value: "36" },
  { label: "Pembayaran Masuk", value: "Rp 18,4 jt" },
  { label: "Produk Aktif", value: "8" },
];

function getStatusColor(status) {
  if (status === "Paid") return "green";
  if (status === "Pending") return "amber";
  return "blue";
}

export function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="transition-[padding] duration-300 lg:[padding-left:var(--admin-sidebar-width,16rem)]">
        <header className="border-b border-blue-gray-50 bg-white px-4 py-4">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Typography variant="h4" className="font-bold text-gray-900">
                Admin Dashboard
              </Typography>
              <Typography className="text-sm text-blue-gray-500">
                Pembayaran dan produk Mitrascale
              </Typography>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <Card key={item.label} shadow={false} className="rounded-lg border border-blue-gray-50 p-5">
                <Typography className="text-sm font-medium text-blue-gray-500">
                  {item.label}
                </Typography>
                <Typography variant="h3" className="mt-2 font-bold text-gray-900">
                  {item.value}
                </Typography>
              </Card>
            ))}
          </div>

          <Card shadow={false} className="overflow-hidden rounded-lg border border-blue-gray-50">
            <div className="flex flex-col gap-2 border-b border-blue-gray-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Typography variant="h5" className="font-bold text-gray-900">
                  Payment Product
                </Typography>
                <Typography className="text-sm text-blue-gray-500">
                  Daftar pembayaran produk terbaru.
                </Typography>
              </div>
              <Button color="blue" size="sm">
                Tambah Payment
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] table-auto text-left">
                <thead>
                  <tr className="bg-blue-gray-50/50">
                    {["Invoice", "Customer", "Product", "Amount", "Status"].map((head) => (
                      <th key={head} className="p-4">
                        <Typography variant="small" className="font-semibold text-blue-gray-600">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.id} className="border-t border-blue-gray-50">
                      <td className="p-4">
                        <Typography variant="small" className="font-semibold text-gray-900">
                          {payment.id}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="text-blue-gray-700">
                          {payment.customer}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="text-blue-gray-700">
                          {payment.product}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="font-semibold text-gray-900">
                          {payment.amount}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Chip
                          value={payment.status}
                          color={getStatusColor(payment.status)}
                          size="sm"
                          className="w-fit"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default AdminDashboard;

import { Button, Card, Chip, Typography} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/widgets/layout";

const scrapperProducts = [
  {
    no: "SCR-001",
    name: "dian",
    package: "3 bulan",
    createdAt: "01 Jan 2024",
    expiredAt: "01 Apr 2027",
    status: "active",
  },
  {
    no: "SCR-002",
    name: "musfiroh",
    package: "3 bulan",
    createdAt: "01 Jan 2024",
    expiredAt: "01 Apr 2027",
    status: "inactive",
  },
];

function getStatusColor(status) {
  if (status === "active") return "green";
  if (status === "inactive") return "red";
  return "amber";
}

export function AdminScrapperProducts() {
  const navigate = useNavigate();

  const openUserDetail = (userNo) => {
    navigate(`/admin/scrapper/users/${userNo}`);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="transition-[padding] duration-300 lg:[padding-left:var(--admin-sidebar-width,16rem)]">
        <header className="border-b border-blue-gray-50 bg-white px-4 py-4">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Typography variant="h4" className="font-bold text-gray-900">
                Scrapper
              </Typography>
              <Typography className="text-sm text-blue-gray-500">
                List pengguna produk scrapper.
              </Typography>
            </div>
            
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-5">
              <Typography className="text-sm font-medium text-blue-gray-500">
                Total Pengguna
              </Typography>
              <Typography variant="h3" className="mt-2 font-bold text-gray-900">
                124
              </Typography>
            </Card>
            <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-5">
              <Typography className="text-sm font-medium text-blue-gray-500">
                Pengguna Aktif
              </Typography>
              <Typography variant="h3" className="mt-2 font-bold text-gray-900">
                98
              </Typography>
            </Card>
            <Card shadow={false} className="rounded-lg border border-blue-gray-50 p-5">
              <Typography className="text-sm font-medium text-blue-gray-500">
                Pengguna Non-Aktif
              </Typography>
              <Typography variant="h3" className="mt-2 font-bold text-gray-900">
                26
              </Typography>
            </Card>
          </div>

          <Card shadow={false} className="overflow-hidden rounded-lg border border-blue-gray-50">
            <div>
              <div className="border-b border-blue-gray-50 p-5 flex items-center justify-between">
                <div className="">
                  <Typography variant="h5" className="font-bold text-gray-900">
                    List Pengguna Scrapper
                  </Typography>
                  <Typography icon className="text-sm text-blue-gray-500">
                    Data pengguna produk scrapper.
                  </Typography>
                </div>
                 <div className="flex items-center justify-between gap-4">
                  <Link
                    to="/admin/scrapper/users/add"
                    className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  >
                    Tambah Pengguna
                  </Link>
                </div>
              </div>
             
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] table-auto text-left">
                <thead>
                  <tr className="bg-blue-gray-50/50">
                    {["No", "Nama Pengguna", "Paket", "Tanggal", "Expired", "Status", "Aksi"].map((head) => (
                      <th key={head} className="p-4">
                        <Typography variant="small" className="font-semibold text-blue-gray-600">
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scrapperProducts.map((product) => (
                    <tr key={product.no} className="border-t border-blue-gray-50">
                      <td className="p-4">
                        <Typography variant="small" className="font-semibold text-gray-900">
                          {product.no}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="text-blue-gray-700">
                          {product.name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="text-blue-gray-700">
                          {product.package}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="font-semibold text-gray-900">
                          {product.createdAt}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" className="text-blue-gray-700">
                          {product.expiredAt}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Chip
                          value={product.status}
                          color={getStatusColor(product.status)}
                          size="sm"
                          className="w-fit"
                        />
                      </td>
                      <td className="p-4">
                        <Button
                          type="button"
                          variant="text"
                          color="blue"
                          size="sm"
                          onClick={() => openUserDetail(product.no)}
                        >
                          Detail
                        </Button>
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

export default AdminScrapperProducts;

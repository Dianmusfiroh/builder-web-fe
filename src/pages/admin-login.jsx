import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Typography } from "@material-tailwind/react";

export function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "adminSession",
      JSON.stringify({ email: email || "admin@mitrascale.id", loggedInAt: Date.now() })
    );
    navigate("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div className="hidden lg:block">
            <Typography variant="h1" className="mb-5 max-w-2xl text-4xl font-bold text-gray-900">
              Admin Mitrascale
            </Typography>
            <Typography className="max-w-xl text-lg leading-8 text-blue-gray-600">
              Kelola dashboard, pembayaran produk, dan status pesanan dari satu halaman admin.
            </Typography>
          </div>

          <Card color="white" shadow={true} className="rounded-lg p-8">
            <div className="mb-8">
              <Typography variant="h3" className="mb-2 font-bold text-gray-900">
                Login Admin
              </Typography>
              <Typography className="text-sm font-normal text-blue-gray-500">
                Masuk untuk membuka dashboard internal.
              </Typography>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Email
                </Typography>
                <Input
                  type="email"
                  size="lg"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@mitrascale.id"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <div>
                <Typography variant="small" className="mb-2 font-medium text-blue-gray-700">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Masukkan password"
                  className="!border-t-blue-gray-200 focus:!border-t-blue-500"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>

              <Button type="submit" color="blue" className="mt-2" fullWidth disabled={!password}>
                Masuk Dashboard
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;

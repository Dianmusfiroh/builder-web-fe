import React from "react";
import { Input, Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const domainExtensions = [".id", ".com", ".co.id", ".net", ".org", ".biz"];

export function CariDomain() {
  const [searchInput, setSearchInput] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [searched, setSearched] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    const baseName = searchInput.trim().toLowerCase();
    setLoading(true);
    setError(null);

    fetch('http://localhost:3000/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: baseName, extensions: domainExtensions }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.result && Array.isArray(data.data)) {
          setResults(
            data.data.map((d) => ({ domain: d.domain, available: d.available, price: d.price }))
          );
        } else {
          setError('Invalid response from domain API');
        }
        setSearched(true);
      })
      .catch((err) => setError(err.message || String(err)))
      .finally(() => setLoading(false));
  };

  return (
      <div className="">
        {/* Search Form */}
        <Card className="shadow-lg w-1/2 max-w-2xl mx-auto">
          <CardBody className="p-8 ">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <Input
                  type="text"
                  label="Masukkan Nama Domain, Contoh: example.com"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full"
                  size="lg"
                />
              </div>
              <Button
                type="submit"
                variant="gradient"
                color="blue"
                className="sm:w-auto px-8 py-3"
                size="lg"
                fullWidth
              >
                Cek Domain
              </Button>
            </form>
          </CardBody>
        </Card>

        {/* Search Results */}
        {searched && (
          <div>
            <h3 className="text-2xl font-bold ">Hasil Pencarian untuk "{searchInput}"</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result) => (
                <Card
                  key={result.domain}
                  className={`overflow-hidden transition-all ${
                    result.available
                      ? "border-2 border-green-500 bg-green-50"
                      : "border-2 border-red-300 bg-red-50"
                  }`}
                >
                  <CardBody className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Typography variant="h5" className="font-bold mb-2">
                          {result.domain}
                        </Typography>
                        <Typography className="text-sm text-gray-100">
                          {result.available ? "Tersedia" : "Tidak Tersedia"}
                        </Typography>
                      </div>
                      <div className="ml-4">
                        {result.available ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-red-600" />
                        )}
                      </div>
                    </div>

                    {result.available && (
                      <>
                        {/* <div className="bg-white rounded p-3 mb-4">
                          <Typography className="text-xs text-gray-600 mb-1">
                            Harga per tahun
                          </Typography>
                          <Typography variant="h6" className="font-bold text-blue-600">
                            Rp {result.price.toLocaleString("id-ID")}
                          </Typography>
                        </div> */}
                        <Button
                          variant="gradient"
                          color="green"
                          fullWidth
                          size="sm"
                        >
                          Pesan Sekarang
                        </Button>
                      </>
                    )}

                    {!result.available && (
                      <Button
                        variant="outlined"
                        color="blue"
                        fullWidth
                        size="sm"
                        disabled
                      >
                        Tidak Tersedia
                      </Button>
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <Typography variant="h6" className="font-bold mb-2">
                💡 Tips Memilih Domain
              </Typography>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Pilih domain yang mudah diingat dan relevan dengan bisnis Anda</li>
                <li>• Pertimbangkan menggunakan ekstensi .id untuk target pasar Indonesia</li>
                <li>• Hindari penggunaan angka dan tanda hubung yang berlebihan</li>
                <li>• Domain dengan sejarah yang baik lebih bernilai untuk SEO</li>
              </ul>
            </div>
          </div>
        )}

        {!searched && (
          <div className="text-center text-gray-500 py-5">
            <Typography className="text-lg">
              Termasuk Domain, Hosting, dan SSL 1 tahun
            </Typography>
          </div>
        )}
      </div>
  );
}

export default CariDomain;

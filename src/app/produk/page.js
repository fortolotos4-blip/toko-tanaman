import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function ProdukPage() {
  return (
    <main>

      <Navbar />

      <section className="py-16 text-center bg-green-50">
        <h1 className="text-4xl font-bold text-[#5DAA8A]">
          Koleksi Tanaman
        </h1>

        <p className="mt-4 text-gray-600">
          Pilih tanaman favorit untuk rumah Anda
        </p>
      </section>

      <ProductGrid />

      <Footer />

    </main>
  );
}
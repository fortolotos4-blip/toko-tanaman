import plants from "@/data/plants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function DetailProduk({ params }) {

  const { id } = await params;   // ⭐ ini yang penting

  const plant = plants.find((p) => p.id === Number(id));

  if (!plant) {
    return (
      <div className="text-center p-10">
        Produk tidak ditemukan
      </div>
    );
  }

  const phone = "6285856575143";

  const message = `Halo, saya ingin membeli tanaman ${plant.name}`;

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main>

      <Navbar />

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">

        <img
          src={plant.image}
          alt={plant.name}
          className="rounded-xl shadow-lg w-full"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {plant.name}
          </h1>

          <p className="text-green-700 text-2xl font-semibold mt-4">
            Rp {plant.price.toLocaleString("id-ID")}
          </p>

          <p className="mt-6 text-gray-600">
            {plant.description}
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Kategori: {plant.category}
          </p>

          <p className="mt-2 text-sm text-gray-500">
          Ukuran Tanaman: {plant.size}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Jenis Pot: {plant.pot}
        </p>
        
          <a
            href={whatsappURL}
            target="_blank"
            className="mt-8 inline-block bg-[#7FC4A6] text-white px-8 py-3 rounded-lg hover:bg-[#7FC4A6] transition"
          >
            Beli via WhatsApp
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}
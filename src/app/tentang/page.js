import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tentang() {
  return (
    <main>

      <Navbar />

      <section className="max-w-5xl mx-auto py-20 px-6 text-center">

        <h1 className="text-4xl font-bold text-[#7FC4A6]">
          Tentang Tanaman Hias Rahayu
        </h1>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Tanaman Hias Rahayu adalah toko tanaman yang menyediakan berbagai
          jenis tanaman yang berkualitas untuk memperindah rumah, kantor,
          maupun taman Anda dengan harga yang terjangkau.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Sebagai Planter Tanaman percaya bahwa tanaman tidak hanya mempercantik ruang,
          tetapi juga membawa kesegaran, ketenangan, dan kehidupan
          ke lingkungan sekitar.
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Dengan berbagai pilihan tanaman indoor, outdoor
          sampai dengan succulent, Tanaman Hias Rahayu siap membantu Anda menemukan
          tanaman yang cocok untuk kebutuhan Anda.
        </p>

      </section>

      <Footer />

    </main>
  );
}
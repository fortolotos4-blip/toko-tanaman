import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Kontak() {

  const phone = "6285856575143";

  const message = "Halo, saya ingin bertanya tentang tanaman di Tanaman Hias Rahayu";

  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <main>

      <Navbar />

      <section className="max-w-6xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold text-[#7FC4A6] text-center">
          Kontak Tanaman Hias Rahayu
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* INFORMASI TOKO */}

          <div>


            <p className="mt-4 text-gray-600">
              📍 Jl. Graha Asri Sukodono Jl Apel Ae 12, Desa Pekarungan
            </p>

            <p className="text-gray-600">
              Sukodono, Sidoarjo
            </p>

            <p className="text-gray-600">
              Jawa Timur 60293
            </p>

            <p className="mt-4 text-gray-600">
              📞 +62 858 5657 5143
            </p>

            <p className="text-gray-600">
              📧 kebunrahayu@gmail.com
            </p>

            {/* JAM OPERASIONAL */}

            <div className="mt-6">

              <h3 className="font-semibold">
                Jam Operasional
              </h3>

              <p className="text-gray-600">
                Senin - Jumat : 08.00 - 17.00
              </p>

              <p className="text-gray-600">
                Sabtu - Minggu : 09.00 - 16.00
              </p>

            </div>

            <a
              href={whatsappURL}
              target="_blank"
              className="inline-block mt-6 bg-[#7FC4A6] text-white px-6 py-3 rounded-lg hover:bg-[#6fb596]"
            >
              Chat via WhatsApp
            </a>

          </div>


          {/* FORM KONTAK */}

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Masukan Nama"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Masukan Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Pesan.."
              rows="5"
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="bg-[#7FC4A6] text-white px-6 py-3 rounded-lg hover:bg-[#6fb596]"
            >
              Kirim Pesan
            </button>

          </form>

        </div>


        {/* GOOGLE MAPS */}

        <div className="mt-16">

          <iframe
            src="https://www.google.com/maps?q=TanamanHiasRahayu&output=embed"
            width="100%"
            height="350"
            className="rounded-lg border"
            loading="lazy"
          ></iframe>

        </div>

      </section>

      <Footer />

    </main>
  );
}
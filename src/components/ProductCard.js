import Link from "next/link";

export default function ProductCard({ plant }) {

  const phone = "6285856575143";

  const message = `Halo, saya ingin membeli tanaman ${plant.name} dengan harga Rp ${plant.price}`;

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <img
        src={plant.image}
        alt={plant.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-lg">
          {plant.name}
        </h3>

        <p className="text-green-700 font-bold mt-2">
          Rp {plant.price.toLocaleString("id-ID")}
        </p>

        <div className="flex gap-2 mt-4">

          <Link
            href={`/produk/${plant.id}`}
            className="flex-1 text-center border border-green-600 text-green-600 py-2 rounded hover:bg-green-50"
          >
            Detail
          </Link>

          <a
            href={whatsappURL}
            target="_blank"
            className="flex-1 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Beli
          </a>

        </div>

      </div>

    </div>
  );
}
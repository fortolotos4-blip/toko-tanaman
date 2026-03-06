export default function WhatsappButton() {

  const phone = "6285856575143";

  const message = "Halo, saya tertarik dengan tanaman di Kebun Rahayu";

  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      💬
    </a>
  );
}
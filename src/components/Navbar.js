export default function Navbar() {
  return (
    <nav className="w-full bg-[#7FC4A6] text-white p-4 flex justify-between">

      <div className="flex gap-6 justify-center flex-1">
        <a href="/">Home</a>
        <a href="/produk">Produk</a>
        <a href="/tentang">Tentang</a>
        <a href="/kontak">Kontak</a>
      </div>
    </nav>
  );
}
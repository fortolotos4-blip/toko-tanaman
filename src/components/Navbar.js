export default function Navbar() {
  return (
    <nav className="w-full bg-[#7FC4A6] text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">🌿 Tanaman Hias Rahayu</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/produk">Produk</a>
        <a href="/tentang">Tentang</a>
        <a href="/kontak">Kontak</a>
      </div>
    </nav>
  );
}
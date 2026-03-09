export default function Footer() {
  return (
    <footer className="bg-[#5DAA8A] text-white text-center py-8 mt-20">

      <h3 className="text-lg font-semibold">
        Tanaman Hias Rahayu 
      </h3>

          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-yellow-300 text-lg">★★★★★</span>
            <span className="text-sm">4.9 / 5 dari Google Reviews</span>
          </div>

          <a
            href="https://www.google.com/maps/place/Toko+Tanaman+Hias+Rahayu/@-7.4089081,112.6661701,17z/data=!4m17!1m8!3m7!1s0x2dd7e3e58ca03d0d:0x15521868d9681a7b!2sToko+Tanaman+Hias+Rahayu!8m2!3d-7.4089134!4d112.668745!15sChN0YW5hbWFuIGhpYXMgcmFoYXl1kgENcGxhbnRfbnVyc2VyeeABAA!16s%2Fg%2F11nyc3y4k0!3m7!1s0x2dd7e3e58ca03d0d:0x15521868d9681a7b!8m2!3d-7.4089134!4d112.668745!9m1!1b1!16s%2Fg%2F11nyc3y4k0?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-sm underline mt-2 inline-block">
            Lihat ulasan di Google
          </a>
    </footer>
  );
}
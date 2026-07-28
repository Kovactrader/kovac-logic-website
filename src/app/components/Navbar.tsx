export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className="text-xl font-bold">
          Kovac <span className="text-blue-500">Logic</span>
        </div>


        <div className="hidden md:flex gap-8 text-gray-400">

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="#solutions"
            className="hover:text-white transition"
          >
            Solutions
          </a>

          <a
            href="#products"
            className="hover:text-white transition"
          >
            Products
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          Get Started
        </a>

      </div>

    </nav>
  );
}
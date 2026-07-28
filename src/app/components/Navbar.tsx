export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        <a
          href="#"
          className="text-2xl font-bold text-white"
        >
          Kovac<span className="text-blue-500"> Logic</span>
        </a>


        <div className="hidden md:flex items-center gap-8">

          <a
            href="#solutions"
            className="text-gray-400 hover:text-white transition"
          >
            Solutions
          </a>

          <a
            href="#why"
            className="text-gray-400 hover:text-white transition"
          >
            Why Us
          </a>

          <a
            href="#products"
            className="text-gray-400 hover:text-white transition"
          >
            Products
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Get Started
        </a>


      </div>

    </nav>
  );
}
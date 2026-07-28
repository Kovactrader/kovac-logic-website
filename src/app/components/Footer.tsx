export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-zinc-950 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">


          <div>

            <h3 className="text-2xl font-bold">
              Kovac <span className="text-blue-500">Logic</span>
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Algorithmic trading systems, Expert Advisors
              and custom solutions for MetaTrader platforms.
            </p>

          </div>



          <div>

            <h4 className="font-semibold mb-4">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-gray-500">

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#solutions" className="hover:text-white transition">
                Solutions
              </a>

              <a href="#products" className="hover:text-white transition">
                Products
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

          </div>



          <div>

            <h4 className="font-semibold mb-4">
              Platforms
            </h4>

            <div className="text-gray-500 flex flex-col gap-3">

              <span>
                MetaTrader 4
              </span>

              <span>
                Expert Advisors
              </span>

              <span>
                Custom Indicators
              </span>

            </div>

          </div>


        </div>



        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-600 text-sm">

          © {new Date().getFullYear()} Kovac Logic. All rights reserved.

        </div>


      </div>

    </footer>
  );
}
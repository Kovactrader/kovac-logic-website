export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black"
    >

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>


      <div className="relative max-w-6xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left side */}
          <div>

            <div className="inline-flex px-4 py-2 rounded-full border border-zinc-800 text-gray-400 text-sm mb-8">
              Algorithmic Trading Technology
            </div>


            <h1 className="text-5xl md:text-7xl font-bold leading-tight">

              Automated Trading
              <br />

              <span className="text-blue-500">
                Built With Precision
              </span>

            </h1>


            <p className="text-gray-400 text-lg md:text-xl leading-8 mt-8 max-w-xl">

              Kovac Logic develops advanced Expert Advisors,
              custom indicators and algorithmic trading systems
              designed for MetaTrader platforms.

            </p>


            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <a
                href="#products"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-center"
              >
                Explore Products
              </a>


              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-blue-500 transition font-semibold text-center"
              >
                Contact Us
              </a>

            </div>


            <div className="flex flex-wrap gap-4 mt-12">

              <div className="px-5 py-2 rounded-full border border-zinc-800 text-gray-300 text-sm">
                MetaTrader 4
              </div>

              <div className="px-5 py-2 rounded-full border border-zinc-800 text-gray-300 text-sm">
                Expert Advisors
              </div>

              <div className="px-5 py-2 rounded-full border border-zinc-800 text-gray-300 text-sm">
                AI Systems
              </div>

            </div>

          </div>



          {/* Right side trading card */}
          <div className="hidden lg:block">

            <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950 shadow-2xl">

              <div className="flex justify-between items-center mb-8">

                <div>
                  <p className="text-gray-500 text-sm">
                    Market
                  </p>

                  <h3 className="text-xl font-semibold">
                    EUR/USD
                  </h3>
                </div>


                <div className="text-blue-500 font-bold">
                  +2.84%
                </div>

              </div>


              <div className="h-48 flex items-end gap-3">

                <div className="w-5 h-20 bg-blue-500/40 rounded"></div>
                <div className="w-5 h-32 bg-blue-500/60 rounded"></div>
                <div className="w-5 h-24 bg-blue-500/40 rounded"></div>
                <div className="w-5 h-40 bg-blue-500 rounded"></div>
                <div className="w-5 h-28 bg-blue-500/60 rounded"></div>
                <div className="w-5 h-44 bg-blue-500 rounded"></div>
                <div className="w-5 h-36 bg-blue-500/70 rounded"></div>

              </div>


              <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-3 gap-4 text-center">

                <div>
                  <p className="text-gray-500 text-xs">
                    Trades
                  </p>
                  <p className="font-bold">
                    248
                  </p>
                </div>


                <div>
                  <p className="text-gray-500 text-xs">
                    Systems
                  </p>
                  <p className="font-bold">
                    12
                  </p>
                </div>


                <div>
                  <p className="text-gray-500 text-xs">
                    Platform
                  </p>
                  <p className="font-bold">
                    MT4
                  </p>
                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}
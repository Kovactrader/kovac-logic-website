export default function Products() {
  return (
    <section
      id="products"
      className="px-6 py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto">


        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trading Products
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Professional algorithmic trading tools built for
            MetaTrader platforms and systematic traders.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8 mt-16">


          {/* Expert Advisors */}

          <div className="group border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
              <span className="text-blue-500 text-xl">
                EA
              </span>
            </div>


            <h3 className="text-2xl font-semibold mb-4">
              Expert Advisors
            </h3>


            <p className="text-gray-400 leading-7 mb-6">
              Automated trading systems designed to execute
              strategies with precision, speed and consistency.
            </p>


            <div className="flex gap-2 mb-6">

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                MT4
              </span>

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                Automation
              </span>

            </div>


            <button className="w-full py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition">
              View Details
            </button>

          </div>




          {/* Indicators */}

          <div className="group border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
              <span className="text-blue-500 text-xl">
                FX
              </span>
            </div>


            <h3 className="text-2xl font-semibold mb-4">
              Custom Indicators
            </h3>


            <p className="text-gray-400 leading-7 mb-6">
              Advanced market analysis tools helping traders
              identify opportunities and improve decisions.
            </p>


            <div className="flex gap-2 mb-6">

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                Signals
              </span>

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                Analysis
              </span>

            </div>


            <button className="w-full py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition">
              View Details
            </button>

          </div>




          {/* Custom Systems */}

          <div className="group border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
              <span className="text-blue-500 text-xl">
                DEV
              </span>
            </div>


            <h3 className="text-2xl font-semibold mb-4">
              Custom Development
            </h3>


            <p className="text-gray-400 leading-7 mb-6">
              Individual algorithmic solutions created around
              specific trading ideas and requirements.
            </p>


            <div className="flex gap-2 mb-6">

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                MQL4
              </span>

              <span className="px-3 py-1 text-xs rounded-full border border-zinc-700 text-gray-400">
                Custom
              </span>

            </div>


            <button className="w-full py-3 rounded-xl border border-zinc-700 hover:border-blue-500 transition">
              View Details
            </button>

          </div>


        </div>


      </div>
    </section>
  );
}
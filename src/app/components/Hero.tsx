export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">

        <div className="max-w-4xl">

          <div className="inline-flex px-4 py-2 rounded-full border border-zinc-800 text-sm text-gray-400 mb-8">
            Algorithmic Trading Systems
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Building
            <span className="text-blue-500"> intelligent </span>
            trading solutions
          </h1>

          <p className="text-xl text-gray-400 leading-8 max-w-2xl mb-10">
            Kovac Logic develops professional Expert Advisors,
            custom indicators and automated trading systems
            designed for precision, automation and data-driven decisions.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#solutions"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Explore Solutions
            </a>

            <a
              href="#products"
              className="px-8 py-4 rounded-xl border border-zinc-700 text-white font-semibold hover:border-blue-500 transition"
            >
              View Products
            </a>

          </div>

        </div>


        <div className="mt-20 grid md:grid-cols-3 gap-6">

          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-2">
              Expert Advisors
            </h3>
            <p className="text-gray-400 text-sm">
              Automated trading systems for MetaTrader platforms.
            </p>
          </div>


          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-2">
              Custom Indicators
            </h3>
            <p className="text-gray-400 text-sm">
              Advanced tools built around market behaviour.
            </p>
          </div>


          <div className="border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-2">
              Data Driven
            </h3>
            <p className="text-gray-400 text-sm">
              Research, testing and continuous optimisation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
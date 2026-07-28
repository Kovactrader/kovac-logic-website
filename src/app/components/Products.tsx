export default function Products() {
  return (
    <section
      id="products"
      className="px-6 py-24 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-white mb-6">
            Products
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Professional trading tools designed for traders
            who value automation, precision and efficiency.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold text-white mb-4">
              Expert Advisors
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Automated trading systems for MetaTrader platforms.
              Built around tested strategies and disciplined execution.
            </p>

            <button className="text-blue-500 font-semibold hover:text-blue-400 transition">
              Learn More →
            </button>

          </div>



          <div className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold text-white mb-4">
              Custom Indicators
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Advanced market analysis tools and custom indicators
              created for specific trading approaches.
            </p>

            <button className="text-blue-500 font-semibold hover:text-blue-400 transition">
              Learn More →
            </button>

          </div>



          <div className="border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <h3 className="text-2xl font-semibold text-white mb-4">
              Trading Tools
            </h3>

            <p className="text-gray-400 leading-7 mb-6">
              Additional utilities and solutions designed to improve
              workflow, analysis and trading performance.
            </p>

            <button className="text-blue-500 font-semibold hover:text-blue-400 transition">
              Learn More →
            </button>

          </div>


        </div>

      </div>
    </section>
  );
}
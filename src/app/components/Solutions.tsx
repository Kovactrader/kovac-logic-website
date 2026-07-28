export default function Solutions() {
  return (
    <section
      id="solutions"
      className="px-6 py-24 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl font-bold text-white mb-6">
            Our Solutions
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Kovac Logic creates automated trading solutions
            designed for precision, reliability and systematic execution.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">


          <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              ⚙
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Expert Advisors
            </h3>

            <p className="text-gray-400 leading-7">
              Automated trading systems built for MetaTrader platforms.
              Strategies are transformed into reliable algorithmic solutions.
            </p>

          </div>



          <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              ◉
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Custom Indicators
            </h3>

            <p className="text-gray-400 leading-7">
              Advanced indicators designed to identify market behaviour,
              patterns and trading opportunities.
            </p>

          </div>



          <div className="group border border-zinc-800 rounded-2xl p-8 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              ◇
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Trading Automation
            </h3>

            <p className="text-gray-400 leading-7">
              From concept and testing to optimisation and deployment,
              building complete automated workflows.
            </p>

          </div>


        </div>

      </div>
    </section>
  );
}
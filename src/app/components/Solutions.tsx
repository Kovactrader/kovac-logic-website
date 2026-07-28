export default function Solutions() {
  return (
    <section
      id="solutions"
      className="px-6 py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto">


        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Solutions
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            From strategy development to automated execution,
            Kovac Logic builds complete algorithmic trading solutions.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8 mt-16">


          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              01
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Strategy Development
            </h3>

            <p className="text-gray-400 leading-7">
              Research-driven trading concepts transformed into
              structured algorithmic strategies with clear rules.
            </p>

          </div>



          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              02
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Expert Advisors
            </h3>

            <p className="text-gray-400 leading-7">
              Automated MetaTrader systems designed for precise
              execution, risk control and consistent operation.
            </p>

          </div>



          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950 hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              03
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Custom Solutions
            </h3>

            <p className="text-gray-400 leading-7">
              Individual indicators and trading tools created
              around specific requirements and ideas.
            </p>

          </div>


        </div>


      </div>
    </section>
  );
}
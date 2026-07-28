export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          <div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Kovac Logic
            </h2>


            <p className="text-gray-400 text-lg leading-8 mb-6">
              Kovac Logic specializes in developing algorithmic
              trading systems, Expert Advisors and custom indicators
              for MetaTrader platforms.
            </p>


            <p className="text-gray-400 text-lg leading-8">
              Our approach combines strategy research, systematic
              testing and automation to create reliable trading
              solutions built around clear rules and precise execution.
            </p>


          </div>



          <div className="grid grid-cols-2 gap-6">


            <div className="border border-zinc-800 rounded-2xl p-6 bg-black">

              <h3 className="text-3xl font-bold text-blue-500">
                10+
              </h3>

              <p className="text-gray-400 mt-2">
                Trading Systems
              </p>

            </div>



            <div className="border border-zinc-800 rounded-2xl p-6 bg-black">

              <h3 className="text-3xl font-bold text-blue-500">
                MT4
              </h3>

              <p className="text-gray-400 mt-2">
                Platform Focus
              </p>

            </div>



            <div className="border border-zinc-800 rounded-2xl p-6 bg-black">

              <h3 className="text-3xl font-bold text-blue-500">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Automated Execution
              </p>

            </div>



            <div className="border border-zinc-800 rounded-2xl p-6 bg-black">

              <h3 className="text-3xl font-bold text-blue-500">
                Data
              </h3>

              <p className="text-gray-400 mt-2">
                Driven Development
              </p>

            </div>


          </div>


        </div>


      </div>
    </section>
  );
}
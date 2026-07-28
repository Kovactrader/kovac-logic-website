export default function Why() {
  return (
    <section
      id="why"
      className="px-6 py-24 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">


        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Kovac Logic
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            Combining technology, research and automation to
            create intelligent trading solutions.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8 mt-16">


          <div className="border border-zinc-800 rounded-3xl p-8 bg-black hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              01
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Precision
            </h3>

            <p className="text-gray-400 leading-7">
              Every system is built with structured logic,
              defined rules and measurable objectives.
            </p>

          </div>



          <div className="border border-zinc-800 rounded-3xl p-8 bg-black hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              02
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Automation
            </h3>

            <p className="text-gray-400 leading-7">
              Automated execution removes emotional decisions
              and follows a consistent trading process.
            </p>

          </div>



          <div className="border border-zinc-800 rounded-3xl p-8 bg-black hover:border-blue-500 transition">

            <div className="text-blue-500 text-3xl mb-6">
              03
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Continuous Development
            </h3>

            <p className="text-gray-400 leading-7">
              Strategies and systems are continuously improved
              through testing and optimization.
            </p>

          </div>


        </div>


      </div>
    </section>
  );
}
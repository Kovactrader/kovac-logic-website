export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-black"
    >
      <div className="max-w-5xl mx-auto">

        <div className="border border-zinc-800 rounded-3xl p-10 md:p-16 bg-zinc-950 text-center">


          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Next Trading System
          </h2>


          <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">
            Whether you need a custom Expert Advisor, advanced
            indicator or complete algorithmic trading solution,
            Kovac Logic can help transform your idea into a working system.
          </p>


          <div className="flex flex-col sm:flex-row justify-center gap-5">


            <a
              href="mailto:contact@kovac-logic.com"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              Contact Us
            </a>


            <a
              href="#products"
              className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-blue-500 transition font-semibold"
            >
              Explore Products
            </a>


          </div>


        </div>

      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            Contact
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Interested in algorithmic trading solutions,
            custom indicators or automation?
            Get in touch with Kovac Logic.
          </p>


          <a
            href="mailto:contact@kovac-logic.com"
            className="inline-flex px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>

        </div>


      </div>
    </section>
  );
}
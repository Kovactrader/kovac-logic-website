export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h3 className="text-white text-xl font-bold">
            Kovac Logic
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Algorithmic trading solutions.
          </p>
        </div>


        <div className="text-gray-500 text-sm text-center md:text-right">

          <p>
            © {new Date().getFullYear()} Kovac Logic.
            All rights reserved.
          </p>

          <p className="mt-2">
            Built with precision and automation.
          </p>

        </div>


      </div>
    </footer>
  );
}
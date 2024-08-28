import { usage } from "@/data";

function Faq() {
  return (
    <div className="mx-auto max-w-7xl  px-2 py-10 md:px-0 ">
      <div className="mx-auto max-w-2xl lg:text-center font-serif text-white ">
        <h2 className="text-xl font-bold leading-10 sm:text-4xl lg:text-3xl bg-gradient-to-tl from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed lg:mx-auto">
          How do I get started ?
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        {usage.map((use, i) => (
          <div
            key={i}
            className="border border-amber-600/30 px-4 py-2 text-white hover:text-black rounded-lg shadow-md shadow-amber-400 group hover:bg-orange-800 transition duration-150 cursor-pointer"
          >
            <h2 className="text-xl font-semibold bg-gradient-to-tl from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
              {use.steps}
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide">{use.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

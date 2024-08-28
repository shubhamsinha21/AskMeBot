import { features } from "@/data";

function Features() {
  return (
    <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex items-start text-white border-yellow-500/20 border h-32 md:h-40 lg:h-52 xl:h-60 py-2.5 px-2.5 shadow-md shadow-yellow-600 hover:animate-indeterminate-bar"
        >
          <div className="ml-5">
            <h3 className="text-xl font-semibold bg-gradient-to-tl from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="mt-3 text-base">{feature.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;

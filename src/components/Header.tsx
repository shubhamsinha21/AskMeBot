function Header() {
  return (
    <div className="flex flex-col items-start ml-4">
      <h1 className="text-xl md:text-3xl lg:text-5xl tracking-wide font-bold text-white">
        <span className="bg-gradient-to-tl from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Web
        </span>
        -
        <span className="bg-gradient-to-tl from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
          e
        </span>
        -
        <span className="bg-gradient-to-tl from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
          Bot
        </span>
      </h1>
      <p className="text-sm md:text-md lg:text-lg tracking-wide font-normal pl-4 bg-gradient-to-tr from-yellow-700 to-yellow-50 bg-clip-text text-transparent">
        (Website Specific ChatBot)
      </p>
    </div>
  );
}

export default Header;

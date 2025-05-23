const Header = () => {
  return (
    <header className="w-full">
      <h1 className="text-2xl lg:text-4xl font-light p-4 m-0 max-w-2xl mx-auto">
        vive-team
        <span className="text-lg text-right block">sports App</span>
      </h1>
      <div className="flex flex-col gap-2 text-center">
        <p className="italic text-center">be ready to play with your friends</p>
        <p className="text-xs">
          🗺️ Playing Globally 📍 Based in Earth, made in Argentina.
        </p>
      </div>
    </header>
  );
};

export default Header;

const MainScreen = ({ togglePage }) => {
  return (
    <div
      style={{ backgroundImage: "url('/images/backgroundmain.png')" }}
      className="flex justify-center items-center  h-screen w-screen  bg-cover"
    >
      <div className="flex flex-col items-center ">
        <h1 className="text-6xl font-bold text-center text-green-500">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            Snake Undeground
          </span>
        </h1>
        <button
          onClick={togglePage}
          className="w-56 h-20 px-4 py-2 mt-20 rounded-full text-5xl font-bold text-white bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300  focus:outline-none active:scale-95 active:shadow"
        >
          PLAY
        </button>
      </div>
    </div>
  );
};

export default MainScreen;

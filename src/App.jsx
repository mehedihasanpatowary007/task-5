export default function App() {
  return (
    <>
      <div className="h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
        <div className="h-4/5	w-1/3 bg-white rounded p-10">
          <div className="h-full flex flex-col justify-around">
            <h1 className="text-5xl text-center font-bold text-black bg-slate-400 p-10">
              Log In
            </h1>
            <form className="flex flex-col gap-10 justify-center items-start">
              <input
                className="bg-slate-300 outline-none ps-5 py-3 w-full"
                type="text"
                placeholder="Type your name"
              ></input>
              <input
                className="bg-slate-300 outline-none ps-5 py-3 w-full"
                type="password"
                placeholder="Type your password"
              ></input>
              <input
                className="bg-[#0088ff] px-3 py-2 text text-2xl uppercase font-semibold rounded-sm cursor-pointer opacity-100 hover:opacity-85"
                type="submit"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

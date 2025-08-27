import "./App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <nav className="flex justify-between items-center px-16 w-full h-16 shadow-md">
        {/* <span className="border border-black w-full">Haloo</span> */}
        <img src={logo} alt="logo" className="w-28" />
        <div className="block lg:hidden">
          <button class="relative group">
            <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex flex-row justify-end space-x-16 font-medium text-sm ">
          <a href="/">Produk Kami</a>
          <a href="/">Tentang Kami</a>
          <a href="/">E-Commers</a>
        </div>
      </nav>
    </div>
  );
}

export default App;

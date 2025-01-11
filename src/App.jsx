import "./App.css";
import { Introduction } from "./components/Introduction";
import { Members } from "./components/Members";
import { Navbar } from "./components/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[50px]">
        <Navbar />
      </div>
      {/* Introduction */}
      <div className="bg-black w-full h-[100%] relative text-white font-customFont">
        <Introduction />
        <div className="absolute top-[85%] inline-flex text-[20px] h-[40px] w-[100%] justify-center items-center">
          <div className=" w-[530px] pt-[6px]"><span>Welcome to your only stop for all the software needs!</span></div>
          <div className="text-white text-[30px] w-[50px] pl-[10px]"><i className="bi bi-arrow-down-short"></i></div>
        </div>
      </div>
      {/* Members Section */}
      <div className="bg-green-300 w-full h-full relative">
      <div className="px-[100px] absolute">
          <Members />
        </div>
      </div>
    </>
  );
}

export default App;

import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return ( 
    <div id="Experience" className="bg-[#0A0C0D] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App;

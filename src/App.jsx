import Navbar from "./componuntes/Navbar";
import Hero from "./componuntes/Hero";
import Highlights from "./componuntes/Highlights";

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar /> 
        <Hero /> 
        <Highlights />
      </main>
    </>
  );
};

export default App;

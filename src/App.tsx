import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col justify-center w-full max-w-[1500px] mx-auto">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;

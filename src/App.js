import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Footer from "./Footer/Footer";

// Css
import "./App.css"

function App() {
  return (
    <div className="app font-monospace">
      <Header />
      <div className="home">
        <Home />
      </div>
      <About />
      <Footer />
    </div>
  )
}

export default App;

// import pen from "./../pen.png"
import Header from "../src/components/Header"
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
function App() {
  return (
    <div className="App">
      <Header />
      <Gallary/>
      <ContactUs/>
      <Footer/>      
    </div>
  );
};

export default App;

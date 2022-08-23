// import pen from "./../pen.png"
import Header from "../src/components/Header";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GallaryNavigator from "./components/GallaryNavigator";
import CustomScoller from "./components/CustomScoller";
import Testimonial from "./components/Testimonial";
import HeroTop from "./components/HeroTop";
import HeroMid from "./components/HeroMid";
import HeroMidTwo from "./components/HeroMidTwo";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.jpg";
import ReactPlayer from "react-player/youtube";

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src={a} onDragStart={handleDragStart} role="presentation" />,
  <img src={b} onDragStart={handleDragStart} role="presentation" />,
  <img src={c} onDragStart={handleDragStart} role="presentation" />,
];
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <GallaryNavigator /> */}
                <HeroTop />
                {/* <CustomScoller /> */}
                {/* <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  autoPlay={true}
                  autoHeight={true}
                  autoWidth={true}
                  style={{ backgroundColor: "lime" }}
                  disableDotsControls
                  disableButtonsControls
                /> */}
                <div style={{ width: "100%", height: 400 }}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=pAMk4eSyZSU"
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    controls={false}
                  />
                </div>
                <HeroMid />
                <HeroMidTwo />
                <Testimonial></Testimonial>
                <GallaryNavigator />
              </>
            }
          ></Route>
          <Route path="/gallary" element={<Gallary />}></Route>

          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
        </Routes>
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
// import EventPage from "./pages/EventPage/EventPage";
// import Events from "../src/components/Events/Events";

import { Route, Routes } from "react-router-dom";
import { EventPage } from "./pages/EventPage/EventPage";
import Events from "./components/Events/Events";
import Speaker from "./components/Speaker/Speaker";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App({Components,pageProps}) {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventPage" element={<EventPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/speakers" element={<Speaker/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      {/* <Components {...pageProps} /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;

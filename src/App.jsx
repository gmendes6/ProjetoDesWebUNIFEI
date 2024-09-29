import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect } from "react";

import { AppRoutes } from "./routes";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <AppRoutes/>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Basics from "./Topics/Basics";

import Navbar from "./Components/Navbar"
import About from "./Pages/About ";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

// import Hooks from "./Topics/HooksUseState";
// import HooksUseStateWithInputFld from "./Topics/HooksUseStateWithInputFld";
// import HooksUseEffect from "./Topics/HooksUseEffect";
// import Crud from "./Topics/Crud";
// import Test from "./Topics/Test";

function App() {
  return (
    <>
      {/* <Basics /> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      {/* <HooksUseStateWithInputFld /> */}
      {/* <HooksUseEffect /> */}

      {/* <Crud /> */}
      {/* <Test /> */}

    </>
  );
}

export default App;

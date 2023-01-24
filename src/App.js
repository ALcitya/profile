import "./App.css";
// import { Component } from "react";
// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Drive from "./components/Drive";
import Card from "./components/Card";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Card /> },
    { path: "/drive", element: <Drive /> },
  ]);
  return (
    <>
      {/* <h2 className="text-[96px] text-black">Hello World</h2> */}
      <Navbar />
      <RouterProvider router={router} />
    </>
    // <>
    //   <Navbar />
    //   <Card></Card>
    //   <Routes>
    //     <Route exact path="/profile" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact Card={Card} />} />
    //     <Route path="/drive" element={<Drive />} />
    //   </Routes>
    // </>
  );
}

export default App;

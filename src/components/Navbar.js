import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="flex flex-row items-center justify-center p-3">
        <ul className="flex flex-row justify-end [&>*]:text-xl [&>*]:text-center w-full [&>*]:mx-2">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/drive">Drive</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

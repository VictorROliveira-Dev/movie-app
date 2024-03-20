import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";

import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <FaVideo />
          Movies
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure por um filme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;

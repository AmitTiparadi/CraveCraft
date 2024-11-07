import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  // List of available search terms
  const options = ["North", "Continental", "South", "About", "Login"];

  // Handle search input changes
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter suggestions based on the input
    if (value) {
      const filteredSuggestions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle form submission
  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/${query.trim().toLowerCase()}`);
      setSuggestions([]); // Clear suggestions after search
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Set query to the selected suggestion
    navigate(`/${suggestion.toLowerCase()}`);
    setSuggestions([]); // Clear suggestions after selection
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path ? "btn-outline-success text-success" : "text-white";

  return (
    <nav className="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Sharipe</Link>
        <div className="d-flex align-items-center">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item">
              <Link className={`nav-link mx-2 ${isActive('/')}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link mx-2 ${isActive('/about')}`} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link mx-2 ${isActive('/login')}`} to="/login">Login</Link>
            </li>
          </ul>
          <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>

            {/* Display suggestions */}
            {suggestions.length > 0 && (
              <ul className="list-group position-absolute" style={{ top: '100%', zIndex: 1000, width: '100%' }}>
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ cursor: 'pointer' }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

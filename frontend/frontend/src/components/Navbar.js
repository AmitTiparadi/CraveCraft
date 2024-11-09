// // import React, { useState } from 'react';
// // import { Link, useNavigate, useLocation } from 'react-router-dom';

// // function NavBar() {
// //   const [query, setQuery] = useState('');
// //   const [suggestions, setSuggestions] = useState([]);
// //   const navigate = useNavigate();
// //   const location = useLocation(); // Get the current path

// //   // List of available search terms
// //   const options = ["North", "Continental", "South", "About", "Login"];

// //   // Handle search input changes
// //   const handleInputChange = (event) => {
// //     const value = event.target.value;
// //     setQuery(value);

// //     // Filter suggestions based on the input
// //     if (value) {
// //       const filteredSuggestions = options.filter(option =>
// //         option.toLowerCase().includes(value.toLowerCase())
// //       );
// //       setSuggestions(filteredSuggestions);
// //     } else {
// //       setSuggestions([]);
// //     }
// //   };

// //   // Handle form submission
// //   const handleSearch = (event) => {
// //     event.preventDefault();
// //     if (query.trim()) {
// //       navigate(`/${query.trim().toLowerCase()}`);
// //       setSuggestions([]); // Clear suggestions after search
// //     }
// //   };

// //   // Handle suggestion click
// //   const handleSuggestionClick = (suggestion) => {
// //     setQuery(suggestion); // Set query to the selected suggestion
// //     navigate(`/${suggestion.toLowerCase()}`);
// //     setSuggestions([]); // Clear suggestions after selection
// //   };

// //   // Function to determine if a link is active
// //   const isActive = (path) => location.pathname === path ? "btn-outline-success text-success" : "text-white";

// //   return (
// //     <nav className="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
// //       <div className="container-fluid">
// //         <Link className="navbar-brand" to="/">Sharipe</Link>
// //         <div className="d-flex align-items-center">
// //           <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
// //             <li className="nav-item">
// //               <Link className={`nav-link mx-2 ${isActive('/')}`} aria-current="page" to="/">Home</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className={`nav-link mx-2 ${isActive('/about')}`} to="/about">About Us</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link className={`nav-link mx-2 ${isActive('/login')}`} to="/login">Login</Link>
// //             </li>
// //           </ul>
// //           <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
// //             <input
// //               className="form-control me-2"
// //               type="search"
// //               placeholder="Search"
// //               aria-label="Search"
// //               value={query}
// //               onChange={handleInputChange}
// //             />
// //             <button className="btn btn-outline-success" type="submit">Search</button>

// //             {/* Display suggestions */}
// //             {suggestions.length > 0 && (
// //               <ul className="list-group position-absolute" style={{ top: '100%', zIndex: 1000, width: '100%' }}>
// //                 {suggestions.map((suggestion, index) => (
// //                   <li
// //                     key={index}
// //                     className="list-group-item list-group-item-action"
// //                     onClick={() => handleSuggestionClick(suggestion)}
// //                     style={{ cursor: 'pointer' }}
// //                   >
// //                     {suggestion}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </form>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default NavBar;


// import React, { useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';

// function NavBar() {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
//   const navigate = useNavigate();
//   const location = useLocation();

//   const options = ["North", "Continental", "South", "About", "Login"];

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setQuery(value);

//     if (value) {
//       const filteredSuggestions = options.filter(option =>
//         option.toLowerCase().includes(value.toLowerCase())
//       );
//       setSuggestions(filteredSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (query.trim()) {
//       navigate(`/${query.trim().toLowerCase()}`);
//       setSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setQuery(suggestion);
//     navigate(`/${suggestion.toLowerCase()}`);
//     setSuggestions([]);
//   };

//   const isActive = (path) => location.pathname === path ? "btn-outline-success text-success" : "text-white";

//   const handleLogout = () => {
//     setIsLoggedIn(false); // Update state to log out
//     // Additional logout logic (e.g., clearing tokens, session storage) can go here
//     navigate('/');
//   };

//   const handleLogin = () => {
//     // Example function to simulate login - in real usage, this would check credentials
//     setIsLoggedIn(true);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Sharipe</Link>
//         <div className="d-flex align-items-center">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
//             <li className="nav-item">
//               <Link className={`nav-link mx-2 ${isActive('/')}`} aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link mx-2 ${isActive('/about')}`} to="/about">About Us</Link>
//             </li>
//             <li className="nav-item">
//               {isLoggedIn ? (
//                 <div className="nav-item dropdown">
//                   <button
//                     className="btn btn-outline-success rounded-circle"
//                     id="profileDropdown"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <img
//                       src="default-profile.jpg" // Use a default profile image here
//                       alt="Profile"
//                       className="rounded-circle"
//                       style={{ width: "30px", height: "30px" }}
//                     />
//                   </button>
//                   <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
//                     <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
//                     <li><button className="dropdown-item">Delete Account</button></li>
//                   </ul>
//                 </div>
//               ) : (
//                 <Link className={`nav-link mx-2 ${isActive('/login')}`} to="/login" onClick={handleLogin}>Login</Link>
//               )}
//             </li>
//           </ul>
//           <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={query}
//               onChange={handleInputChange}
//             />
//             <button className="btn btn-outline-success" type="submit">Search</button>

//             {suggestions.length > 0 && (
//               <ul className="list-group position-absolute" style={{ top: '100%', zIndex: 1000, width: '100%' }}>
//                 {suggestions.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="list-group-item list-group-item-action"
//                     onClick={() => handleSuggestionClick(suggestion)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './nav.css';
import defaultimage from '../images/default-image.jpg';

function NavBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();
  const location = useLocation();

  const options = ["North", "Continental", "South", "About", "Login"];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/${query.trim().toLowerCase()}`);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    navigate(`/${suggestion.toLowerCase()}`);
    setSuggestions([]);
  };

  const isActive = (path) => location.pathname === path ? "btn-outline-success text-success" : "text-white";

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleDelete = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/delete', {
        method: 'DELETE',
        credentials: 'include',// Include cookies if you use them for session
        headers: {
          'Content-Type': 'application/json',
        }, 
      });
  
      if (response.ok) {
        // Successfully deleted the account
        setIsLoggedIn(false);  // Update state to logged out
        navigate('/');         // Redirect to home or login page
      } else {
        // Handle error (display a message or alert)
        console.log(response);
        alert('Failed to delete account. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('An error occurred while deleting your account.');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

//   return (
//     <nav className="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">Sharipe</Link>
//         <div className="d-flex align-items-center">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
//             <li className="nav-item">
//               <Link className={`nav-link mx-2 ${isActive('/')}`} aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link mx-2 ${isActive('/about')}`} to="/about">About Us</Link>
//             </li>
//             <li className="nav-item">
//               {isLoggedIn ? (
//                 <div className="profile-dropdown-container">
//                   <button
//                     className="profile-button"
//                     id="profileDropdown"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <img
//                       src="default-profile.jpg" // Replace with actual profile image URL
//                       alt="Profile"
//                       className="profile-image"
//                     />
//                   </button>
//                   <div className="profile-dropdown">
//                     <button
//                       className="profile-dropdown-item"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </button>
//                     <button
//                       className="profile-dropdown-item"
//                       onClick={() => alert('Delete Account Clicked')}
//                     >
//                       Delete Account
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <Link className={`nav-link mx-2 ${isActive('/login')}`} to="/login" onClick={handleLogin}>Login</Link>
//               )}
//             </li>
//           </ul>
//           <form className="d-flex position-relative" role="search" onSubmit={handleSearch}>
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               value={query}
//               onChange={handleInputChange}
//             />
//             <button className="btn btn-outline-success" type="submit">Search</button>

//             {suggestions.length > 0 && (
//               <ul className="list-group position-absolute" style={{ top: '100%', zIndex: 1000, width: '100%' }}>
//                 {suggestions.map((suggestion, index) => (
//                   <li
//                     key={index}
//                     className="list-group-item list-group-item-action"
//                     onClick={() => handleSuggestionClick(suggestion)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {suggestion}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

return (
  <nav className="navbar navbar-expand-lg bg-black border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">CraveCraft</Link>
      <div className="d-flex align-items-center">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item">
            <Link className={`nav-link mx-2 ${isActive('/')}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link mx-2 ${isActive('/about')}`} to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <div className="dropdown">
                <button
                  className="btn profile-button dropdown-toggle"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={defaultimage} // Replace with actual profile image URL
                    alt="Profile"
                    className="profile-image"
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleDelete}
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link className={`nav-link mx-2 ${isActive('/login')}`} to="/login" onClick={handleLogin}>Login</Link>
            )}
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

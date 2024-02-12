import React, { useState } from "react";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/components/Browse.module.css";

import BrowseMenu from "./BrowseMenu";

const Browse = () => {
  const [viewMenu, setViewMenu] = useState(false);

  // const [selectedValue, setSelectedValue] = useState(null);

  // const handleMouseLeave = () => {
  //   setViewMenu(false);
  // };

  // const toggleDropDown = () => {
  //   setViewMenu(!viewMenu);
  // };

  // const handleOptionSelect = (value) => {
  //   setSelectedValue(value);

  //   setViewMenu(false);
  // };

  return (
    <div className={styles.browse}>
      <p onMouseEnter={()=>setViewMenu(true)} onMouseLeave={()=>setViewMenu(false)} >
        Browse <FontAwesomeIcon icon={faCaretDown} />
      </p>

      {viewMenu && <BrowseMenu setViewMenu={setViewMenu}/>}

      {/* {selectedValue && <p>Selected Value: {selectedValue}</p>} */}
    </div>
  );
};

export default Browse;

// import React, { useState } from "react";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [selectedValue, setSelectedValue] = useState(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (value) => {
//     setSelectedValue(value);

//     setIsOpen(false);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown" onMouseLeave={handleMouseLeave}>
//       <div className="dropdown-trigger" onMouseEnter={toggleDropdown}>
//         Hover me
//       </div>

//       {isOpen && (
//         <div className="dropdown-menu">
//           <div className="dropdown-content">
//             <div
//               className="dropdown-item"
//               onClick={() => handleOptionClick("Option 1")}
//             >
//               Option 1
//             </div>

//             <div
//               className="dropdown-item"
//               onClick={() => handleOptionClick("Option 2")}
//             >
//               Option 2
//             </div>

//             <div
//               className="dropdown-item"
//               onClick={() => handleOptionClick("Option 3")}
//             >
//               Option 3
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedValue && <p>Selected Value: {selectedValue}</p>}
//     </div>
//   );
// };

// export default App;

import React from "react";

const CopyRights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <button>Service Code</button>
      <p> &copy; 1997-{currentYear} Netflix, Inc.</p>
    </div>
  );
};

export default CopyRights;

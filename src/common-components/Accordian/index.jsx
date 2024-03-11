import React, { useState } from 'react';
import './index.css'; // Import your custom CSS or define styles in the component

const CustAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {title}
      </button>
      <div className={`panel ${isActive ? 'show' : ''}`}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default CustAccordion;

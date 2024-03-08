import React, { useState, useEffect } from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const DropdownButton = ({textToDispay, type, onClickFunction}) => {
//  type primary = blue, secondary = grey
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Function to handle clicks outside of the button
    const handleClickOutside = () => setIsActive(false);

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click from being detected by the document listener
    setIsActive(!isActive);
  };

  return (

    <div className='dropdown-button-container'>
      <div className='dropdown-button-with-card'>
        <button className={isActive ? 'dropdown-button-active' : 'dropdown-button'} onClick={handleClick}>
          <div className='dropdown-button-text'>{textToDispay}</div>
          <ExpandMoreRoundedIcon className='dropdown-button-icon' fontSize='small'/>
        </button>
      </div>
      {isActive && <div className='dropdown-button-card'>
        <button className='dropdown-button-card-option'>Option 1</button>
        <button className='dropdown-button-card-option'>Option 2</button>
      </div>}
    </div>
    
  )
}

export default DropdownButton
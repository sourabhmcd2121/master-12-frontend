import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { FaTextHeight, FaAdjust, FaLanguage, FaSignInAlt } from 'react-icons/fa';
import '../assets1/css/Accessibility.css'

function AccessibilityBar() {
  const [, setTextSize] = useState('medium');
  const [contrast, setContrast] = useState(false);

  const handleTextSizeChange = (size) => {
    setTextSize(size);
    document.body.style.fontSize = size === 'large' ? '18px' : size === 'small' ? '14px' : '16px';
  };

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle('high-contrast', !contrast);
  };

  const handleLanguageChange = (lang) => {
    // Implement language change logic here
    alert(`Language changed to ${lang}`);
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-2 bg-light border-bottom">
      <div className="d-flex align-items-center">
        {/* Text Size */}
        <Dropdown className="me-2">
          <Dropdown.Toggle variant="secondary" id="dropdown-text-size">
            <FaTextHeight /> Text Size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleTextSizeChange('small')}>Small</Dropdown.Item>
            <Dropdown.Item onClick={() => handleTextSizeChange('medium')}>Medium</Dropdown.Item>
            <Dropdown.Item onClick={() => handleTextSizeChange('large')}>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Contrast Mode */}
        <Button variant="secondary" className="me-2" onClick={toggleContrast}>
          <FaAdjust /> {contrast ? 'Normal Contrast' : 'High Contrast'}
        </Button>

        {/* Language Selection */}
        <Dropdown className="me-2">
          <Dropdown.Toggle variant="secondary" id="dropdown-language">
            <FaLanguage /> Language
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('es')}>Spanish</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('fr')}>French</Dropdown.Item>
            {/* Add more languages as needed */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Login Button */}
      <Button variant="primary">
        <FaSignInAlt /> Login
      </Button>
    </div>
  );
}

export default AccessibilityBar;

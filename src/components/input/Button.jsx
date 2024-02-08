import React, { useState } from 'react';
import './ButtonGroup.css'; // Создайте файл ButtonGroup.css для стилей

const ButtonGroup = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleSelection = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  return (
    <div className="button-container">
      <button
        className={selectedButtons.includes(1) ? 'button selected' : 'button'}
        onClick={() => toggleSelection(1)}
      >
        Кнопка 1
      </button>
      <button
        className={selectedButtons.includes(2) ? 'button selected' : 'button'}
        onClick={() => toggleSelection(2)}
      >
        Кнопка 2
      </button>
      <button
        className={selectedButtons.includes(3) ? 'button selected' : 'button'}
        onClick={() => toggleSelection(3)}
      >
        Кнопка 3
      </button>
    </div>
  );
};

export default ButtonGroup;

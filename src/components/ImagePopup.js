import React from 'react';
import '../pages/index.css';

function ImagePopup(props) {

  React.useEffect(() => {
      
    const handleEsc = (evt) => {
      if (evt.key === "Escape") {
        props.onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      };
  });

  const handleClick = (evt) => {
    if (evt.target.classList.contains("popup") || 
          evt.target.classList.contains("popup__close-button")) {
        props.onClose();
    }
  };

  return (
    <div className={`popup popup_type_view ${props.card ? "popup_opened" : "popup_hidden" }`} onClick={handleClick}>
      <div className="popup__container popup__container_image">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <h3 className="popup__image-text">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
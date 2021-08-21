import React from 'react';
import '../pages/index.css';

function PopupWithForm(props) {

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
    <>
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : "popup_hidden" }`} onClick={handleClick}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <form className="form" name="{props.name}" noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
        </form>
      </div>
    </div>
    </>
  );
}

export default PopupWithForm;
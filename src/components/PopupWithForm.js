import React from 'react';

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
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : "popup_hidden" }`} onClick={handleClick}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <form className="form" name={props.name}>
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="form__save-button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

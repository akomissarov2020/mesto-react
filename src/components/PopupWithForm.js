import '../pages/index.css';

function PopupWithForm(props) {
  return (
    <>
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : "popup_hidden" }`}>
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

import '../pages/index.css';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_view ${props.card ? "popup_opened" : "popup_hidden" }`}>
      <div className="popup__container popup__container_image">
        <button type="button" className="popup__close-button" onClick={props.onClose}></button>
        <img src={props.card.link} alt={props.card.name} className="popup__image" />
        <h3 className="popup__image-text">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;

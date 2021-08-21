import defaultImagePath from '../images/default.png';
import '../pages/index.css';

function ImagePopup() {
  return (
    <div className="popup popup_type_view">
      <div className="popup__container popup__container_image">
        <button type="button" className="popup__close-button"></button>
        <img src={defaultImagePath} alt="Нет картинки" className="popup__image" />
        <h3 className="popup__image-text">Нет описания</h3>
      </div>
    </div>
  );
}

export default ImagePopup;

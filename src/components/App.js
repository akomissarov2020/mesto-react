import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import defaultImagePath from '../images/default.png';
import '../pages/index.css';


function App() {
  return (
  <>
    <Header />
    <Main />
    <Footer />

    <div className="popup popup_type_edit-profile">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <form className="form" name="edit-profile" novalidate>
          <h2 className="form__title">Редактировать профайл</h2>
          <input type="text" className="form__field" placeholder="Имя" name="edit-profile-name" required minlength="2" maxlength="40" />
          <span className="form__error-message edit-profile-name-error"></span>
          <input type="text" className="form__field" placeholder="О себе" name="edit-profile-title" required minlength="2" maxlength="200" />
          <span className="form__error-message edit-profile-title-error"></span>
          <button type="submit" className="form__save-button">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <form className="form" name="edit-avatar" novalidate>
          <h2 className="form__title">Обновить аватар</h2>
          <input type="url" className="form__field" placeholder="Ссылка на картинку" name="avatar-link" required />
          <span className="form__error-message avatar-link-error"></span>
          <button type="submit" className="form__save-button">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_add-place">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <form className="form" name="add-place" novalidate>
          <h2 className="form__title">Новое место</h2>
          <input type="text" className="form__field" placeholder="Название" name="add-place-name" required minlength="2" maxlength="30" />
          <span className="form__error-message add-place-name-error"></span>
          <input type="url" className="form__field" placeholder="Ссылка на картинку" name="add-place-link" required />
          <span className="form__error-message add-place-link-error"></span>
          <button type="submit" className="form__save-button">Создать</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_with-confirm">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <form className="form" name="confirm" novalidate>
          <h2 className="form__onlytitle">Вы уверены?</h2>
          <button type="submit" className="form__save-button">Да</button>
        </form>
      </div>
    </div>

    <div className="popup popup_type_view">
      <div className="popup__container popup__container_image">
        <button type="button" className="popup__close-button"></button>
        <img src={defaultImagePath} alt="Нет картинки" className="popup__image" />
        <h3 className="popup__image-text">Нет описания</h3>
      </div>
    </div>

    <template id="place">
      <li className="elements__element">
        <img src={defaultImagePath} className="elements__image" alt="Нет какртинки" />
        <div className="elements__title">
          <h3 className="elements__text"></h3>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>  
            <p className="elements__like-count">0</p>
          </div>
        </div>
        <button type="button" className="elements__trash-button"></button>
      </li>
    </template>
  </>
  );
}

export default App;

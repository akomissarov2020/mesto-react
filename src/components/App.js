import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import defaultImagePath from '../images/default.png';
import '../pages/index.css';


function App() {

  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  
  function handleEditAvatarClick() {
    openEditAvatarPopup(true);
  };
  function handleEditProfileClick() {
    openEditProfilePopup(true);
  };

  function handleAddPlaceClick() {
    openAddPlacePopup(true);
  };

  function closeAllPopups() {
    openEditAvatarPopup(false);
    openEditProfilePopup(false);
    openAddPlacePopup(false);
  };


  const editProfileChildren = (<>
      <input type="text" className="form__field" placeholder="Имя" name="edit-profile-name" required minlength="2" maxlength="40" />
      <span className="form__error-message edit-profile-name-error"></span>
      <input type="text" className="form__field" placeholder="О себе" name="edit-profile-title" required minlength="2" maxlength="200" />
      <span className="form__error-message edit-profile-title-error"></span> 
      <button type="submit" className="form__save-button">Сохранить</button>
    </>);

  const editAvatarChildren = (<>
      <input type="url" className="form__field" placeholder="Ссылка на картинку" name="avatar-link" required />
      <span className="form__error-message avatar-link-error"></span>
      <button type="submit" className="form__save-button">Сохранить</button>
  </>);

  const addPlaceChildren = (<>
      <input type="text" className="form__field" placeholder="Название" name="add-place-name" required minlength="2" maxlength="30" />
      <span className="form__error-message add-place-name-error"></span>
      <input type="url" className="form__field" placeholder="Ссылка на картинку" name="add-place-link" required />
      <span className="form__error-message add-place-link-error"></span>
      <button type="submit" className="form__save-button">Создать</button>
  </>);

  const withConfirmChildren = (<>
      <button type="submit" className="form__save-button">Да</button>
  </>);

  return (
  <>
    <Header />
    <Main  onEditProfile={handleEditProfileClick}  onEditAvatar={handleEditAvatarClick}  onAddPlace={handleAddPlaceClick} />
    <Footer />
    <PopupWithForm name="edit-profile" title="Редактировать профайл" children={editProfileChildren} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="edit-avatar" title="Обновить аватар" children={editAvatarChildren} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="add-place" title="Новое место" children={addPlaceChildren} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="with-confirm" title="Вы уверены?" children={withConfirmChildren} isOpen={false} onClose={closeAllPopups} />
    <ImagePopup />

    <template id="place">
      <li className="elements__element">
        <img src={defaultImagePath} className="elements__image" alt="Нет какртинки" />
        <div className="elements__title">
          <h3 className="elements__text">Без текста</h3>
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

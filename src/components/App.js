import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import '../pages/index.css';


function App() {

  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  const [selectedCard, selectCard] = React.useState(false);
  
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
    selectCard(false);
  };

  function handleCardClick(card) {
    console.log(selectedCard);
    selectCard(card);
    console.log(selectedCard);
  };


  const editProfileChildren = (<>
      <input type="text" className="form__field" placeholder="Имя" name="edit-profile-name" required minLength="2" maxLength="40" />
      <span className="form__error-message edit-profile-name-error"></span>
      <input type="text" className="form__field" placeholder="О себе" name="edit-profile-title" required minLength="2" maxLength="200" />
      <span className="form__error-message edit-profile-title-error"></span> 
      <button type="submit" className="form__save-button">Сохранить</button>
    </>);

  const editAvatarChildren = (<>
      <input type="url" className="form__field" placeholder="Ссылка на картинку" name="avatar-link" required />
      <span className="form__error-message avatar-link-error"></span>
      <button type="submit" className="form__save-button">Сохранить</button>
  </>);

  const addPlaceChildren = (<>
      <input type="text" className="form__field" placeholder="Название" name="add-place-name" required minLength="2" maxLength="30" />
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
    <Main  onEditProfile={handleEditProfileClick}  onEditAvatar={handleEditAvatarClick}  onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm name="edit-profile" title="Редактировать профайл" children={editProfileChildren} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="edit-avatar" title="Обновить аватар" children={editAvatarChildren} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="add-place" title="Новое место" children={addPlaceChildren} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="with-confirm" title="Вы уверены?" children={withConfirmChildren} isOpen={false} onClose={closeAllPopups} />
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </>
  );
}

export default App;

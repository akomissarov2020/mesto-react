import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };


  const editProfileChildren = (<>
      <input type="text" className="form__field" placeholder="Имя" name="edit-profile-name" required minLength="2" maxLength="40" />
      <span className="form__error-message edit-profile-name-error"></span>
      <input type="text" className="form__field" placeholder="О себе" name="edit-profile-title" required minLength="2" maxLength="200" />
      <span className="form__error-message edit-profile-title-error"></span> 
      
    </>);

  const editAvatarChildren = (<>
      <input type="url" className="form__field" placeholder="Ссылка на картинку" name="avatar-link" required />
      <span className="form__error-message avatar-link-error"></span>
  </>);

  const addPlaceChildren = (<>
      <input type="text" className="form__field" placeholder="Название" name="add-place-name" required minLength="2" maxLength="30" />
      <span className="form__error-message add-place-name-error"></span>
      <input type="url" className="form__field" placeholder="Ссылка на картинку" name="add-place-link" required />
      <span className="form__error-message add-place-link-error"></span>
  </>);

  const withConfirmChildren = (<>
  </>);

  return (
  <>
    <Header />
    <Main  onEditProfile={handleEditProfileClick}  onEditAvatar={handleEditAvatarClick}  onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm name="edit-profile" title="Редактировать профайл" buttonText="Сохранить" children={editProfileChildren} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить" children={editAvatarChildren} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="add-place" title="Новое место" buttonText="Создать" children={addPlaceChildren} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
    <PopupWithForm name="with-confirm" title="Вы уверены?" buttonText="Да" children={withConfirmChildren} isOpen={false} onClose={closeAllPopups} />
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </>
  );
}

export default App;

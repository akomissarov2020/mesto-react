import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import profileAvatarPath from '../images/avatar.png';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({avatar: profileAvatarPath});
  const [cards, setCards] = React.useState([]);

  React.useEffect(()=>{
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setCurrentUser(userData);
      setCards(initialCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

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

  function handleUpdateUser(user) {
    api.updateUserInfo(user).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      }
    );
  }

  function handleUpdateAvatar(user) {
    api.updateAvatar(user).then(
      (data) => {
        setCurrentUser(data);
        closeAllPopups();
      }
    );
  }

  function handleCardLike(card) {
    const hasOwnLike = card.likes.some(like => like._id === currentUser._id);
    (hasOwnLike ? api.deleteLike(card._id) : api.putLike(card._id)).then(
      (newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }
    );
  } 
  
  function handleCardDelete(card) {
    api.deletePhoto(card._id).then(
      () => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      }
    );
  }

  function handleAddPlaceSubmit(card) {
    api.insertNewCard(card).then(
      (newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      }
    );
  }

  const withConfirmChildren = (<>
  </>);

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <Header />
    <Main 
      onEditProfile={handleEditProfileClick}  
      onEditAvatar={handleEditAvatarClick} 
      onAddPlace={handleAddPlaceClick} 
      onCardClick={handleCardClick} 
      cards={cards}
      onCardLike={handleCardLike}
      onCardDelete={handleCardDelete}
    />
    <Footer />
    <EditProfilePopup 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateUser={handleUpdateUser}
    />
    <EditAvatarPopup 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups} 
      onUpdateAvatar={handleUpdateAvatar}
    />
    <AddPlacePopup 
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups} 
      onUpdateCards={handleAddPlaceSubmit}
    />
    <PopupWithForm name="with-confirm" title="Вы уверены?" buttonText="Да" children={withConfirmChildren} isOpen={false} onClose={closeAllPopups} />
    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </CurrentUserContext.Provider>
  );
}

export default App;

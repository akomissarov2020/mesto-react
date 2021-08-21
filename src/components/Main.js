import React from 'react';
import profileAvatarPath from '../images/avatar.png';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState("Имя");
  const [userDescription, setUserDescription] = React.useState("Профессия");
  const [userAvatar, setUserAvatar] = React.useState(profileAvatarPath);
  const [cards, setCards] = React.useState([]);
  const [ownerId, setOonerId] = React.useState("");

  React.useEffect(()=>{
    Promise.all([api.getUserInfo(),  api.getInitialCards()])
    .then(([userData, initialCards]) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
      setOonerId(userData._id);
      setCards(initialCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main>
        <section className="profile page__container">
          <div className="profile__avatar-overlay">
            <img src={userAvatar} alt="Аватарка пользователя" className="profile__avatar" />
            <button className="profile__edit-avatar-button" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">
              {userName}
            </h1>
            <button type="button" className="profile__edit-button"  onClick={props.onEditProfile}></button>
            <p className="profile__title">
              {userDescription}
            </p>
          </div>
          <button type="button" className="profile__add-button"  onClick={props.onAddPlace}></button>
        </section>
        <section>
          <ul className="elements page__elements">
            {cards.map((card, i) => (
              <Card key={card._id} card={card} owner={ownerId} onCardClick={props.onCardClick} />
            ))};
          </ul>
        </section>
    </main>
  );   
}

export default Main;

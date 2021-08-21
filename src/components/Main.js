import profileAvatarPath from '../images/avatar.png';
import '../pages/index.css';

function Main() {

  function handleEditAvatarClick() {

  };
  function handleEditProfileClick() {

  };

  function handleAddPlaceClick() {
      
  }

  return (
    <main>
        <section className="profile page__container">
          <div className="profile__avatar-overlay">
            <img src={profileAvatarPath} alt="Аватарка пользователя" className="profile__avatar" />
            <button className="profile__edit-avatar-button"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">
              Имя
            </h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__title">
              Профессия
            </p>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section>
          <ul className="elements page__elements"></ul>
        </section>
    </main>
  );   
}

export default Main;

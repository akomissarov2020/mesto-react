import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleChangeDesciption(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name: name,
          about: description,
        });
    } 

    const editProfileChildren = (<>
        <input type="text" className="form__field" placeholder="Имя" name="edit-profile-name" required minLength="2" maxLength="40" value={name} onChange={handleChangeName} />
        <span className="form__error-message edit-profile-name-error"></span>
        <input type="text" className="form__field" placeholder="О себе" name="edit-profile-title" required minLength="2" maxLength="200" value={description} onChange={handleChangeDesciption} />
        <span className="form__error-message edit-profile-title-error"></span>     
    </>);

    return (
        <>
            <PopupWithForm 
                name="edit-profile"
                title="Редактировать профайл"
                children={editProfileChildren} 
                buttonText="Сохранить" 
                isOpen={props.isOpen} 
                onClose={props.onClose}
                onSubmit={handleSubmit}
            />
        </>
  );
}

export default EditProfilePopup;
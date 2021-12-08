import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [avatar, onUpdateAvatar] = React.useState('');
    const avatarRef = React.useRef(); 

    function handleChangeAvatar(e) {
        onUpdateAvatar(e.target.value);
    }

    React.useEffect(() => {
        onUpdateAvatar(currentUser.avatar);
    }, [currentUser]); 

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
        props.onUpdateAvatar({avatar: avatar});
    } 

    const editAvatarChildren = (<>
        <input ref={avatarRef} type="url" className="form__field" placeholder="Ссылка на картинку" name="avatar-link" value={avatar} onChange={handleChangeAvatar} required />
        <span className="form__error-message avatar-link-error"></span>
    </>);

    return (
        <>
            <PopupWithForm 
                name="edit-avatar"
                title="Обновить аватар"
                children={editAvatarChildren} 
                buttonText="Сохранить" 
                isOpen={props.isOpen} 
                onClose={props.onClose}
                onSubmit={handleSubmit}
                isLoading={props.isLoading}
                loadingText="Загружается..."
            />
        </>
  );
}

export default EditAvatarPopup;
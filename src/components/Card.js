import '../pages/index.css';

function Card(props) {

  const hasOwnLike = props.card.likes.some(like => like._id === props.owner);
  const isOwnCard = props.card.owner._id === props.owner;

  function onCardClick() {
    props.onCardClick(props.card);
  }  

  return (
    <li className="elements__element">
        <img src={props.card.link} className="elements__image" alt={props.card.name} onClick={onCardClick} />
        <div className="elements__title">
            <h3 className="elements__text">{props.card.name}</h3>
            <div className="elements__like-container">
                <button type="button" className={hasOwnLike ? 'elements__like elements__like_active' : 'elements__like'}></button>  
                <p className="elements__like-count">{props.card.likes.length}</p>
            </div>
        </div>
        {isOwnCard ? (<button type="button" className="elements__trash-button"></button>) : (<></>)}
    </li>
  );
}

export default Card;

import Button from "../Button/Button";
import "./styles.css";
//Импортируем useState
import { useState } from "react";

function Feedback() {
  //вызываем хук useState и передаем в него первоначальное состояние
  const [likes, setLikes] = useState(0);
  const [disslikes, setDisslikes] = useState(0);

  //прописываем функции для изменений при клике на лайк и дизлайк
  const onLikeClick = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const onDisslikeClick = () => {
    setDisslikes((prevValue) => prevValue + 1);
  };

  // прописываем функцию для обнуления лайков и дизлайков
  const onResetClick = () => {
    setLikes(0);
    setDisslikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="like-quantity result-wrapper">{likes}</div>
      <div className="like-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Like"
          className="like-button feedback-button"
          onClick={onLikeClick}
        />
      </div>
      <div className="disslike-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Disslike"
          className="disslike-button feedback-button"
          onClick={onDisslikeClick}
        />
      </div>
      <div className="disslike-quantity result-wrapper">{disslikes}</div>
      <div className="reset-button-wrapper feedback-button-wrapper">
        <Button
          buttonName="Reset"
          className="reset-button feedback-button"
          onClick={onResetClick}
        />
      </div>
    </div>
  );
}

export default Feedback;

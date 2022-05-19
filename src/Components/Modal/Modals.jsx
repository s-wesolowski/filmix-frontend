import { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = (props) => {
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [children, setChildren] = useState(props.children);
  const [keepBackground, setKeepBackground] = useState(false);

  const handleCloseModal = () => {
    if (!isClosing) {
      setIsClosing(true);
      setKeepBackground(false);
      setCloseAnimation(true);
      setTimeout(() => {
        props.close();
      }, 400);
    }
  };

  useEffect(() => {
    const handleAnimateContent = () => {
      setCloseAnimation(true);
      setKeepBackground(true);
      setTimeout(() => {
        setChildren(props.children);
        setCloseAnimation(false);
      }, 300);
    };

    if (props.children !== children) {
      handleAnimateContent(props.children);
    }
  }, [props.children, children]);

  return (
    <div className="modal-wrapper ">
      <div
        className={
          "overlay " +
          (!keepBackground && closeAnimation ? "close-animation" : "")
        }
        onClick={handleCloseModal}
      ></div>

      <div className={"modal " + (closeAnimation ? "close-animation" : "")}>
        {props.backgroundImage && (
          <div className="backgroundImage">
            <img src={props.backgroundImage} alt="poster_bg_img" />
          </div>
        )}
        <div className="content">
          <div className="header">
            <div className="title">{props.title || "Title"}</div>
            <button className="close" onClick={handleCloseModal}></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

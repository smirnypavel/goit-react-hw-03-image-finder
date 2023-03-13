import { Component } from 'react';
import { createPortal } from 'react-dom';
import styled from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClickOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { currentImage } = this.props;
    console.log(currentImage);

    return createPortal(
      <div className={styled.Overlay} onClick={this.handleClickOverlay}>
        <div>
          <img src={currentImage} alt="" className={styled.Modal} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

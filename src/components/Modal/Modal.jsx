import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ImCross } from 'react-icons/im';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  closeModal = ({ target, currentTarget, code }) =>
    (target === currentTarget || code === 'Escape') && this.props.close();

  render() {
    const { children, close } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>
          <span className={css.close} onClick={close}>
            <ImCross />
          </span>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

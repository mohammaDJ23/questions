import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { Modal as M, ModalProps } from 'antd';

const Modal: FC<PropsWithChildren<ModalProps>> = props => {
  return createPortal(<M {...props}>{props.children}</M>, document.querySelector('#modal')!);
};

export default Modal;

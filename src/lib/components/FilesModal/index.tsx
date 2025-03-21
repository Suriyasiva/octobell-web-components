import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilesModal(props: IProps) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>This is the modal content inside a box.</ModalBody>
      </ModalContent>
    </Modal>
  );
}

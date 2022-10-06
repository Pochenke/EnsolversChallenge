import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteModal = (props) => {
    const [isOpen, setOpen] = useState(false)

    const toggleModal = () => {
        setOpen(!isOpen);
    }

    const deleteNote = () => {
        props.handleClick();
        toggleModal();
    }

    return (
        <>
            <Button onClick={toggleModal}><DeleteIcon /></Button>

            <Modal isOpen={isOpen} backdrop={true} toggle={toggleModal}>
                <ModalHeader>¿Está seguro de que desea eliminar la nota?</ModalHeader>
                <ModalFooter>
                    <Button onClick={deleteNote}>Confirmar</Button>
                    <Button onClick={toggleModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default DeleteModal;
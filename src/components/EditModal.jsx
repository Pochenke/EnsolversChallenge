import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditModal = (props) => {
    const [isOpen, setOpen] = useState(false)

    //Titulo previo de la nota, utilizado para luego ubicarla en el map y poder reemplazarla
    const prevTitle = props.editTitle;

    const toggleModal = () => {
        setOpen(!isOpen);
        setNote({
            title: props.editTitle,
            content: props.editContent
        });
    }

    const [note, setNote] = useState({
        title: props.editTitle,
        content: props.editContent
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const editNote = (event) => {
        props.onEdit(note, props.editTitle, props.list);
        event.preventDefault();
        toggleModal();
    }

    return (
        <div>
            <Button onClick={toggleModal}>{props.btnText}</Button>

            <Modal isOpen={isOpen} backdrop={true} toggle={toggleModal}>
                <ModalHeader>
                    Nota
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Título</Label>
                            <Input
                                name='title'
                                onChange={handleChange}
                                value={note.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Contenido</Label>
                            <Input
                                name='content'
                                onChange={handleChange}
                                value={note.content}
                                type='textarea'
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={editNote}>Aplicar</Button>
                    <Button onClick={toggleModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditModal;
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NoteModal = (props) => {
    const [isOpen, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!isOpen);
        setNote({
            title: '',
            content: ''
        });
    }

    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        const date = new Date();

        const fullDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value,
                date: fullDate
            };
        });
    }

    const submitNote = (event) => {
        props.onAdd(note, props.list);
        setNote({
            title: '',
            content: '',
        });
        event.preventDefault();
        toggleModal();
    }

    return (
        <>
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
                                id='exampleText'
                                name='content'
                                onChange={handleChange}
                                value={note.content}
                                type='textarea'
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={submitNote}>+</Button>
                    <Button onClick={toggleModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default NoteModal;
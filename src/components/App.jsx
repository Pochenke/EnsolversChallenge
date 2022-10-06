import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [archivedNotes, setArchivedNotes] = useState([]);
    const [seeArchived, setSeeArchived] = useState(false);

    //Alternar archivados/notas default
    const toggleArchived = () => {
        setSeeArchived(!seeArchived);
    }

    //Cada función sobre las notas chequea si está archivada o no con el parámetro "list"
    //Agregar notas
    const addNote = (newNote, list) => {
        (list == "notes" ? setNotes : setArchivedNotes)(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    //Eliminar notas
    const deleteNote = (id, list) => {
        (list == "notes" ? setNotes : setArchivedNotes)(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    //Editar notas
    const editNote = (editedNote, prevTitle, list) => {

        (list == "notes" ? setNotes : setArchivedNotes)(prevNotes => {
            return prevNotes.map(note => {
                if (note.title === prevTitle) {
                    return { ...note, title: editedNote.title, content: editedNote.content };
                }
                return note;
            })
        })

    }

    //Cambiar de lista una nota
    const switchList = (id, newNote, list) => {
        (list == "notes" ? setNotes : setArchivedNotes)(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        });
        (list == "notes" ? setArchivedNotes : setNotes)(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    return (
        <div>
            <Header toggleArchived={toggleArchived} isArchived={seeArchived} onAdd={addNote} />
            {(seeArchived ? archivedNotes : notes).map((noteItem, index) => {
                return (
                    <Note
                        archived={seeArchived}
                        list={seeArchived ? null : "notes"}
                        onAdd={addNote}
                        onDelete={deleteNote}
                        onEdit={editNote}
                        onSwitch={switchList}
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        date={noteItem.date}
                    />
                );
            })}

            <Footer />
        </div>
    );
}

export default App;
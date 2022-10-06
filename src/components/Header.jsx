import React from "react";
import NoteModal from './NoteModal'
import { Button } from 'reactstrap';

const Header = (props) => {
    return (
        <header>
            <h1>Mis notas</h1>
            <div className="nav-item">
                <Button onClick={props.toggleArchived} >{props.isArchived ? "Volver a no archivados" : "Ver archivados"}</Button>
                {props.isArchived ? '' : <NoteModal list="notes" onAdd={props.onAdd} btnText="Agregar nota" />}
            </div>
        </header>
    )
}

export default Header;
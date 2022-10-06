import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import ArchiveIcon from '@mui/icons-material/Archive';
import { Button } from 'reactstrap';

const Note = (props) => {
    const date = new Date().getDay();

    const handleClick = () => {
        props.onDelete(props.id, props.list);
    }

    const handleSwitch = () => {
        props.onSwitch(props.id, { title: props.title, content: props.content, date: props.date }, props.list);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p className="date">Última edición: {props.date}</p>
            <DeleteModal handleClick={handleClick} />
            <EditModal
                onEdit={props.onEdit}
                editId={props.id}
                editTitle={props.title}
                editContent={props.content}
                btnText={<EditIcon />}
                list={props.list}
            />
            <Button onClick={handleSwitch}>{props.archived ? <UnarchiveIcon /> : <ArchiveIcon />}</Button>
        </div>
    );
}

export default Note;
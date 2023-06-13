import React from 'react'
import "./Task.css"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { supabase } from '../client';
import { Link } from 'react-router-dom';

function Task({ id, project, assignee, due, content }) {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleDelete = async () => {
        const { error } = await supabase
            .from('Task')
            .delete()
            .eq('id', id)
        console.log(error)
        window.location = "/"
    }

    const handleEdit = async () => {

    }

    return (
        <div className='card'>
            <div className='task_info'>
                <p>Project: {project}</p>
                <p>Assignee: {assignee}</p>
                <p>Due: {due}</p>
            </div>
            <p className='task_content'>Detail: {content}</p>
            <div className='task_button'>
                <button className="done_btn" onClick={handleClick}>Done</button>
                <Link to={`/edit/${id}`}><button className='edit_btn' onClick={handleEdit}>Edit</button></Link>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p>Done the task!!! Do you want to delete this card?</p>
                    <p>Project: {project}</p>
                    <p>Detail: {content}</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='modal_close' onClick={handleClose}>Close</button>
                    <button className='model_delete' onClick={handleDelete}>Delete</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Task
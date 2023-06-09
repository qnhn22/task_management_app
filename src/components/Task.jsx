import React from 'react'
import "./Task.css"

function Task({ project, assignee, due, content }) {
    return (
        <div className='card'>
            <div className='task_info'>
                <p>Project: {project}</p>
                <p>Assignee: {assignee}</p>
                <p>Due: {due}</p>
            </div>
            <p className='task_content'>Detail: {content}</p>
        </div>
    )
}

export default Task
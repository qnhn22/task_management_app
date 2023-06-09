import React, { useEffect, useState } from 'react'
import "./Form.css"
import { supabase } from '../client';

function Form() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('tasks')
                .select('project')

            setProjects(data)
            console.log("data" + data)
            console.log("error" + error)
        }
        fetchProjects();
    }, [])

    const [task, setTask] = useState({
        project: "",
        assignee: "",
        due: "2022-12-22",
        content: "",
    })

    const createTask = async (e) => {
        e.preventDefault()
        const { error } = await supabase
            .from('tasks')
            .insert({
                project: task.project,
                assignee: task.project,
                due: task.due,
                content: task.content
            })
        window.location = "/"
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }))
    }

    return (
        <div className='form'>
            <h3 className='title'>New Task</h3>
            <form className="input_form" onSubmit={createTask}>
                <div className='input_field'>
                    <label className='input_label' htmlFor="project">Select a project</label><br></br>
                    <select value={task.project} name="project" id="project" onChange={handleChange}>
                        {projects.map((project) => (<option value={project}>{project}</option>))}
                    </select>
                </div>
                <br></br>
                <div className='input_field'>
                    <label className='input_label' htmlFor="new_project">or create a new one</label><br></br>
                    <input type='text' id='new_project' name='project' value={task.project} onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label className='input_label' htmlFor="assignee">Assignee</label><br></br>
                    <input type='text' id='assignee' name='assignee' value={task.assignee} onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label className='input_label' htmlFor="due">Due</label><br></br>
                    <input type='date' id='due' name='due' value={task.due} onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label className='input_label' htmlFor="content">Content</label><br></br>
                    <textarea id='content' name='content' value={task.content} onChange={handleChange} />
                </div>
                <input type='submit' value={"New Task"} />
            </form>
        </div>
    )
}

export default Form
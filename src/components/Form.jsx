import React, { useEffect, useState } from 'react'
import "./Form.css"
import { supabase } from '../client';

function Form() {
    const [projects, setProjects] = useState({})
    useEffect(() => {
        const fetchProjects = async () => {
            const { data } = await supabase
                .from('Project')
                .select()

            data.map((project) => {
                setProjects((prev) => ({
                    ...prev,
                    [project.name]: project.id
                }))
            })
        }
        fetchProjects();
    }, [])

    const [task, setTask] = useState({
        project_id: "",
        assignee: "",
        due: "2022-12-22",
        content: "",
    })

    const createTask = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase
            .from('Task')
            .insert({
                project_id: task.project_id,
                assignee: task.assignee,
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
            {projects && (
                <>
                    <h3 className='title'>New Task</h3>
                    <form className="input_form" onSubmit={createTask}>
                        <div className='input_field'>
                            <label className='input_label' htmlFor="project_id">Select a project</label><br></br>
                            <select value={task.project_id} name="project_id" id="project_id" onChange={handleChange}>
                                <option key="" value="">Choose a project</option>
                                {Object.keys(projects).map((projectName) => (<option key={projectName} value={projects[projectName]}>{projectName}</option>))}
                            </select>
                        </div>
                        <br></br>
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
                </>
            )}
        </div>
    )
}

export default Form
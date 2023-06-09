import React, { useState } from 'react'
import { supabase } from '../client';
import './ProjectForm.css'

function ProjectForm() {
    const [project, setProject] = useState({
        name: "",
        due: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Project')
            .insert({
                name: project.name,
                due: project.due,
            })
        window.location = "/projects"
    }

    return (
        <div className='project_form'>
            <h3>New Project</h3>
            <form onSubmit={handleSubmit}>
                <div className='input_field'>
                    <label className='input_label' htmlFor='name'>Name</label><br></br>
                    <input type='text' id='name' name="name" value={project.name} onChange={handleChange} />
                </div>
                <div className='input_field'>
                    <label className='input_label' htmlFor='due'>Due</label><br></br>
                    <input type='date' id='due' name='due' value={project.due} onChange={handleChange} />
                </div>
                <input type='submit' value={"Create"} />
            </form>
        </div>
    )
}

export default ProjectForm
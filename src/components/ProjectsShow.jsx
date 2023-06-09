import React from 'react'
import { supabase } from '../client';
import "./ProjectsShow.css"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProjectsShow() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const fetchProjects = async () => {
            const { data, error } = await supabase
                .from('Project')
                .select()
                .order("created_at", { ascending: false })

            setProjects(data)
        }
        fetchProjects();
    }, [])

    return (
        <div className='projects_show'>
            <Link to='/projects/new'>Create a new project...</Link>
            {projects && projects.map((project) => {
                return (
                    <Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link>
                )
            })}
        </div >
    )
}

export default ProjectsShow
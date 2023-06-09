import React, { useState, useEffect } from 'react'
import './ProjectShow.css'
import Task from './Task'
import { supabase } from '../client'
import { useParams } from 'react-router-dom'

function ProjectShow() {
    const [tasks, setTasks] = useState([]);
    const [project, setProject] = useState("")
    const params = useParams();

    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await supabase
                .from('Task')
                .select()
                .eq('project_id', `${params.id}`)
                .order("created_at", { ascending: false })
            setTasks(data)
        }

        const fetchProject = async () => {
            const { data } = await supabase
                .from('Project')
                .select()
                .eq('id', `${params.id}`)
            setProject(data[0].name)
        }

        fetchTasks();
        fetchProject();
    }, [])

    return (
        <div className='project_show'>
            {tasks && tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        project={project}
                        assignee={task.assignee}
                        due={task.due}
                        content={task.content}
                    />
                )
            })}
        </div>
    )
}

export default ProjectShow
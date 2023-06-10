import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Task from './Task'
import { supabase } from '../client'

function Dashboard() {
    const [tasks, setTasks] = useState([])
    const [projects, setProjects] = useState({})
    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await supabase
                .from('Task')
                .select()
                .order("created_at", { ascending: false })
            setTasks(data)
        }

        const fetchProjects = async () => {
            const { data } = await supabase
                .from('Project')
                .select()

            data.map((project) => {
                setProjects((prev) => ({
                    ...prev,
                    [project.id]: project.name
                }))
            })
        }
        fetchTasks();
        fetchProjects();
    }, [])


    return (
        <div className='dashboard'>
            {tasks && tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                        project={projects[task.project_id]}
                        assignee={task.assignee}
                        due={task.due}
                        content={task.content}
                    />
                )
            }
            )}
        </div>
    )
}

export default Dashboard
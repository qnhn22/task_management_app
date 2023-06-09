import React from 'react'
import './Dashboard.css'
import Task from './Task'

function Dashboard() {
    return (
        <div className='dashboard'>
            <Task
                project={"f;ads fda"}
                assignee={"dkjfalf"}
                due={33 / 12 / 2023}
                detail={"daflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfj"}
            />
            <Task
                project={"f;ads fda"}
                assignee={"dkjfalf"}
                due={33 / 12 / 2023}
                detail={"daflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfj"}
            />
            <Task
                project={"f;ads fda"}
                assignee={"dkjfalf"}
                due={33 / 12 / 2023}
                detail={"daflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfjdaflfjadfj"}
            />
        </div>
    )
}

export default Dashboard
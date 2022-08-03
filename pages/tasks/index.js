import { useState } from "react"
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

function TaskPage() {

    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks')
        const data = await response.json()
        setTasks(data)
    }
    return (
        <div className={styles.container}>
            
            <button onClick={fetchTasks}>Load Task</button>
            <div className={styles.container}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={styles.th}>id</th>
                                    <th className={styles.th}>Project</th>
                                    <th className={styles.th}>Status</th>
                                    <th className={styles.th}>Task</th>
                                </tr>
                            </thead>
                            <tbody>
            {tasks.map(function(task){
                return (
                   <>
                            {task.issues.map((r, i) => 
                            <tr key={i}>
                                <td key={r.id}>{r.id}</td>
                                <td key={r.project.id}> {r.project.name}</td>
                                <td key={r.status.id}>{r.status.name}</td>
                                <td key={r.subject.id}> {r.subject}</td>
                            </tr>
                            )}
                           </>
                )
            })}
             </tbody>
                        </table>
                    </div>
                    
        </div>
    )
}

export default taskPage
'use client';

import { useCallback, useState } from 'react';

export default function TodoPage() {
    const [tasks, setTasks] = useState<string[]>([]);

    const [newTask, setNewTask] = useState<string>('');

    const addTask = useCallback(() => {
        setTasks(() => [...tasks, newTask]);
        setNewTask('');
    }, [tasks, newTask]);

    return (
        <div>
            <h1>Todo Page</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={Math.random()}>{task}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
            />
            <button type="button" onClick={addTask}>
                Create
            </button>
        </div>
    );
}

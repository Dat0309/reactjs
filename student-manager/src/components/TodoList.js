import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList}) {
    return (
        <>
        {
            todoList.map(todo => <Todo todo={todo}/>)
        }
        </>
    )
}

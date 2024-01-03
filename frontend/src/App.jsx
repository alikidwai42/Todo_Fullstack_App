/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos,setTodos]= useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async(res)=>{
      const json = await res.json()
      setTodos(json.todos)
    })
  },[])

   return (
    <> 
      <CreateTodo></CreateTodo>
      <Todos todos={todos
      }></Todos>
      </>
  )
}

export default App

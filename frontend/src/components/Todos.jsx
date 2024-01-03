/* eslint-disable react/jsx-key */
import React from 'react';

export function Todos({ todos }) {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const todoStyle = {
    marginBottom: '20px',
  };

  const titleStyle = {
    color: '#333',
    marginBottom: '5px',
  };

  const descriptionStyle = {
    color: '#555',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  return (
    <div style={containerStyle}>
      {todos.map((todo) => (
        <div  style={todoStyle}>
          <h1 style={titleStyle}>{todo.title}</h1>
          <h2 style={descriptionStyle}>{todo.description}</h2>
          <button style={{ ...buttonStyle, ...buttonHoverStyle }}
           onClick={()=>{
            fetch("http://localhost:3000/completed",{
                method:"PUT",
                body:JSON.stringify({id: todo._id}),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async(res)=>{
                const json = await res.json()
                alert("marked as completed")
            })
           }} >
            {todo.completed==true ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>
      ))}
    </div>
  );
}

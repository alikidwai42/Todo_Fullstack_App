import { useState } from "react";



export function CreateTodo(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    const containerStyle = {
        maxWidth: '300px',
        margin: '20px auto',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      };
    
      const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #ccc',
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
          <input type="text" placeholder="Title" style={inputStyle} onChange={function(e){
            const value= e.target.value;
            setTitle(value)
          }} />
          <br />
          <input type="text" placeholder="Description" style={inputStyle} onChange={function(e){
            const value= e.target.value;
            setDescription(value)
          }}/>
          <br />
          <button style={{ ...buttonStyle, ...buttonHoverStyle }} onClick={()=>{
            fetch ("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title:title,
                    description:description


                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo Added")
            })
          }}>Add a todo</button>
        </div>
      );
}
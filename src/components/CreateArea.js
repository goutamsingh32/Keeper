import React, { useState } from 'react'



export default function CreateArea(props) {

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
    
    function handleChanges(event){
        const {name,value}=event.target;

        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]:value
            }
        });
    }

  return (
    <div>
       
       <form>
            <input 
                type="text" 
                placeholder="Title"
                onChange={handleChanges}
                name="title"
                value={note.title}
            />
             <textarea
                name="content"
                onChange={handleChanges}
                value={note.content}
                placeholder="Take a note..."
                rows="3"
            />

            <button onClick={submitNote}>Add</button>

       </form>
       
    </div>
  )
}

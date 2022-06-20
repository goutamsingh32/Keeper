import React, { useState } from 'react'
import Header from './Header'
import Notes from './Notes'
import Footer from './Footer'
import CreateArea from './CreateArea'


export default function App() {

    const [notes,setNote]=useState([]);

    function addNote(newNote) {
        setNote(prevNotes => {
          return [...prevNotes, newNote];
        });
      }
    
    function deleteNode(id){
        setNote(prevNote=>{
            return prevNote.filter((noteItem,index)=>{
                return index!=id;
            });
        }); 
    }

  return (
    <div>
        <Header/>
        <CreateArea onAdd={addNote} />
        {
            notes.map((noteItem,index)=>{
               return(<Notes
                    id={index}
                    key={index}
                    title={noteItem.title}
                    content={noteItem.title}
                    onDelete={deleteNode}

               />);
            })
        } 
       
        <Footer/>
    </div>
  )
}

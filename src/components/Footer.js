import React from 'react';


const year=new Date().getFullYear();

export default function Footer() {
  return (
   
    <footer>
        <p> Copyright <i className="fa-solid fa-copyright"></i> {year}</p>
    </footer>
  )
}

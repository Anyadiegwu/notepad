import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import './App.css';
import NoteComponent from './component/Note';
import Header from './component/header';


     
function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "Notes",
    date: "2/24/2023",
  },
  {
    id: nanoid(),
    text: "Second Notes",
    date: "2/25/2023"
  },
  {
    id: nanoid(),
    text: "Here now!",
    date: "2/26/2023",
  }])

  const updateNote = (text) => {
    const date = new Date()
    setReadFile(readFile)
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      readFile
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)

  }

  const delNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id)
   setNotes(newNotes)
  }
  const [readFile, setReadFile] = useState("")
  const [fontSize1, fontSize2, fontSize3, bold, italics, underline, setFontSize] = useState(false)
  return(
    <>
      <div className='container'>
        <Header/>
        <div className={(`${fontSize1 && "size1"}`,
        `${fontSize2 && "size2"}`, `${fontSize3 && "size3"}`,
        `${bold && "format1"}`, `${italics && "format2"}`, 
        `${underline && "format3"}`)}>
          <NoteComponent notes={notes} 
          handleUpdateNote={updateNote}
          handleDelNote={delNote} 
          handleReadFile={readFile}
          handleFontSize={setFontSize}/>
        </div>
      </div>
   
    </>
  )
}
export default App;

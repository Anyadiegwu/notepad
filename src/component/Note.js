import Note from "./Note/Change";
import styles from "./Note.module.css"
import NewNote from "./Note/NewNote";

function NoteComponent ({notes, handleUpdateNote, handleDelNote, handleReadFile}){
    return(
        <>
            <div className={styles.bookSpace}>
                {notes.map((notes) => (
                    <Note 
                    id={notes.id} 
                    text={notes.text} 
                    date={notes.date}
                    handleDelNote={handleDelNote}/>
                ))}
                <NewNote 
                handleUpdateNote={handleUpdateNote}
                handleReadFile={handleReadFile}/>
            </div>

        </>
    )
}
export default NoteComponent;
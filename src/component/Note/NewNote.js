import { useState } from 'react';
import styles from './Change.module.css'


function NewNote ({handleUpdateNote, handleReadFile, handleFontSize}){
    const [textNote, setTextNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = handleChangeFile();
        if(file){
            handleReadFile(textNote)
            setTextNote("")
            
        }
        if(textNote.trim().length > 0){
            handleUpdateNote(textNote)
            setTextNote('')
        }
    }
    
    const handleChange = (e) => {
        setTextNote(e.target.value)   
    }
    const handleChangeFile = () => {
        setTextNote([File.prototype.name, File.prototype.type])
        handleReadFile(Blob.prototype.stream()) 
    }

 
    return(
        <>
            <div className={styles.notebook} id={styles.new}>
                <textarea
                    rows='6'
                    cols="10"
                    placeholder='Type to add a new note here..'
                    value={textNote}
                    onChange={handleChange}
                ></textarea>
                <input type="file" onChange={handleChangeFile}/>
                <div className={styles.datetag}>
                    <small>
                        <select className="format">Format text
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format1">Bold</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format2">Italics</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format3">Underline</option>
                        </select>
                        <select className="size">Font-Size
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size1">12</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size2">14</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size3">16</option>
                        </select>
                    </small>
                    <button className={styles.save} onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )
}
export default NewNote;
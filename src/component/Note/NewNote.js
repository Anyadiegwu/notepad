import {  useState } from 'react';
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
    const handleSelect = (e) => { 
    const elements = document.querySelectorAll(".btn");
    elements.forEach(element =>{
        element.addEventListener("click", () =>{
            let key = Number(elements)
            
            if(key > 0 && key < 2){
               console.log( <p contentEditable={{style: {fontWeight: "700px"}}}>{e}</p>)
            }else if(key > 1 && key < 3){
                <p contentEditable={{style: {fontStyle: "italic"}}}>{e}</p>
            }
        
            // let command = element.dataset['element']

            // key.execCommand(command, false, null)
           
        })
    })}
    // const handleSelect = (e) => {
    //     format();
    //     return <p key={e.nanoid()}></p>
  
    // }
  
    return(
        <>
            <div className={styles.notebook} id={styles.new}>
                <textarea
                    rows='8'
                    cols="10"
                    placeholder='Type to add a new note here..'
                    value={textNote}
                    onChange={handleChange}
                    onSelect={handleSelect}
                    contentEditable={{style: {}}}
                ></textarea>
                <div  className={styles.input}>
                <input type="file" 
                onChange={handleChangeFile}/>
                </div>
                <div className={styles.datetag}>
                    <small>
                        <button 
                        className={styles.btn}
                        data-elemente="bold">B</button>
                        <button 
                        className={styles.btn}
                        data-element="italic">I</button>
                        <button 
                        className={styles.btn}
                        data-element="underline">U</button>
                        {/* <select className="format">Format text */}
                            {/* <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format1">Bold</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format2">Italics</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="format3">Underline</option> */}
                        {/* </select> */}
                        <select className="size">Font-Size
                            <option>
                                <button 
                                className={styles.btn}
                                datatype="size1">12</button>
                            </option>
                            <option>
                                <button 
                                className={styles.btn}
                                datatype="size2">14</button>
                            </option>
                            <option>
                                <button 
                                className={styles.btn}
                                datatype="size3">16</button>
                            </option>
                            {/* <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size1">12</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size2">14</option>
                            <option onClick={() => 
                                handleFontSize((previousFontSize) => !previousFontSize)}
                                className="size3">16</option> */}
                        </select>
                    </small>
                    <button className={styles.save} onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </>
    )
}
export default NewNote;
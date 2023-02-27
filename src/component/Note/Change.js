import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './Change.module.css';


function Note({id, text, date, handleDelNote, handleReadFile}) {
    return (
        <>
            <div className={styles.notebook}>
                <h3 className="name-tag">{text}</h3>
                {handleReadFile}
                <div className={styles.datetag}>
                    <small className={styles.date}>{date}</small>
                    <FaRegTrashAlt size='1.3em' 
                    onClick={() => handleDelNote(id)}/>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}
export default Note
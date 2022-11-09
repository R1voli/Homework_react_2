import style from './Message.module.css'

export const Message = ({ author, text }) => {
    return (
        <div className={style.message_box}>
            <h1 className={style.message_title}>{author}</h1>
            <p className={style.message_text}>{text}</p>
        </div>
    )
}

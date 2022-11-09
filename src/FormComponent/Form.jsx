import style from './Form.module.css'

export const Form = ({ data, setData, setMessage }) => {
    const { author, text } = data

    const submitForm = (ev) => {
        ev.preventDefault()
        if (text.length > 0) {
            setMessage(pervstate => [...pervstate, { author, text }])
        }
        setData({
            author: '',
            text: '',
        })
    }

    return (
        <div className={style.submit_box}>
            <h2 className={style.submit_h2}>Submit</h2>
            <form onSubmit={submitForm}>
                <div className={style.author_box}>
                    <input placeholder='name' value={author} onChange={(ev) =>
                        setData(pervstate => ({ ...pervstate, author: ev.target.value }))} />
                </div>

                <div className={style.text_box}>
                    <input placeholder='text' value={text} onChange={(ev) =>
                        setData(pervstate => ({ ...pervstate, text: ev.target.value }))} />
                </div>

                <button className={style.btn_sub}>Submit</button>
            </form>
        </div>
    )
}
import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './MessageComponent/Message';
import { Form } from './FormComponent/Form';

export function App() {

  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    author: '',
    text: '',
  })

  const Robot = `Доброго времени суток, сообщение принято :)`


  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'R1voli') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { author: 'R1voli', text: Robot }])
      }, 500)
    }
  }, [messageList])

  return (
    <div className='App'>
      <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} />
      <div className='messageList'>
        {
          messageList.map((e, i) => <Message author={e.author} text={e.text} key={i} />)
        }
      </div>
    </div>
  );
}

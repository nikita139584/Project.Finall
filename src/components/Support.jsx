import "/src/App.css";
import { useState } from "react";

function Comment() {
    //Текст пользователя
    const [text, setText] = useState("");
    //Текст который зарание написан
    const [message, setMessage] = useState("");

    function sendComment() {

        //Ответ пользователю
        setMessage("Мы примем вашу жалобу и попытаемся её исправить!");
        //Очищает ответ после отправки
        setText("");
    }

    return (
        <div className="comment">
            <textarea
                className="comment-textarea"
                placeholder="Введите комментарий..."
                value={text}
                //Тут каждый раз, когда пользователь что-то вводит, сохрани этот текст в переменную text
                onChange={(e) => setText(e.target.value)}
            />

            <button className="comment-button" onClick={sendComment}>
                Отправить
            </button>
            {/* ===== 1. Если message не пустая, покажи абзац <p> с текстом из message. Если message пустая — ничего не показывай ===== */}
            {message && <p className="comment-message">{message}</p>}
        </div>
    );
}

export default Comment;
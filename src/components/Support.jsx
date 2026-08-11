import "/src/App.css";
import { useState } from "react";

function Comment() {

    // text хранит текст, который пользователь вводит в поле.
    const [text, setText] = useState("");

    // message хранит сообщение, которое показывается после отправки.
    const [message, setMessage] = useState("");

    // Функция вызывается при нажатии кнопки "Отправить".
    function sendComment() {

        // Записываем ответ пользователю в message.
        setMessage("Мы примем вашу жалобу и попытаемся её исправить!");

        // После отправки очищаем поле ввода.
        setText("");
    }

    return (
        <div className="comment">
            {/* value связывает значение поля с состоянием text.
    onChange каждый раз, когда пользователь что-то вводит,
    сохраняет новый текст в text. */}
            <textarea
                className="comment-textarea"
                placeholder="Введите комментарий..."

                value={text}

                onChange={(e) => setText(e.target.value)}
            />

            {/* При клике вызываем функцию sendComment. */}
            <button className="comment-button" onClick={sendComment}>
                Отправить
            </button>
            {/* && означает: если message не пустая,
                React покажет сообщение; если пустая — ничего не покажет. */}
            {message && <p className="comment-message">{message}</p>}
        </div>
    );
}

export default Comment;
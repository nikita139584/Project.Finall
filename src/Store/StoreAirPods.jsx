import "/src/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Store({ add }) {

    // В showModal хранится true/false — нужно ли сейчас показывать модальное окно.
    // setShowModal меняет это значение.
    const [showModal, setShowModal] = useState(false);

    // Здесь хранится текст, который мы показываем пользователю в модальном окне.
    const [message, setMessage] = useState("");

    // Функция handleAdd объединяет несколько действий:
    // добавить товар в корзину, показать сообщение и затем скрыть его.
    function handleAdd(movie) {

        // Передаём выбранный товар в функцию добавления в корзину
        // из родительского компонента.
        add(movie);

        // Записываем текст сообщения в состояние message.
        setMessage("Товар добавлен в корзину");

        // После добавления товара показываем модальное окно.
        setShowModal(true);

        // Через две секунды автоматически скрываем модальное окно.
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }

    // Массив категорий магазина.
    // Каждый объект содержит название, изображение и ссылку на страницу категории.
    const movies1 = [
        { title: "Ноутбуки", image: "/PhotoStore/store1.png", Link: "/mac" },
        { title: "Планшеты", image: "/PhotoStore/store3.png", Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];

    // Массив наушников.
    // Каждый объект содержит id, изображение, название, описание и цену.
    const movies2 = [
        {
            id: 1,
            image: "/PhotoAirPods/airpods1.png",
            h1: "AirPods Max",
            h2: "Новые интеллектуальные функции. Ещё более глубокое погружение в звук.",
            price: 499
        },
        {
            id: 2,
            image: "/PhotoAirPods/airpods2.jpg",
            h1: "AirPods Pro",
            h2: "Активное шумоподавление. Пространственное аудио.",
            price: 249
        }
    ];

    return (
        <>
            <div className="app">
                <div className="storeProducts">
                    <div className="Store-Header">
                        <h1>Другие категории</h1>
                    </div>

                    <div className="slider-Store">
                        <div className="window-Store">
                            <div className="track-Store">
                                {/* map проходит по каждому объекту movies1
                                    и создаёт для него карточку категории. */}
                                {movies1.map((movie) => (
                                    <Link key={movie.title} to={movie.Link}>
                                        <div className="card-Store">
                                            {/* Показываем изображение текущей категории. */}
                                            <img src={movie.image} alt={movie.title} />
                                            {/* Показываем название категории. */}
                                            <h3>{movie.title}</h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="storeProducts-header">
                    <h1>Наушники</h1>
                    <h2>Все модели. Выберите свои.</h2>
                </div>
            </div>

            {/* Основной слайдер с товарами выбранной категории. */}
            <div className="storeProducts-slider">
                <div className="storeProducts-window">
                    <div className="storeProducts-track">
                        {/* map проходит по каждому объекту movies2
                            и создаёт для него карточку наушников. */}
                        {movies2.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-airpods" key={movie.id}>
                                <h1>{movie.h1}</h1>
                                <h2>{movie.h2}</h2>
                                {/* movie.h1, movie.h2 и movie.price
                                    берутся из текущего объекта movie. */}
                                <p>{movie.price}$</p>

                                {/* Показываем изображение текущего товара. */}
                                <img src={movie.image} alt={movie.h1} />

                                {/* Стрелочная функция нужна для того,
                                    чтобы передать текущий movie
                                    в handleAdd только в момент клика. */}
                                <button onClick={() => handleAdd(movie)}>
                                    Добавить в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* && означает: если showModal равно true,
                React покажет модальное окно; если false — не покажет. */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        {/* Здесь выводится текст,
                            который мы записали через setMessage. */}
                        <h2>{message}</h2>

                        {/* При клике закрываем модальное окно. */}
                        <button onClick={() => setShowModal(false)}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Store;
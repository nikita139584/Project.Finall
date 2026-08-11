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
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    // Массив товаров.
    // Каждый объект содержит id, изображение, название, описание и цену.
    const movies = [
        {
            id: 30,
            image: "/PhotoIphone/Iphone1.jpg",
            h1: "iPhone 17 Pro",
            h2: "Полный профессионализм.",
            price: 1099,
        },
        {
            id: 32,
            image: "/PhotoIphone/Iphone2.jpg",
            h1: "iPhone 17e",
            h2: "Всё необходимое. Невероятная производительность.",
            price: 599,
        },
        {
            id: 38,
            image: "/PhotoIphone/Iphone3.jpg",
            h1: "iPhone 17",
            h2: "Яркий. Стильный. Невероятно мощный.",
            price: 799,
        },
        {
            id: 17,
            image: "/PhotoIphone/Iphone4.jpg",
            h1: "iPhone SE",
            h2: "Компактный. Быстрый. Любимый.",
            price: 429,
        },
        {
            id: 18,
            image: "/PhotoIphone/Iphone5.jpg",
            h1: "iPhone 16",
            h2: "Ещё больше впечатлений каждый день.",
            price: 799,
        }
    ];


    // index хранит номер текущей позиции второго слайдера.
    // Начинаем с нулевой позиции.
    const [index, setIndex] = useState(0);


    // Функция next переводит слайдер на следующую позицию.
    function next() {
        setIndex(prev => {

            // Если мы дошли до последней позиции,
            // возвращаемся в начало слайдера.
            if (prev === movies.length - 3) {
                return 0;
            }

            return prev + 1;
        });
    }

    // Функция prev переводит слайдер на предыдущую позицию.
    function prev() {
        setIndex(prev => {

            // Если мы уже в начале,
            // возвращаемся в конец слайдера.
            if (prev === 0) {
                return movies.length - 3;
            }

            return prev - 1;
        });
    }

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
                    <h1>iPhone</h1>
                    <h2>Все модели. Выберите свой.</h2>
                </div>
            </div>

            {/* Основной слайдер с товарами выбранной категории. */}
            <div className="storeProducts-slider">
                {/* При клике вызываем функцию prev. */}
                <button
                    className="arrow storeProducts-leftArrow"
                    onClick={prev}
                >
                    ←
                </button>
                <div className="storeProducts-window">
                    <div
                        className="storeProducts-track"
                        style={{
                            // Сдвигаем дорожку с карточками
                            // на нужное количество пикселей.
                            transform: `translateX(-${index * 385}px)`
                        }}
                    >
                        {/* map проходит по каждому объекту movies
                            и создаёт для него карточку товара. */}
                        {movies.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-iphone" key={movie.id}>
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
                    <button
                        className="arrow storeProducts-rightArrow"
                        onClick={next}
                    >
                        →
                    </button>
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal">
                                {/* Здесь выводится текст,
                            который мы записали через setMessage. */}
                                <h2>{message}</h2>

                                <button onClick={() => setShowModal(false)}>
                                    Закрыть
                                </button>
                            </div>

                        </div>
                    )}
                </div>
            </div>


        </>
    );
}

export default Store;
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
        { title: "Планшеты", image: "/PhotoStore/store3.png", Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    // Массив товаров.
    // Каждый объект содержит id, изображение, название, описание и цену.
    const movies = [
        {
            id: 31,
            image: "/PhotoMac/Mac1.jpg",
            h1: "MacBook Pro",
            h2: "Небесно-голубой.",
            price: 1199
        },
        {
            id: 35,
            image: "/PhotoMac/Mac2.jpg",
            h1: "MacBook Air",
            h2: "Лёгкий. Быстрый. Готов к работе.",
            price: 1299
        },
        {
            id: 21,
            image: "/PhotoMac/Mac3.jpg",
            h1: "MacBook Pro",
            h2: "Мощность для профессионалов.",
            price: 1599
        },
        {
            id: 22,
            image: "/PhotoMac/Mac4.jpg",
            h1: "iMac",
            h2: "Тонкий. Яркий. Производительный.",
            price: 1299
        },
        {
            id: 23,
            image: "/PhotoMac/Mac5.jpg",
            h1: "Mac mini",
            h2: "Компактный размер. Огромная мощность.",
            price: 599
        },
        {
            id: 24,
            image: "/PhotoMac/Mac6.jpg",
            h1: "Mac Studio",
            h2: "Создан для профессионального творчества.",
            price: 1999
        },
        {
            id: 25,
            image: "/PhotoMac/Mac7.jpg",
            h1: "Studio Display",
            h2: "Потрясающее изображение.",
            price: 1599
        },
        {
            id: 26,
            image: "/PhotoMac/Mac8.jpg",
            h1: "Pro Display XDR",
            h2: "Максимальная точность изображения.",
            price: 4999
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
                    <h1>Mac</h1>
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
                            <div className="storeProducts-card storeProducts-card-mac" key={movie.id}>
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

                {/* При клике вызываем функцию next. */}
                <button
                    className="arrow storeProducts-rightArrow"
                    onClick={next}
                >
                    →
                </button>
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

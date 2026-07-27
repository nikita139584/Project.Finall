import "/src/App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Store({ add }) {

    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

    function handleAdd(movie) {
        add(movie);

        setMessage("Товар добавлен в корзину");
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }
    const movies1 = [
        { title: "Планшеты", image: "/PhotoStore/store3.png", Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    const movies = [
        {
            id: 19,
            image: "/PhotoMac/Mac1.jpg",
            h1: "MacBook Air",
            h2: "Небесно-голубой.",
            price: 999
        },
        {
            id: 20,
            image: "/PhotoMac/Mac2.jpg",
            h1: "MacBook Air",
            h2: "Лёгкий. Быстрый. Готов к работе.",
            price: 1199
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


    // Второй слайдер
    const [index, setIndex] = useState(0);


    function next() {
        setIndex(prev => {
            if (prev === movies.length - 3) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prev() {
        setIndex(prev => {
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
                                {movies1.map((movie) => (
                                    <Link key={movie.title} to={movie.Link}>
                                        <div className="card-Store">
                                            <img src={movie.image} alt={movie.title} />
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

            <div className="storeProducts-slider">
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
                            transform: `translateX(-${index * 385}px)`
                        }}
                    >
                        {movies.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-mac" key={movie.id}>
                                <h1>{movie.h1}</h1>
                                <h2>{movie.h2}</h2>
                                <p>{movie.price}$</p>

                                <img src={movie.image} alt={movie.h1} />

                                <button onClick={() => handleAdd(movie)}>
                                    Добавить в корзину
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="arrow storeProducts-rightArrow"
                    onClick={next}
                >
                    →
                </button>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>{message}</h2>

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
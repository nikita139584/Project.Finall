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
        { title: "Ноутбуки", image: "/PhotoStore/store1.png", Link: "/mac" },
        { title: "Планшеты", image: "/PhotoStore/store3.png", Link: "/iPad" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    const movies = [
        {
            id: 14,
            image: "/PhotoIphone/Iphone1.jpg",
            h1: "iPhone 17 Pro",
            h2: "Полный профессионализм.",
            price: 1099,
        },
        {
            id: 15,
            image: "/PhotoIphone/Iphone2.jpg",
            h1: "iPhone 17e",
            h2: "Всё необходимое. Невероятная производительность.",
            price: 599,
        },
        {
            id: 16,
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
                    <h1>iPhone</h1>
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
                            <div className="storeProducts-card storeProducts-card-iphone" key={movie.id}>
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
                    <button
                        className="arrow storeProducts-rightArrow"
                        onClick={next}
                    >
                        →
                    </button>
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
                </div>
            </div>


        </>
    );
}

export default Store;
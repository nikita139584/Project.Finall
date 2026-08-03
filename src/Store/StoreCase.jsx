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

        setTimeout(function () {
            setShowModal(false);
        }, 2000);
    }
    const movies1 = [
        { title: "Ноутбуки", image: "/PhotoStore/store1.png", Link: "/mac" },
        { title: "Планшеты", image: "/PhotoStore/store3.png", Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },

    ];
    const movies = [
        {
            id: 3,
            image: "/PhotoCase/Сase1.png",
            h1: "Океанский синий",
            h2: "Для iPhone 17 Pro",
            price: 59
        },
        {
            id: 4,
            image: "/PhotoCase/Сase2.png",
            h1: "Лесной зелёный",
            h2: "Для iPhone 17 Pro",
            price: 59
        },
        {
            id: 5,
            image: "/PhotoCase/Сase3.png",
            h1: "Закатный оранжевый ",
            h2: "Для iPhone 17 Pro",
            price: 59
        },
        {
            id: 6,
            image: "/PhotoCase/Сase4.png",
            h1: "Глубокий фиолетовый",
            h2: "Для iPhone 17",
            price: 49
        },
        {
            id: 7,
            image: "/PhotoCase/Сase5.png",
            h1: "Лимонно-жёлтый",
            h2: "Для iPhone 17",
            price: 49
        },
        {
            id: 8,
            image: "/PhotoCase/Сase6.png",
            h1: "Полночный чёрный",
            h2: "Для iPhone 17",
            price: 49
        },
        {
            id: 9,
            image: "/PhotoCase/Сase7.png",
            h1: "Кораллово-розовый",
            h2: "Для iPhone 17 Pro",
            price: 59
        }
    ];


    // Второй слайдер
    const [index, setIndex] = useState(0);


    function next() {
        setIndex(prev => {
            if (prev === movies.length - 2) {
                return 0;
            }
            return prev + 1;
        });
    }

    function prev() {
        setIndex(prev => {
            if (prev === 0) {
                return movies.length - 2;
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
                    <h1>Чехлы</h1>
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
                            transform: `translateX(-${index * 345}px)`
                        }}
                    >
                        {movies.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-case" key={movie.id}>
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






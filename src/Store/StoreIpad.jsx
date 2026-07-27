import "/src/App.css";
import {useState} from "react";
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
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    const movies = [
        {
            id: 10,
            image: "/PhotoIpad/Ipad1.png",
            h1: "iPad Pro",
            h2: "Невероятно тонкий. Поразительно мощный.",
            price: 999
        },
        {
            id: 11,
            image: "/PhotoIpad/Ipad2.png",
            h1: "iPad Air",
            h2: "Мощный. Яркий. Великолепный.",
            price: 599
        },
        {
            id: 12,
            image: "/PhotoIpad/Ipad3.png",
            h1: "iPad",
            h2: "Любимый. Для творчества. Волшебный.",
            price: 349
        },
        {
            id: 13,
            image: "/PhotoIpad/Ipad4.png",
            h1: "iPad mini",
            h2: "Максимум мощности. Минимум размера.",
            price: 499
        }
    ];
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
                    <h1>iPad</h1>
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
                            <div className="storeProducts-card storeProducts-card-ipad" key={movie.id}>
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
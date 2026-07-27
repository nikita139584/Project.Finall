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
        { title: "Телефоны", image: "/PhotoStore/store2.png", Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png", Link: "/Watch" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];

    const movies2 = [
        {
            id: 1,
            image: "/PhotoAirPods/airpods1.png",
            h1: "AirPods Max",
            h2: "Новые интеллектуальные функции. Ещё более глубокое погружение в звук.",
            price: 549
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
                    <h1>Наушники</h1>
                    <h2>Все модели. Выберите свои.</h2>
                </div>
            </div>

            <div className="storeProducts-slider">
                <div className="storeProducts-window">
                    <div className="storeProducts-track">
                        {movies2.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-airpods" key={movie.id}>
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
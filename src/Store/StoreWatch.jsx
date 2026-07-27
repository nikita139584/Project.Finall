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
        { title: "Наушники", image: "/PhotoStore/store6.png", Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png", Link: "/Case" },
    ];
    const movies = [
        {
            id: 27,
            image: "/PhotoAppleWatch/AppleWatch1.png",
            h1: "Apple Watch Series 10",
            h2: "Самые тонкие Apple Watch. Максимум возможностей.",
            price: 399
        },
        {
            id: 28,
            image: "/PhotoAppleWatch/AppleWatch2.png",
            h1: "Apple Watch SE",
            h2: "Всё самое необходимое. Отличная цена.",
            price: 249
        },
        {
            id: 29,
            image: "/PhotoAppleWatch/AppleWatch3.png",
            h1: "Apple Watch Ultra 2",
            h2: "Для спорта, путешествий и экстремальных условий.",
            price: 799
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
                    <h1>iPad</h1>
                    <h2>Все модели. Выберите свой.</h2>
                </div>
            </div>

            <div className="storeProducts-slider">



                <div className="storeProducts-window">
                    <div
                        className="storeProducts-track"
                    >
                        {movies.map((movie) => (
                            <div className="storeProducts-card storeProducts-card-watch" key={movie.id}>
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
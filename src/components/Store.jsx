import "/src/App.css";
import { useState} from "react";
import {Link} from "react-router-dom";
import {Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
function Store({ add }) {

    // isOpen хранит true/false — нужно ли показывать модальное окно.
    // setIsOpen меняет это значение.
    let [isOpen, setIsOpen] = useState(false)
    // Массив категорий магазина.
    // Каждый объект содержит название, изображение и ссылку на страницу.
    const movies = [
        { title: "Ноутбуки", image: "/PhotoStore/store1.png",Link: "/mac" },
        { title: "Планшеты", image: "/PhotoStore/store3.png",Link: "/iPad" },
        { title: "Телефоны", image: "/PhotoStore/store2.png",Link: "/iPhone" },
        { title: "Часы", image: "/PhotoStore/store4.png",Link: "/Watch" },
        { title: "Наушники", image: "/PhotoStore/store6.png",Link: "/AirPods" },
        { title: "Чехлы", image: "/PhotoStore/store10.png",Link: "/Case" },
    ];

    // Массив товаров из раздела "Новинки".
    // Каждый объект содержит id, изображение, название, описание и цену.
    const movies2 = [
        {
            id: 30,
            image: "/PhotoIphone/Iphone1.jpg",
            h1: "iPhone 17 Pro",
            h2: "Полный профессионализм.",
            price: 1099,
        },
        {
            id: 31,
            image: "/PhotoMac/Mac1.jpg",
            h1: "MacBook Pro",
            h2: "Магия Mac по удивительно доступной цене.",
            price: 1199,
        },
        {
            id: 32,
            image: "PhotoCard/store2.3.jpg",
            h1: "iPhone 17e",
            h2: "Максимум возможностей по отличной цене.",
            price: 599,
        },
        {
            id: 33,
            image: "PhotoCard/store2.4.jpg",
            h1: "AirPods Max 2",
            h2: "Новые интеллектуальные функции. Ещё более глубокое погружение в звук.",
            price: 549,
        },
        {
            id: 35,
            image: "/PhotoMac/Mac2.jpg",
            h1: "MacBook Air",
            h2: "Теперь ещё мощнее благодаря M5.",
            price: 1299,
        },
        {
            id: 36,
            image: "/PhotoIpad/Ipad2.png",
            h1: "iPad Air",
            h2: "Теперь ещё мощнее благодаря M4.",
            price: 749,
        },
        {
            id: 37,
            image: "PhotoCard/store2.8.jpg",
            h1: "Apple Watch Series 11",
            h2: "Лучший способ заботиться о своём здоровье.",
            price: 399,
        },
        {
            id: 38,
            image: "/PhotoIphone/Iphone3.jpg",
            h1: "iPhone 17",
            h2: "Невероятно яркий.",
            price: 799,
        },
        {
            id: 39,
            image: "PhotoCard/store2.10.jpg",
            h1: "iPhone Air",
            h2: "Самый тонкий iPhone в истории.",
            price: 999,

        },
        {
            id: 40,
            image: "PhotoCard/store2.11.jpg",
            h1: "Studio Display",
            h2: "Изображение, которое впечатляет.",
            price: 1599,

        },
        {
            id: 41,
            image: "PhotoCard/store2.12.jpg",
            h1: "Studio Display XDR",
            h2: "Безупречная чёткость каждого пикселя.",
            price: 3299,

        },
        {
            id: 42,
            image: "PhotoCard/store2.13.jpg",
            h1: "Apple Watch SE 3",
            h2: "Ходите. Общайтесь. Следите за активностью. Любите.",
            price: 249,

        }
    ];

    // index2 хранит номер текущей позиции второго слайдера.
    // Начинаем с нулевой позиции.
    const [index2, setIndex2] = useState(0);

    // next2 переводит слайдер на следующую позицию.
    function next2() {
        setIndex2(prev => {

            // Если дошли до последней позиции,
            // возвращаемся в начало.
            if (prev === movies2.length - 4) {
                return 0;
            }

            return prev + 1;
        });
    }

    // prev2 переводит слайдер на предыдущую позицию.
    function prev2() {
        setIndex2(prev => {

            // Если уже в начале,
            // возвращаемся в конец слайдера.
            if (prev === 0) {
                return movies2.length - 4;
            }

            return prev - 1;
        });
    }

    return (
        <div className="Store">
            <div className="Store-Header">
                <h1>Магазин</h1>
            </div>

            {/* Первый слайдер */}
            <div className="slider-Store">

                <div className="window-Store">
                    <div className="track-Store">

                        {/* map проходит по каждому объекту movies
                            и создаёт карточку категории.
                            Link нужен для перехода на другую страницу React.
                            to берётся из свойства Link текущего объекта. */}
                        {movies.map((movie) => (
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

            <div className="Store-H1">
                <h1>Новинки.</h1>
                <p>Посмотрите, что нового прямо сейчас.</p>
            </div>

            {/* Второй слайдер с новинками. */}
            <div className="slider-Store">
                {/* При клике вызываем функцию prev2. */}
                <button className="arrow left-Store" onClick={prev2}>
                    ←
                </button>

                <div className="window-Store">
                    <div
                        className="track-Store"
                        style={{
                            // Сдвигаем дорожку с карточками
                            // в зависимости от текущего index2.
                            transform: `translateX(-${index2 * 320}px)`
                        }}
                    >
                        {/* map проходит по каждому товару movies2
                            и создаёт для него карточку. */}
                        {movies2.map((movie) => {

                            return (
                                <div key={movie.id} className="card-Store">
                                    <div className="card-Store-body">
                                        <h1>{movie.h1}</h1>
                                        <h2>{movie.h2}</h2>
                                        {/* Показываем цену и изображение текущего товара. */}
                                        <p>{movie.price}$</p>
                                        <img src={movie.image} alt={movie.h1} />

                                        {/* При нажатии добавляем текущий товар в корзину
                                            и открываем модальное окно. */}
                                        <button
                                            onClick={() => {
                                                // Передаём выбранный товар в add из App.jsx.
                                                add(movie);

                                                // Показываем модальное окно.
                                                setIsOpen(true);
                                            }}
                                        >
                                            Добавить в корзину
                                        </button>



                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* При клике вызываем функцию next2. */}
                <button className="arrow right-Store" onClick={next2}>
                    →
                </button>
            </div>

            {/* Dialog — компонент модального окна из Headless UI.
                open получает состояние окна, onClose его закрывает. */}
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                {/* Затемнение */}
                <div className="modal-overlay" aria-hidden="true" />

                {/* Центрирование окна */}
                <div className="modal-overlay">
                    <DialogPanel className="modal">
                        {/* Заголовок модального окна. */}
                        <DialogTitle>
                            Товар добавлен в корзину
                        </DialogTitle>

                        <div>
                            {/* Кнопка вручную закрывает модальное окно. */}
                            <button
                                onClick={() => setIsOpen(false)}

                            >
                                Закрыть
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>

    );
}

export default Store;
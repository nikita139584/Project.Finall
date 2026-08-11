
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./Form/Form.jsx";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Store from "./components/Store";
import StoreMac from "/src/Store/StoreMac.jsx";
import IPad from "/src/Store/StoreIpad.jsx";
import Case from "/src/Store/StoreCase.jsx";
import IPhone from "/src/Store/StoreIPhone.jsx";
import Support from "/src/components/Support.jsx";
import Watch from "/src/Store/StoreWatch.jsx";
import AirPods from "/src/Store/StoreAirPods.jsx";
import Cart from "./components/Cart";


// Главная страница
function Home() {
    return (
        <>
            <Header />
        </>
    );
}


function App() {

    // Создаёт состояние cart
    // Сначала берёт корзину из localStorage если она там уже есть
    const [cart, setcart] = useState(() => {

        // Берёт корзину из localStorage
        const savedCart = localStorage.getItem("cart");

        // Если корзина есть то превращает строку обратно в массив
        // Если нет то создаёт пустой массив
        return savedCart ? JSON.parse(savedCart) : [];
    });


    // Каждый раз когда корзина меняется сохраняет её в localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    // Функция добавления товара в корзину
    function Add(product) {

        // prev это старая корзина до изменения
        setcart(prev => {

            // Проверяет есть ли уже такой товар в корзине
            const exists = prev.find(item => item.id === product.id);


            // Если товар уже есть
            if (exists) {

                // Проходит по всей корзине
                return prev.map(item =>

                    // Если id совпал то увеличивает количество на 1
                    item.id === product.id
                        ? { ...item, count: item.count + 1 }

                        // Остальные товары не изменяет
                        : item
                );
            }


            // Если такого товара ещё нет то добавляет его в конец корзины
            // count сразу ставится 1
            return [...prev, { ...product, count: 1 }];
        });
    }


    // Удаляет последний товар из корзины
    function Del() {

        // slice(0,-1) копирует массив кроме последнего элемента
        setcart(prev => prev.slice(0, -1));
    }


    return (
        <>
            <Menu />

            <Routes>

                {/* path="/" означает главную страницу сайта. */}
                <Route path="/" element={<Home />} />

                {/* Передаём корзину и функцию Add в магазин. */}
                <Route
                    path="/store"
                    element={<Store cart={cart} add={Add} />}
                />

                {/* Передаём корзину и функцию удаления в корзину. */}
                <Route
                    path="/cart"
                    element={<Cart cart={cart} del={Del} />}
                />

                {/* Страница ноутбуков. */}
                <Route path="/mac" element={<StoreMac add={Add} />} />
                <Route path="/form" element={<Form />} />
                {/* Страница планшетов. */}
                <Route path="/iPad" element={<IPad add={Add} />} />

                {/* Страница чехлов. */}
                <Route path="/Case" element={<Case add={Add} />} />

                {/* Страница наушников. */}
                <Route path="/AirPods" element={<AirPods add={Add}/>} />

                {/* Страница iPhone. */}
                <Route path="/iPhone" element={<IPhone add={Add} />} />

                {/* Страница часов. */}
                <Route path="/Watch" element={<Watch add={Add}/>} />

                {/* Страница поддержки. */}
                <Route path="/Support" element={<Support />} />

            </Routes>
        </>
    );
}

export default App;


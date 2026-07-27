import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";

// Подключаем все компоненты
import Header from "/src/components/Header";
import Photo from "/src/components/Photo";
import PhotoMini from "/src/components/PhotoMini";
import Menu from "/src/components/Menu.jsx";
import Store from "/src/components/Store";
import StoreMac from "/src/Store/StoreMac.jsx";
import IPad from "/src/Store/StoreIpad.jsx";
import Case from "/src/Store/StoreCase.jsx";
import IPhone from "/src/Store/StoreIphone.jsx";
import Support from "/src/components/Support.jsx";
import Watch from "/src/Store/StoreWatch.jsx";
import AirPods from "/src/Store/StoreAirPods.jsx";
import Cart from "/src/components/Cart.jsx";
import Form from "/src/Form/Form.jsx";
import Coockies from "/src/components/Coockies";

// Главная страница сайта
function Home() {
    return (
        <>
            {/* Показывает окно с cookies */}
            <Coockies />

            {/* Верхняя часть сайта */}
            <Header />

            {/* Большие фотографии */}
            <Photo />

            {/* Мини-слайдер */}
            <PhotoMini />
        </>
    );
}

// Reducer отвечает за изменения корзины
// state - текущая корзина
// action - действие которое нужно выполнить
function cartReducer(state, action) {
    switch (action.type) {

        // Добавление товара
        case "add": {

            // Проверяем есть ли уже такой товар в корзине
            const exists = state.find(item => item.id === action.product.id);

            // Если товар уже есть
            if (exists) {

                // Проходим по всей корзине
                // Если id совпадает увеличиваем количество
                return state.map(item =>
                    item.id === action.product.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }


            // Если товара ещё нет
            // Добавляем его в массив и сразу ставим количество 1
            return [...state, { ...action.product, count: 1 }];

        }

        // Удаляет последний товар из корзины
        case "delete":
            return state.slice(0, -1);

        // Если действие неизвестно просто возвращаем старую корзину
        default:
            return state;
    }
}

function App() {

    // useReducer работает почти как useState
    // Только удобно когда изменений много

    const [cart, dispatch] = useReducer(

        // Reducer который будет менять корзину
        cartReducer,

        // Начальное значение если localStorage пустой
        [],

        // Эта функция выполняется только один раз при запуске сайта
        () => {

            // Берёт сохранённую корзину
            const savedCart = localStorage.getItem("cart");

            // Если корзина есть переводим JSON обратно в массив
            // Если нет возвращаем пустой массив
            return savedCart ? JSON.parse(savedCart) : [];
        }
    );

    // Каждый раз когда корзина меняется
    // сохраняем её в localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Функция добавления товара
    function Add(product) {

        // Отправляет reducer действие add
        dispatch({
            type: "add",
            product,
        });
    }

    // Функция удаления товара
    function Del() {

        // Отправляет reducer действие delete
        dispatch({
            type: "delete",
        });
    }

    return (
        <>
            {/* Передаём функцию Add всем компонентам через Context */}


                {/* Меню отображается на всех страницах */}
                <Menu />

                {/* Cookies тоже отображаются на всех страницах */}
                <Coockies />

                {/* Здесь находятся все страницы сайта */}
                <Routes>

                    {/* Главная страница */}
                    <Route path="/" element={<Home />} />

                    {/* Общая страница магазина */}
                    <Route path="/store" element={<Store add={Add} />} />

                    {/* Корзина */}
                    <Route
                        path="/cart"
                        element={<Cart cart={cart} del={Del} />}
                    />

                    {/* Страница Mac */}
                    <Route
                        path="/mac"
                        element={<StoreMac cart={cart} add={Add} />}
                    />

                    {/* Страница iPad */}
                    <Route
                        path="/iPad"
                        element={<IPad cart={cart} add={Add} />}
                    />

                    {/* Страница чехлов */}
                    <Route
                        path="/Case"
                        element={<Case cart={cart} add={Add} />}
                    />

                    {/* Страница AirPods */}
                    <Route
                        path="/AirPods"
                        element={<AirPods cart={cart} add={Add} />}
                    />

                    {/* Страница iPhone */}
                    <Route
                        path="/iPhone"
                        element={<IPhone cart={cart} add={Add} />}
                    />

                    {/* Страница Watch */}
                    <Route
                        path="/Watch"
                        element={<Watch cart={cart} add={Add} />}
                    />

                    {/* Страница поддержки */}
                    <Route
                        path="/Support"
                        element={<Support cart={cart} add={Add} />}
                    />

                    {/* Страница оформления заказа */}
                    <Route
                        path="/Form"
                        element={<Form cart={cart} add={Add} />}
                    />

                </Routes>

        </>
    );
}

// Делаем компонент доступным для использования в других файлах
export default App;
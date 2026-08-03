import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer } from "react";
// Корзина хранится именно в App,
// потому что она нужна сразу нескольким страницам.
// App — их ближайший общий родитель.
// Подключаем все компоненты
import Header from "/src/components/Header";
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

        </>
    );
}

// Reducer отвечает за все изменения корзины.
// Если потом появятся новые действия, достаточно будет добавить новый case.
function cartReducer(state, action) {
    switch (action.type) {

        case "add": {

            // Ищем первый товар с таким же id
            const exists = state.find(item => item.id === action.product.id);

            // Если товар уже есть в корзине
            if (exists) {

                // map проходит по всему массиву и создаёт новый массив
                // Если id совпал - увеличиваем count
                // Если нет - оставляем товар без изменений
                return state.map(item =>
                    item.id === action.product.id
                        ? {
                            // Копируем все свойства старого объекта
                            // и меняем только count
                            ...item,
                            count: item.count + 1
                        }
                        : item
                );
            }

            // Если такого товара ещё нет
            // Создаём новый массив, копируем старый
            // и добавляем новый товар с количеством 1
            return [
                ...state,
                {
                    ...action.product,
                    count: 1
                }
            ];
        }

        // Удаляем последний товар из корзины
        case "delete":
            return state.slice(0, -1);

        // Если пришёл неизвестный type,
        // просто возвращаем старую корзину
        default:
            return state;
    }
}

function App() {

    // useReducer похож на useState,
    // но изменение состояния происходит через reducer

    const [cart, dispatch] = useReducer(

        // Reducer решает как менять корзину
        cartReducer,

        // Если localStorage пустой,
        // начальное значение будет пустой массив
        [],

        // Эта функция выполняется только один раз
        // когда приложение запускается
        () => {

            // Пытаемся получить корзину из localStorage
            const savedCart = localStorage.getItem("cart");

            // Если корзина есть,
            // JSON.parse превращает строку обратно в массив
            // Если нет - возвращаем пустой массив
            return savedCart
                ? JSON.parse(savedCart)
                : [];
        }
    );

    // Каждый раз когда cart изменяется,
    // автоматически сохраняем её в localStorage
    useEffect(() => {

        // stringify превращает массив в строку,
        // потому что localStorage хранит только строки
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

    }, [cart]); // Выполнить только когда cart изменился

    function Add(product) {

        // dispatch отправляет reducer действие add
        // product - товар который нужно добавить
        dispatch({
            type: "add",
            product,
        });
    }

    function Del() {

        // product здесь не нужен,
        // потому что удаляется просто последний товар
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
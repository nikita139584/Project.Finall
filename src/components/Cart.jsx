import "/src/App.css";

function Cart({ cart, del }) {
    // Через props получаем массив cart и функцию del из App.jsx

    // reduce проходит по всему массиву корзины
    // total хранит общую сумму товаров
    // item — текущий товар
    // item.price * item.count — цена за все экземпляры этого товара
    // 0 — начальное значение total
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.count,
        0
    );

    return (
        <div className="cart">

            {/* Если длина массива равна 0 — корзина пустая */}
            {cart.length === 0 ? (
                <h2 className="cart-empty">Корзина пуста</h2>
            ) : (
                <>

                    {/* При нажатии вызывается функция del */}
                    <button className="cart-clear" onClick={del}>
                        Удалить последний
                    </button>

                    {/* map создаёт карточку для каждого товара */}
                    {cart.map(item => (

                        // key нужен чтобы React понимал какой именно это элемент
                        // Используем id потому что он не меняется
                        <div className="cart-item" key={item.id}>

                            <img src={item.image} alt="" />

                            <div className="cart-item-info">

                                <h1>{item.h1}</h1>

                                <h2>{item.h2}</h2>

                                {/* Сначала React считает выражение,
                                   потом показывает результат */}
                                <p>{item.count * item.price}$</p>

                                <p>{item.p}</p>

                                {/* Показываем количество товара */}
                                <h3>Количество: {item.count}</h3>

                            </div>

                            {/* Показываем уже готовую сумму,
                               а не считаем reduce ещё раз */}


                        </div>

                    ))}

                    <h2 className="Total-price">
                        Итого: {totalPrice}$
                    </h2>
                </>
            )}

        </div>
    );
}

export default Cart;
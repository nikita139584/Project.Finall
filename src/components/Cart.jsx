import "/src/App.css";

function Cart({ cart, del }) { //Ипорт функций через пропс
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.count,
        0
    );
    return (
        <div className="cart">

            {cart.length === 0 ? ( //Если длина корзины 0 то пишет Корзина пуста
                <h2 className="cart-empty">Корзина пуста</h2>
            ) : (
                <>
                    <button className="cart-clear" onClick={del}>Удалить последний</button>

                    {cart.map(item => ( //
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt="" />
                            <div className="cart-item-info">
                                <h1>{item.h1}</h1>
                                <h2>{item.h2}</h2>
                                <p>{item.count * item.price}$</p>

                                <p>{item.p}</p>
                                <h3>Количество: {item.count}</h3>
                            </div>

                        </div>

                    ))}
                </>
            )}
            <h2 className="Total-price">Итого:{totalPrice}$</h2>
        </div>
    );
}

export default Cart;
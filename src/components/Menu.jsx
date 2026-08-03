import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="header-nav">
            <a href="/" className="header-logo" aria-label="Apple">
                <img src="/img/ikon.png" alt="Apple Logo" />
            </a>

            <div className="header-nav-links">
                <Link to="/store">Магазин</Link>
                <Link to="/mac">Ноутбук</Link>
                <Link to="/iPad">Планшеты</Link>
                <Link to="/iPhone">Телефоны</Link>
                <Link to="/Watch">Часы</Link>
                <Link to="/AirPods">Наушники</Link>
                <Link to="/Case">Чехлы</Link>
                <Link to="/Support">Поддержка</Link>
            </div>



            <div className="header-icons">
                <Link to="/form" className="icon-item" aria-label="Профиль">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6"/>
                    </svg>
                </Link>

                <Link to="/cart" className="icon-item" aria-label="Корзина">
                    <svg viewBox="0 0 24 24">
                        <path d="M6 8h12l-1 12H7L6 8z" />
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Menu;
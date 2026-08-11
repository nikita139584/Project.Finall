import "/src/App.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <section className="hero">

                {/* ===== MAC ===== */}
                {/* ===== MAC ===== */}
                <div className="hero-content hero-mac big">

                    <h1 className="hero-title">MacBook Air</h1>
                    <h2>Теперь ещё мощнее благодаря M5.</h2>

                    <div className="hero-buttons">
                        <Link to="/mac">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>

                    <img
                        className="hero-image"
                        src="/img/MackbockHeader.png"
                        alt="MacBook Air"
                    />
                </div>

                {/* ===== iPHONE ===== */}
                <div className="hero-content hero-iphone big">
                    <h1 className="hero-title">iPhone</h1>
                    <h2>Познакомьтесь с новой линейкой iPhone.</h2>

                    <div className="hero-buttons">
                        <Link to="/iPhone">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>

                    <img
                        className="hero-image"
                        src="/img/hero_iphone_family__be5jkzxszb1e_large_2x.jpg"
                        alt="iPhone"
                    />

                </div>

                {/* ===== iPad ===== */}
                <div className="hero-content hero-ipad big">

                    <h1 className="hero-title">iPad</h1>
                    <h2>Теперь ещё мощнее благодаря M4.</h2>

                    <div className="hero-buttons">
                        <Link to="/iPad">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>

                    <img
                        className="hero-image"
                        src="/img/iPadHeader.jpg"
                        alt="iPad"
                    />

                </div>

                {/* ===== MacBook Pro ===== */}
                <div className="hero-content-mini dark">

                    <h1 className="hero-title">MacBook Pro</h1>
                    <h2>Теперь с M5, M5 Pro и M5 Max.</h2>

                    <div className="hero-buttons">
                        <Link to="/mac">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>

                    <img
                        className="hero-image"
                        src="/img/MackbookProHeader.jpg"
                        alt="MacBook Pro"
                    />



                </div>

                {/* ===== AirPods Pro ===== */}
                <div className="hero-content-mini dark">
                    <h1 className="hero-title">AirPods Pro 3</h1>
                    <h2>Лучшее в мире активное шумоподавление среди внутриканальных наушников.</h2>

                    <div className="hero-buttons">
                        <Link to="/AirPods">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>
                    <div className="hero-image-wrapper">
                        <img
                            className="hero-image"
                            src="/img/AirpodsproHeader.jpg"
                            alt="AirPods Pro"
                        />
                    </div>


                </div>

                {/* ===== Watch ===== */}
                <div className="hero-content-mini">

                    <h1 className="hero-title">WATCH SERIES 11</h1>
                    <h2>Лучший способ заботиться о своём здоровье.</h2>

                    <div className="hero-buttons">
                        <Link to="/Watch" className="hero-button-primary">
                            Купить
                        </Link>
                    </div>

                    <img
                        className="hero-image"
                        src="/img/Watchseries11Header.jpg"
                        alt="Watch Series 11"
                    />



                </div>

                {/* ===== iPad Pro ===== */}
                <div className="hero-content-mini dark">
                    <h1 className="hero-title">iPad Pro</h1>
                    <h2>Передовой искусственный интеллект и революционные возможности.</h2>

                    <div className="hero-buttons">
                        <Link to="/iPad">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>


                    <img
                        className="hero-image"
                        src="/img/ipadProHeader.jpg"
                        alt="iPad Pro"
                    />



                </div>

            </section>

        </header>
    );
}

export default Header;
import "/src/App.css";
import { Link } from "react-router-dom";


function Header() {

    return (
        <header className="header">

            {/* ===== 1. НАВИГАЦИЯ ===== */}

            {/* ===== 2. HERO ===== */}
            <section className="hero">

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


                        <img
                            className="hero-image"
                            src="../../public/img/hero_iphone_family__be5jkzxszb1e_large_2x.jpg"
                            alt="iPhone"
                        />


                    <h1 className="hero-title">iPhone</h1>
                    <h2>Познакомьтесь с новой линейкой iPhone.</h2>

                    <div className="hero-buttons">
                        <Link to="/iPhone">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>



                </div>
                {/* ===== Ipad ===== */}
                <div className="hero-content hero-ipad big">



                        <img
                            className="hero-image"
                            src="/img/iPadHeader.jpg"
                            alt="iPad"
                        />


                    <h1 className="hero-title">Ipad</h1>
                    <h2>Теперь ещё мощнее благодаря M4.</h2>

                    <div className="hero-buttons">

                        <Link to="/iPad">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>


                </div>


                {/* ===== Mackbook ===== */}
                <div className="hero-content-mini dark">


                        <img
                            className="hero-image"
                            src="../../public/img/MackbookProHeader.jpg"
                            alt="MackbookProHeader"
                        />


                    <h1 className="hero-title">MackBook Pro</h1>
                    <h2>Теперь с M5, M5 Pro и M5 Max.</h2>

                    <div className="hero-buttons">

                        <Link to="/mac">
                            <button className="hero-button-secondary">
                                Купить
                            </button>
                        </Link>
                    </div>


                </div>

                {/* ===== Airpodspro===== */}
                <div className="hero-content-mini dark">


                        <img
                            className="hero-image"
                            src="../../public/img/AirpodsproHeader.jpg"
                            alt="AirpodsproHeader"
                        />


                    <h1 className="hero-title">AirPods Pro 3</h1>
                    <h2>Лучшее в мире активное шумоподавление среди внутриканальных наушников.</h2>

                    <div className="hero-buttons">
                        <Link to="/AirPods">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>



                    </div>


                </div>




                {/* ===== Watchseries11===== */}
                <div className="hero-content-mini dark">


                        <img
                            className="hero-image"
                            src="../../public/img/Watchseries11Header.jpg"
                            alt="Watchseries11"
                        />


                    <h1 className="hero-title">𝗪𝗔𝗧𝗖𝗛 SERIES 11</h1>
                    <h2>Лучший способ заботиться о своём здоровье.</h2>

                    <div className="hero-buttons">
                        <Link to="/Watch">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>


                </div>



                {/* ===== ipadPro===== */}
                <div className="hero-content-mini">


                        <img
                            className="hero-image"
                            src="../../public/img/ipadProHeader.jpg"
                            alt="ipadPro"
                        />


                    <h1 className="hero-title">iPad Pro</h1>
                    <h2>Передовой искусственный интеллект и революционные возможности.</h2>

                    <div className="hero-buttons">
                        <Link to="/iPad">
                            <button className="hero-button-primary">
                                Купить
                            </button>
                        </Link>
                    </div>


                </div>


                {/* ===== Apple Card===== */}


            </section>
            <div className="Endes">
                <h1>Безграничные развлечения.
                </h1>


            </div>
        </header>
    );
}   

export default Header;
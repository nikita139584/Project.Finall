import { useState } from "react";
import "/src/App.css";
//Масив с фото
const movies = [
    {

        image: "/Photo/1.jpg",
        link: "https://tv.apple.com/us/show/silo/umc.cmc.3yksgc857px0k0rqe5zd4jice "
    },
    {

        image: "/Photo/2.jpg",
        link: "https://tv.apple.com/us/show/the-savant/umc.cmc.2i6x5wqf8p4xq7u6gx0n7zv9c"
    },
    {

        image: "/Photo/3.jpg",
        link: "https://tv.apple.com/us/show/cape-fear/umc.cmc.2wd2b7r6s4dlfm2m0z6nmn6gx "
    },
    {

        image: "/Photo/4.jpg",
        link: "https://tv.apple.com/us/sporting-event/formula-1/umc.cse.6gf64372hk8m4g7xgpjdh0xt5 "
    },
    {

        image: "/Photo/5.jpg",
        link: "https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh "
    },
    {

        image: "/Photo/6.jpg",
        link: "https://tv.apple.com/us/channel/mls-season-pass/tvs.sbd.7000"
    },
    {

        image: "/Photo/7.jpg",
        link: "https://tv.apple.com/us/show/sugar/umc.cmc.4fajfk4nipmjw2sybtt2il91l "
    },
    {

        image: "/Photo/8.jpg",
        link: "https://tv.apple.com/us/channel/friday-night-baseball/tvs.sbd.7001 "
    },
    {

        image: "/Photo/9.jpg",
        link: "https://tv.apple.com/us/show/your-friends-neighbors/umc.cmc.1b8r5k6jv6sz0r8d8j8m0j6dw "
    }
];

export default function Photo() {

    // Переманая с распорожения фото setIndex что менять число 1 начальное фото то есть 2(0-1 1-2)
    const [index, setIndex] = useState(1);

    // Функция для того чтобы когда дойтдёт до пседний картинки то оно отправляеет назад
    function next() {
        setIndex((prev) => {

            //если элемент в массиве последней то оно перекидывает на начало а если элемент не последний то даёт
            //Тут -1 потому что индекси считают от 0 и когда он дойдёт до конца то индекс буде 8 а фото уже закончатся
            if (prev === movies.length - 1) {
                return 0;
            }

            // Увеличивает индекс на 1 (например, с 3 до 4), поэтому показывается следующая карточка
            return prev + 1;
        });
    }

    // Тут точно так же только в другую сторону
    function prev() {
        setIndex((prev) => {

            if (prev === 0) {
                return movies.length - 1;
            }
            return prev - 1;
        });
    }

    return (

        <div className="slider">

            {/* Кнопка вперед которая вызывает функцию prev */}
            <button
                className="arrow left"
                onClick={prev}
            >
                ←
            </button>

            <div className="window">
                <div

                    className="track"
                    style={{
                        //Сдвигает массив на инедкс (от 0 до 8 ) * 900 + 450 px
                        transform: `translateX(calc(50% - ${index * 900 + 490}px))`
                    }}
                >
                    {
                        // Создаёт карточку через массив с верху
                        // Вот эта строке приминает array.map((элемент, индекс) => {})
                        // То есть movie это элемент то есть фото и ссылка
                        // А i это индекс
                        movies.map((movie, ) => (
                            <div className={"card active"}>
                                <a href={movie.link}>
                                    <img src={movie.image} alt={movie.title} />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Кнопка вперед которая вызывает функцию next*/}
            <button
                className="arrow right"
                onClick={next}
            >
                →
            </button>
        </div>
    );
}
import { useState } from "react";
import "/src/App.css";
//Масив с фото
const movies = [
    {
        image: "PhotoMini/1mini.jpg",
        link: "https://fitness.apple.com/ "
    },
    {

        image: "PhotoMini/2mini.jpg",
        link: "https://music.apple.com/us/artist/sabrina-carpenter/390647681 "
    },
    {

        image: "PhotoMini/3mini.jpg",
        link: "https://apps.apple.com/us/app/hello-kitty-island-adventure/id1553505132 "
    },
    {

        image: "PhotoMini/4mini.jpg",
        link: "https://fitness.apple.com/us/workout-type/yoga "
    },
    {

        image: "PhotoMini/5mini.jpg",
        link: "https://music.apple.com/us/playlist/a-list-pop/pl.2b0e6e332fdf4b7a91164da3162127b5 "
    },
    {
        image: "PhotoMini/6mini.jpg",
        link: "https://apps.apple.com/us/app/what-the-clash/id6472334226 "
    },
    {

        image: "PhotoMini/7mini.jpg",
        link: "https://fitness.apple.com/ "
    },
    {
        image: "PhotoMini/8mini.jpg",
        link: "https://music.apple.com/us/playlist/new-music-daily/pl.u-8aAVZ6Virv7zjv "
    },
    {

        image: "PhotoMini/9mini.jpg",
        link: "https://apps.apple.com/us/story/id1451236544 "
    },


];
export default function PhotoMini() {
    // Переманая с распорожения фото setIndex что менять число 3 начальное фото то есть 4(0-1 1-2 2-3 3-4)
    const [index, setIndex] = useState(3);
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

        // Кнопка вперед которая вызывает функцию prev
        <div className="slider mini">
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
                        //Сдвигает массив на инедкс (от 0 до 9 ) * 250 + 125 px
                        transform: `translateX(calc(50% - ${index * 275 + 125}px))`
                    }}
                >

                    {
                        // Создаёт карточку через массив с верху
                        // Вот эта строке приминает array.map((элемент, индекс) => {})
                        // То есть movie это элемент то есть фото и ссылка
                        // А i это индекс
                        movies.map((movie) => (
                            <div

                                className={"card active"}
                            >
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
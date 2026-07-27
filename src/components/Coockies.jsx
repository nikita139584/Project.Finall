import { useEffect, useRef } from "react";

//useRef это как useState но при изменении не вызывает повторный

// Функция создаёт или изменяет cookie
function setCookie(name, value, days) {

    // Записываем cookie:
    // name=value
    // max-age - сколько секунд хранить cookie
    // path=/ - cookie доступна на всём сайте
    document.cookie =
        `${name}=${value}; max-age=${days * 86400}; path=/`;
}

// Функция получает значение cookie по имени
function getCookie(name) {

    // document.cookie выглядит примерно так:
    // "date=Fri Jul 25 2026; time=120"

    return document.cookie

        // Разделяем строку на отдельные cookie
        .split("; ")

        // Ищем cookie, которая начинается с нужного имени
        .find(row => row.startsWith(name + "="))

        // Если нашли, берём значение после "="
        ?.split("=")[1];
}

export default function TodayTimer() {

    // Здесь будет храниться время открытия страницы
    const start = useRef();

    useEffect(() => {

        // Запоминаем время открытия страницы
        start.current = Date.now();

        // Получаем сегодняшнюю дату
        const today = new Date().toDateString();

        // Если сегодня первый запуск сайта
        if (getCookie("date") !== today) {

            // Записываем сегодняшнюю дату
            setCookie("date", today, 1);

            // Обнуляем время за сегодняшний день
            setCookie("time", 0, 1);
        }

        // Функция сохраняет проведённое время в cookie
        const saveTime = () =>

            setCookie(

                // Имя cookie
                "time",

                // Старое сохранённое время +
                // время текущей сессии
                (Number(getCookie("time")) || 0) +
                Math.floor((Date.now() - start.current) / 1000),

                // Хранить 1 день
                1
            );

        // Каждые 10 секунд выводим время в консоль
        const interval = setInterval(() => {

            console.log(
                `Время на сайте сегодня: ${
                    (Number(getCookie("time")) || 0) +
                    Math.floor((Date.now() - start.current) / 1000)
                } секунд`
            );

        }, 10000);

        // Перед закрытием страницы сохраняем время
        window.addEventListener("beforeunload", saveTime);

        // Очистка при размонтировании компонента
        return () => {

            // Останавливаем таймер
            clearInterval(interval);

            // Сохраняем время
            saveTime();

            // Удаляем обработчик события
            window.removeEventListener("beforeunload", saveTime);
        };

    }, []);

    // Компонент ничего не отображает
    return null;
}
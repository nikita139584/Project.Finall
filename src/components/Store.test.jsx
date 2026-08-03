import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import Store from "./Store.jsx";
import { MemoryRouter } from "react-router-dom";
describe("Store", () => {

    it("отображает заголовок Магазин", () => {
        render(
            <MemoryRouter>
                <Store add={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("heading", { name: "Магазин" })
        ).toBeInTheDocument();
    });

    it("отображает заголовок Новинки", () => {
        render(
            <MemoryRouter>
                <Store add={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getAllByRole("heading", { name: "Новинки.",level: 1, })
        ).toHaveLength(2);
    });

    it("отображает кнопку Добавить в корзину", () => {
        render(
            <MemoryRouter>
                <Store add={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getAllByRole("button", {
                name: "Добавить в корзину"
            })
        ).toHaveLength(39);
    });

    it("отображает ссылки", () => {
        render(
            <MemoryRouter>
                <Store add={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getAllByRole("link")
        ).toHaveLength(24);
    });

    it("отображает изображения", () => {
        render(
            <MemoryRouter>
                <Store add={vi.fn()} />
            </MemoryRouter>
        );

        expect(
            screen.getAllByRole("img")
        ).toHaveLength(95);
    });

});
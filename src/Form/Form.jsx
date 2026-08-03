// Form/Form.jsx
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "/src/App.css";

function Form() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors},
    } = useForm({ mode: "onBlur" });

    function closeForm() {
        navigate("/");
    }

    function onSubmit(data) {
        console.log(data);
        reset();
        closeForm(); // закрываем модалку после успешной регистрации
    }

    return (
        <div className="modal-overlay" onClick={closeForm}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeForm}>
                    ×
                </button>

                <h2>Введите данные для регистрации</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    {/* Имя */}
                    <p>Имя *</p>

                    <input
                        type="text"
                        placeholder="Ваше имя"
                        {...register("name", {
                            required: "Введите имя",
                            minLength: {
                                value: 2,
                                message: "Имя должно содержать минимум 2 символа",
                            },
                        })}
                    />

                    {errors.name && (
                        <p className="error">{errors.name.message}</p>
                    )}

                    {/* Email */}
                    <p>Email *</p>

                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Введите email",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Некорректный email",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}

                    {/* Телефон */}
                    <p>Телефон *</p>

                    <input
                        type="tel"
                        placeholder="+380..."
                        {...register("phone", {
                            required: "Введите телефон",
                            pattern: {
                                value: /^\+?[0-9]{12,15}$/,
                                message: "Некорректный номер телефона",
                            },
                        })}
                    />

                    {errors.phone && (
                        <p className="error">{errors.phone.message}</p>
                    )}

                    {/* Выпадающий список */}
                    <p>Страна</p>

                    <select {...register("country")}>
                        <option value="Украина">Украина</option>
                        <option value="Польша">Польша</option>
                        <option value="Германия">Германия</option>
                    </select>

                    {/* Согласие с условиями */}
                    <label>
                        <input
                            type="checkbox"
                            {...register("agreement", {
                                required: "Необходимо принять условия",
                            })}
                        />
                        Я соглашаюсь с условиями обработки персональных данных
                    </label>

                    {errors.agreement && (
                        <p className="error">{errors.agreement.message}</p>
                    )}

                    <br />
                    <br />
                    <button type="submit">Зарегистрироваться</button>

                </form>

                <p>Все данные хранятся в безопасности.</p>
            </div>
        </div>
    );
}

export default Form;








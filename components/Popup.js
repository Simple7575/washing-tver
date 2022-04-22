import { ReCAPTCHA } from "react-google-recaptcha";
import CloseSVG from "./Contacts/svg/CloseSVG.js";

import { ToglePopup } from "../pages/_app.js";
import { useContext } from "react";
import styles from "../styles/Popup.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const phoneSchema = Yup.string()
    .phone("ru", true, "Некорректный номер")
    .required("Обязательное поле");

const validationSchema = Yup.object({
    firstName: Yup.string().required("Обязательное поле"),
    number: phoneSchema.required("hi"),
});

export default function Popup() {
    const { popupState, setPopupState } = useContext(ToglePopup);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            secondName: "",
            number: "",
            mail: "",
            "user-message": "",
        },
        onSubmit: (values, onSubmitProps) => {
            fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "Message", ...values }),
            })
                .then(() => {
                    onSubmitProps.resetForm();
                })
                .catch((error) => alert(error));
        },
        validationSchema,
    });

    return (
        <div className={`${styles.container} ${styles[popupState]}`}>
            <div
                className={styles.close}
                onClick={() => setPopupState("close")}
            >
                <CloseSVG />
            </div>
            <div className={styles.popup_inner_container}>
                <h2>Обратная связь</h2>

                <form
                    onSubmit={formik.handleSubmit}
                    name="Message"
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="Message" />
                    <div className={styles.inputs__wrapper}>
                        <label className={styles.lables} htmlFor="firstName">
                            <input
                                className={`${styles.inputs} ${
                                    formik.values.firstName.length > 0
                                        ? `${styles.full}`
                                        : ""
                                }`}
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            <span className={styles.placeholder}>Имя</span>
                            <div className={styles.errorMessage}>
                                {formik.touched.firstName &&
                                formik.errors.firstName
                                    ? formik.errors.firstName
                                    : ""}
                            </div>
                        </label>
                        <label className={styles.lables} htmlFor="secondName">
                            <input
                                className={`${styles.inputs} ${
                                    formik.values.secondName.length > 0
                                        ? `${styles.full}`
                                        : ""
                                }`}
                                type="text"
                                id="secondName"
                                name="secondName"
                                value={formik.values.secondName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className={styles.placeholder}>Фамилия</span>
                        </label>
                        <label className={styles.lables} htmlFor="number">
                            <input
                                className={`${styles.inputs} ${
                                    formik.values.number.length > 0
                                        ? `${styles.full}`
                                        : ""
                                }`}
                                type="tel"
                                id="number"
                                name="number"
                                value={formik.values.number}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span className={styles.placeholder}>Телефон</span>
                            <div className={styles.errorMessage}>
                                {formik.touched.number && formik.errors.number
                                    ? formik.errors.number
                                    : ""}
                            </div>
                        </label>
                        <label className={styles.lables} htmlFor="mail">
                            <input
                                className={`${styles.inputs} ${
                                    formik.values.mail.length > 0
                                        ? `${styles.full}`
                                        : ""
                                }`}
                                type="email"
                                id="mail"
                                name="mail"
                                value={formik.values.mail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            <span className={styles.placeholder}>E-mail</span>
                        </label>
                    </div>
                    <div className={styles.text}>
                        <label htmlFor="user-message">
                            Ваше сообщение
                            <textarea
                                name="user-message"
                                id="textarea"
                                value={formik.values["user-message"]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                        </label>
                        <button
                            type="submit"
                            disabled={
                                Object.keys(formik.errors).length > 0 ||
                                !formik.values.firstName
                                    ? true
                                    : false
                            }
                        >
                            Отправить
                        </button>
                        {/* <ReCAPTCHA
                            // asyncScriptOnLoad={setReady(true)}

                            ref={captchaRef}
                            className="captcha"
                            sitekey="6LfCJLceAAAAAJ_1NHWzOK2v5Uu60D5aQ6ACiq4R"
                            onChange={captchaCallback}
                            onExpired={() => {
                                setButtonDisable(true);
                                setCaptchaResponse(null);
                            }}
                            theme="dark"
                        /> */}
                    </div>
                    {/* <div
                    className="g-recaptcha"
                    data-sitekey="6LfCJLceAAAAAJ_1NHWzOK2v5Uu60D5aQ6ACiq4R"
                    data-theme="dark"
                    data-callback={captchaCallback}
                ></div> */}
                </form>
            </div>
        </div>
    );
}

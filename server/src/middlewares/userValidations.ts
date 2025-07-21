import { body } from "express-validator";

export const registerValidations = () => {
    return[
        body("name")
        .isString()
        .withMessage("O nome é obrigatório!"),

        body("email")
        .isString()
        .withMessage("O campo de E-mail é obrigatório!")
        .isEmail()
        .withMessage("Informe um E-mail válido!"),

        body("password")
        .isString()
        .withMessage("A senha é obrigatória!")
    ]
}
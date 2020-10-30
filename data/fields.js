import { required, maxLength, minLength, helpers } from "vuelidate/lib/validators";
const phone = helpers.regex('phone', /^((7)+([0-9]){10})$/)
export const fields = [
    {
        name: "surname",
        title: "Фамилия",
        validations: {
            required
        },
        type: "text"
    },
    {
        name: "name",
        title: "Имя",
        validations: {
            required
        },
        type: "text"
    },
    {
        name: "patronimic",
        title: "Отчество",
        type: "text"
    },
    {
        name: "birthdate",
        title: "Дата рождения",
        type: "date",
        validations: {
            required,
        }
    },
    {
        name: "phone",
        title: "Номер телефона",
        type: "tel",
        validations: {
            required,
            minLength: minLength(11),
            maxLength: maxLength(11),
            phone

        },
    },
    {
        name: "gender",
        title: "Пол",
        options: ['Мужской', 'Женский'],
        
    },
    {
        name: "group",
        title: "Группа клиентов",
        options: ['VIP', 'Проблемные', 'ОМС'],
        multiple: true,
        validations: {
            required,

        },
    },
    {
        name: "doctor",
        title: "Лечащий врач",
        options: ['Иванов', 'Захаров', 'Чернышева'],
        multiple: false
    },
    {
        name: "nosms",
        title: "Не отправлять СМС",
        type: "checkbox"
    },
    {
        name: "index",
        title: "Индекс",
        type: "number"
    },
    {
        name: "country",
        title: "Страна",
        type: "text"
    },
    {
        name: "region",
        title: "Область",
        type: "text"
    },
    {
        name: "city",
        title: "Город",
        validations: {
            required
        },
        type: "text"
    },
    {
        name: "street",
        title: "Улица",
        type: "text"
    },
    {
        name: "house",
        title: "Дом",
        type: "text"
    },
    {
        name: "documenttype",
        title: "Тип документа",
        options: ['Паспорт', 'Свидетельство о рождении', 'Водительское удостоверение'],
        validations: {
            required
        },
        multiple: false
    },
    {
        name: "SN",
        title: "Серия",
        type: "number"
    },
    {
        name: "number",
        title: "Номер",
        type: "number"
    },
    {
        name: "issuedby",
        title: "Кем выдан",
        type: "text"
    },
    {
        name: "issuedate",
        title: "Дата выдачи",
        type: "date",
        validations: {
            required,
        },
        
    },
]
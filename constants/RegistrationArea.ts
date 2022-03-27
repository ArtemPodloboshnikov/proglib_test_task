const Titles = {

    HEADLINE: 'Регистрация',
    NAME: 'Имя и фамилия:',
    FIELD_ACTIVITY: 'Ваш род деятельности:',
    PHONE_NUMBER: 'Номер телефона:',
    DATE_BIRTH: 'Дата рождения:',
    PROFILE_AVATAR: 'Портрет профиля',
    PROFILE_ALBUM: 'Портрет профиля'
}

const link_params = 'href="#"';

const Placeholders = {

    INPUT_NAME: 'Имя',
    INPUT_SURNAME: 'Фамилия',
    TEXTAREA_ACTIVITY: 'Ваш текст',
    INPUT_PHONE: '(×××) ×××-××-××',
    LOAD_AVATAR_PROFILE: 'Загрузите изображение:',
    PREVIEW_AVATAR: 'Превью профиля',
    URL_AVATAR_PROFILE: 'Или укажите адрес изображения:',
    URL_AVATAR_EXAMPLE: 'https://example.com/img',
    AVATAR_TERMS: 'Можно загрузить картинку в формате png, jpg и gif. Размеры не меньше 200 × 200 точек, объём файла не больше 7 МБ.',
    LOAD_ALBUM: 'Загрузите 2–10 фото вашего рабочего места',
    ALBUM_TERMS: 'Можно загрузить картинки в формате png, jpg.',
    REGISTRATION_TERMS: `Регистрируясь, вы соглашаетесь <a ${link_params}>с правилами пользования сайтом</a> и даёте <a ${link_params}>согласие на обработку персональных данных</a>`,
    SEND_BUTTON: 'Зарегистрироваться'
}

const NamesInputs = {

    NAME: 'name',
    SURNAME: 'surname',
    FIELD_ACTIVITY: 'field_activity',
    PHONE: 'phone',
    DATE_BIRTH: 'date_birth',
    PROFILE_AVATAR: 'profile_avatar',
    PROFILE_ALBUM: 'profile_album',
    SEND_BUTTON: 'send_button'
}

const ImportantField = {

    NAME: true,
    FIELD_ACTIVITY: true,
    PHONE_NUMBER: true,
    DATE_BIRTH: true,
    PROFILE_AVATAR: true,
    PROFILE_ALBUM: true
}

const Errors = {

    PHONE_UNCORECTED: 'Телефон имеет неверный формат',
    URL_UNCORECTED: 'URL имеет неверный формат'
}

const LimitersFileUploader = {

    SIZE: 7, //MB
    EXTENSIONS: ['png', 'jpg', 'gif'],
    LIMIT_ALBUM: '2-10'
}

export {Titles, Placeholders, NamesInputs, ImportantField, LimitersFileUploader, Errors};
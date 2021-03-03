import * as Yup from 'yup';
export const translates = {
  name: 'Имя',
  lastName: 'Фамилия',
  middleName: 'Отчество',
  IIN: 'ИИН',
  DOB: 'Дата рождения',
  gender: 'Пол',
  countryResidence: 'Страна резиденства',
  documentType: 'Тип документа',
  documentNumber: 'Номер документа',
  dateOfIssue: 'Дата выдачи',
  IssuedBy: 'Кем выдан',
  phoneNumber: 'Номер телефона',
  email: 'Email',
  secretWord: 'Кодовое слово',
  cityAndCountry: 'Город и страна рождения',
  city: 'Город',
  street: 'Улица',
  house: 'Дом',
  apartment: 'Квартира',
};

export const initialValues = {
  mainData: {
    name: '',
    lastName: '',
    middleName: '',
    IIN: '',
    DOB: '',
    gender: '',
    countryResidence: '',
  },
  documentData: {
    documentType: '',
    documentNumber: '',
    dateOfIssue: '',
    IssuedBy: '',
  },
  contactInformation: {
    phoneNumber: '',
    email: '',
    secretWord: '',
  },
  placeOfbirth: {
    cityAndCountry: '',
  },
  currentAddress: {
    city: '',
    street: '',
    house: '',
    apartment: '',
  },
};

export const validationSchema = Yup.object({
  mainData: Yup.object().shape({
    name: Yup.string().required('Обязательно для заполнения'),
    lastName: Yup.string().required('Обязательно для заполнения'),
    middleName: Yup.string().required('Обязательно для заполнения'),
    IIN: Yup.string()
      .matches(/^[0-9]+$/, 'Должны быть только цифры')
      .min(12, 'Должно быть 12 цифр')
      .max(12, 'Должно быть 12 цифр')
      .required('Обязательно для заполнения'),
    DOB: Yup.string().required('Обязательно для заполнения'),
    gender: Yup.string().required('Обязательно для заполнения'),
    countryResidence: Yup.string().required('Обязательно для заполнения'),
  }),
});

export const genderOptions = [
  { key: 'male', value: 'Мужской' },
  { key: 'female', value: 'Женский' },
];

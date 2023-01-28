import * as yup from 'yup';

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
});

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(64)
    .required(),
  phone: yup
    .string()
    .length(13)
    .matches(/^\+\d{12}$/, 'Phone number must correspond pattern +111111111111')
    .required(),
  email: yup.string().email(),
  birthday: yup.date().max(new Date()),
});

// ------------------------------------------------------------------------
const USER_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Name must starts wich capital letter ')
    .matches(/^.[a-z]*$/, 'Second+ characters must be lower letter')
    .required(),
  email: yup
    .string()
    .email()
    .required(),
});

// USER_SCHEMA.validate({ name: 'Agent0047', email: 'test@test.com' })
//   .then(data => console.log(data))
//   .catch(e => console.log(e));

// {
//   model, productionYear, km, number (AA0000AA)
// }

const USER_AUTO_SCHEMA = yup.object({
  model: yup
    .string()
    .min(2)
    .max(20)
    .matches(/^[A-Z][a-z]{1,20}$/, 'Enter normal Brand')
    .required(),
  productionDate: yup
    .date()
    .min(new Date(1900, 0, 1))
    .required(),
  km: yup
    .number()
    .positive()
    .required(),
  number: yup
    .string()
    .length(8)
    .matches(/^[A-Z]{2}/, 'Enter normal region')
    .matches(/^..[0-9]{4}/, 'Enter normal number')
    .matches(/[A-Z]{2}$/, 'Enter normal seria')
    .required(),
});
// USER_AUTO_SCHEMA.validate({
//   model: "Audi",
//   productionDate: new Date(2004, 0, 1),
//   km: 777,
//   number: "KR7777EK",
// });
// .then((data) => console.log(data))
// .catch((e) => console.log(e));

import * as Yup from "yup";

const currentYear = (new Date()).getFullYear()+1;

export const formValidationSchema = Yup.object().shape({
    Title: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    Director: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    Genre: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    Year: Yup.number()
        .typeError('Must be a number')
        .positive('Positive number only!')
        .integer('Decimal number only')
        .moreThan(999, 'Too Short!')
        .lessThan(currentYear+1, 'Try less than 2020!')
        .required('Required'),
    Runtime: Yup.number()
        .typeError('Must be a number')
        .positive('Positive number only!')
        .integer('Decimal number only')
        .moreThan(10, 'Too Short!')
        .lessThan(9999, 'Too Long!')
        .required('Required'),
    Poster: Yup.string()
        .url('Please use a valid URL'),
    imdbID: Yup.string()
        .min(4, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required')
});
import * as Yup from "yup";

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
    Year: Yup.string()
        .min(4, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    Runtime: Yup.string()
        .min(2, 'Too Short!')
        .max(4, 'Too Long!')
        .required('Required'),
    Poster: Yup.string()
        .url('Please use a valid URL'),
    imdbID: Yup.string()
        .min(4, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required')
});
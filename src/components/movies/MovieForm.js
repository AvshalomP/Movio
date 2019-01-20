import React, { Component } from 'react';
import styles from '../styles/MovieForm.module.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from "../../store/actions/movies";
import { Formik, Form } from 'formik';
import { formValidationSchema } from "../schema/validation/formValidationSchema";
import { Button } from 'react-materialize';
//components
import Input from '../generic/Input';
import ErrorFocus from '../generic/ErrorFocus';

class MovieForm extends Component {


    generateInitialValues = () => {
        const { Title, Director, Genre, Poster, Year, Runtime, imdbID } = this.props.movie;
        const newFormId = "newMovieForm";
        return {
            Title,
            Director,
            Genre,
            Year,
            Runtime,
            Poster,
            imdbID,
            newFormId,
          }
    };

    convertStringToTitleCase = (str) => {
        return str.replace(/[^a-zA-Z0-9 :']/g, "").split(' ').map( word => {
            return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().substring(1)
        }).join(' ')
    };

    generateButtons = ({ props, name }, resetForm) => {
        return (
            <div className={styles.formBtns}>
                <Button {...props} className={styles.btn} flat>{name}</Button>
                <Button type="button" modal="close" onClick={ () => resetForm() } flat>CANCEL</Button>
            </div>
        )
    };

    isMovieExist = (value) => {
        let isExist = false;
        this.props.movies.forEach( movie => {
            if(Object.values(movie).indexOf(value) > -1) {
                isExist = true;
            }
        });
        return isExist;
    };

    validateMovieExist = (values, imdbIDprop, setFieldError) => { //check if movie exist
        if(!imdbIDprop) { //on add new movie
            if (this.isMovieExist(values.Title)) { //check by Title
                setFieldError('Title', 'Already exist');
                return true;
            }
            if (this.isMovieExist(values.imdbID)) { //check by imdbID
                setFieldError('imdbID', 'Already exist');
                return true;
            }
        }
        return false;
    };

    handleSubmit = (values, { resetForm , setFieldError }) => {
        const { editMovie, addMovie, closeModal } = this.props;
        const { imdbID } = this.props.movie;
        const Title = this.convertStringToTitleCase(values.Title);   //converting movie title to TitleCase

        if(!this.validateMovieExist(values, imdbID, setFieldError)) { //check if movie exist
            closeModal();
            imdbID ? editMovie({...values, Title}) : addMovie({...values, Title}); //in edit mode imdbID prop is not passed
            resetForm();
        }

    };

    render(){
        const { movie, formSecondBtn } = this.props;
        return (
                <Formik
                    initialValues={this.generateInitialValues()}
                    validationSchema={formValidationSchema}
                    onSubmit={this.handleSubmit}
                >
                    {({ values, errors, touched, resetForm }) => {
                        return (
                            <Form id={movie.imdbID ? values.imdbID : values.newFormId}>
                                <Input name="Title" touched={touched} errors={errors} />
                                <Input name="Director" touched={touched} errors={errors} />
                                <Input name="Genre" touched={touched} errors={errors} />
                                <Input name="Poster" touched={touched} errors={errors} />
                                <div className={styles.flex}>
                                    <Input name="Year" label="Year" touched={touched} errors={errors}
                                           className={styles.inputWidth}
                                    />
                                    <Input name="Runtime" touched={touched} errors={errors}
                                           className={styles.inputWidth}
                                    />
                                    <Input name="imdbID" touched={touched} errors={errors}
                                           className={styles.inputWidth}
                                           disabled={movie.imdbID ? "disabled" : ""}
                                    />
                                </div>
                                {this.generateButtons(formSecondBtn, resetForm)}
                                <ErrorFocus />
                            </Form>
                        )
                    }}
                </Formik>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {addMovie, editMovie})(MovieForm);
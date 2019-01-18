import React, { Component } from 'react';
import styles from '../styles/MovieForm.module.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from "../../store/actions/movies";
import { Formik, Form } from 'formik';
import { formValidationSchema } from "../schema/validation/formValidationSchema";
//components
import Input from '../generic/Input';

class MovieForm extends Component {


    generateInitialValues = () => {
        const { Title, Director, Genre, Poster, Year, Runtime, imdbID } = this.props.movie;
        return {
            Title,
            Director,
            Genre,
            Year,
            Runtime,
            Poster,
            imdbID,
            newFormId: "newMovieForm",
          }
    };

    convertStringToTitleCase = (str) => {
        return str.replace(/[^a-zA-Z0-9 :']/g, "").split(' ').map( word => {
            return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().substring(1)
        }).join(' ')
    };

    handleSubmit = (values ) => {
        const { imdbID } = this.props.movie;
        const Title = this.convertStringToTitleCase(values.Title);   //converting movie title to TitleCase

        this.props.closeModal();    //closing modal
        imdbID ? this.props.editMovie({...values, Title}) : this.props.addMovie({...values, Title});
    };

    render(){

        return (
                <Formik
                    initialValues={this.generateInitialValues()}
                    validationSchema={formValidationSchema}
                    onSubmit={this.handleSubmit}
                >
                    {({ values, errors, touched }) => (
                        <Form id={this.props.movie.imdbID ? values.imdbID : values.newFormId}>
                            <Input name="Title" touched={touched} errors={errors} />
                            <Input name="Director" touched={touched} errors={errors} />
                            <Input name="Genre" touched={touched} errors={errors} />
                            <Input name="Poster" touched={touched} errors={errors}
                                   disabled={this.props.movie.Poster ? "disabled" : ""}
                            />
                            <div className={styles.flex}>
                                <Input name="Year" label="Year" touched={touched} errors={errors}
                                       className={styles.inputWidth}
                                />
                                <Input name="Runtime" touched={touched} errors={errors}
                                       className={styles.inputWidth}
                                />
                                <Input name="imdbID" touched={touched} errors={errors}
                                       className={styles.inputWidth}
                                       disabled={this.props.movie.imdbID ? "disabled" : ""}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
        )
    }
}

export default  connect(null, {addMovie, editMovie})(MovieForm);
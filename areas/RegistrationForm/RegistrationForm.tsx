import { Formik } from "formik";

import Textfield from "../../components/Textfield";
import { InputTypes } from "../../components/Textfield/Types";
import {Titles, Placeholders, NamesInputs} from '../../constants/RegistrationArea';
import styles from './styles.module.scss';

const RegistrationForm = ()=>{

    return (

        <Formik
        initialValues={{}}
        onSubmit={(values)=>{


        }}
        >
            {props=>(

                <form
                className={styles.form} 
                onSubmit={props.handleSubmit}
                >
                    <h3>{Titles.HEADLINE}</h3>

                    <div className={styles.wrap_name_inputs}>
                        <Textfield
                        name={NamesInputs.NAME}
                        placeholder={Placeholders.INPUT_NAME}
                        type={InputTypes.TEXT}
                        changeFunction={props.handleChange}
                        />
                        <Textfield
                        name={NamesInputs.SURNAME}
                        placeholder={Placeholders.INPUT_SURNAME}
                        type={InputTypes.TEXT}
                        changeFunction={props.handleChange}
                        />
                    </div>
                </form>
            )}
        </Formik>
    )
}

export default RegistrationForm;
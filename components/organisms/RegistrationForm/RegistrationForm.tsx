import { Formik } from "formik";

import FormSection from "../../molecules/FormSection";
import { InputTypes } from "../../atoms/Textfield/Types";
import {Titles, Placeholders, NamesInputs, ImportantField} from '../../../constants/RegistrationArea';
import { AreaTypes } from "../../molecules/FormSection/Types";
import styles from './styles.module.scss';

const RegistrationForm = ()=>{

    return (
        <div
        className={styles.wrap_form}
        >
            <h3>{Titles.HEADLINE}</h3>
            <Formik
            initialValues={{}}
            onSubmit={(values)=>{


            }}
            >
                {props=>(

                    <form
                    onSubmit={props.handleSubmit}
                    >

                        <FormSection
                        title={Titles.NAME}
                        isImportant={ImportantField.NAME}
                        styleClass={styles.wrap_inputs}
                        componentsProps={[
                            {

                                field: AreaTypes.TEXTFIELD,
                                props: {
                                    name: NamesInputs.NAME,
                                    placeholder: Placeholders.INPUT_NAME,
                                    type: InputTypes.TEXT,
                                    changeFunction: props.handleChange
                                }
                            },
                            {
                                field: AreaTypes.TEXTFIELD,
                                props: {
                                    name: NamesInputs.SURNAME,
                                    placeholder: Placeholders.INPUT_SURNAME,
                                    type: InputTypes.TEXT,
                                    changeFunction: props.handleChange
                                }
                            }
                        ]}
                        />
                        <FormSection
                        title={Titles.FIELD_ACTIVITY}
                        isImportant={ImportantField.FIELD_ACTIVITY}
                        componentsProps={[
                            {
                                field: AreaTypes.TEXTAREA,
                                props: {
                                    name: NamesInputs.FIELD_ACTIVITY,
                                    placeholder: Placeholders.TEXTAREA_ACTIVITY,
                                    changeFunction: props.handleChange
                                }
                            }
                        ]}
                        />
                            
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm;
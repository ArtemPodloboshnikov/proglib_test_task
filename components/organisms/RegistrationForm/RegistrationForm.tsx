import { Formik, FormikProps } from "formik";
import * as Yup from 'yup';

import FormSection from "../../molecules/FormSection";
import Input from "../../molecules/Input";
import Preview from "../../atoms/Preview";
import { InputTypes } from "../../molecules/Input/Types";
import {Titles, Placeholders, NamesInputs, ImportantField, Errors} from '../../../constants/RegistrationArea';
import styles from './styles.module.scss';

const RegistrationForm = ()=>{

    const SignupSchema = Yup.object().shape({

        [NamesInputs.PHONE]: Yup.string()
        .matches(/^\+[7] [\(]\d{3}\) \d{3}\-\d{2}\-\d{2}$/, Errors.PHONE_UNCORECTED)
        .required("Phone number is required"),
        [NamesInputs.PROFILE_AVATAR]: Yup.string()
        .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/, Errors.URL_UNCORECTED)
    })

    const getError = (formikProps: FormikProps<{[x: string]: string;}>, field_name: string)=>{

        return (Boolean(formikProps.errors[field_name] && formikProps.touched[field_name]))? 
            {
                message: <div className={"error_message"}>
                            {formikProps.errors[field_name]}
                         </div>,
                styleClass: 'error_input'
            }
        :
            {
                message: null,
                styleClass: ''
            }
    }

    return (
        <div
        className={styles.wrap_form}
        >
            <h3>{Titles.HEADLINE}</h3>
            <Formik
            initialValues={{
                [NamesInputs.NAME]:'',
                [NamesInputs.DATE_BIRTH]: '',
                [NamesInputs.FIELD_ACTIVITY]: '',
                [NamesInputs.PHONE]: '',
                [NamesInputs.PROFILE_ALBUM]: '',
                [NamesInputs.PROFILE_AVATAR]: '',
                [NamesInputs.SEND_BUTTON]: '',
                [NamesInputs.SURNAME]: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values)=>{

                console.log(values);
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
                        >
                            <Input 
                            name={NamesInputs.NAME}
                            placeholder={Placeholders.INPUT_NAME}
                            type={InputTypes.TEXT}
                            changeFunction={props.handleChange}
                            />
                            <Input 
                            name={NamesInputs.SURNAME}
                            placeholder={Placeholders.INPUT_SURNAME}
                            type={InputTypes.TEXT}
                            changeFunction={props.handleChange}
                            />
                        </FormSection>
                        <FormSection
                        title={Titles.FIELD_ACTIVITY}
                        isImportant={ImportantField.FIELD_ACTIVITY}
                        >
                            <Input
                            name={NamesInputs.FIELD_ACTIVITY}
                            placeholder={Placeholders.TEXTAREA_ACTIVITY}
                            type={InputTypes.TEXTAREA}
                            changeFunction={props.handleChange}
                            />
                        </FormSection>
                        <FormSection
                        title={Titles.PHONE_NUMBER}
                        isImportant={ImportantField.PHONE_NUMBER}
                        styleClass={styles.wrap_phone}
                        >
                            <Input
                            name={NamesInputs.PHONE}
                            placeholder={Placeholders.INPUT_PHONE}
                            type={InputTypes.PHONE}
                            changeFunction={props.handleChange}
                            error={getError(props, NamesInputs.PHONE)}
                            />
                        </FormSection>
                        <FormSection
                        title={Titles.DATE_BIRTH}
                        styleClass={styles.wrap_date}
                        isImportant={ImportantField.DATE_BIRTH}
                        >
                            <Input
                            name={NamesInputs.DATE_BIRTH}
                            placeholder={Placeholders.INPUT_DATE}
                            type={InputTypes.DATE}
                            changeFunction={props.handleChange}
                            />
                        </FormSection>
                        <FormSection
                        title={Titles.PROFILE_AVATAR}
                        styleClass={styles.wrap_profile_avatar}
                        isImportant={ImportantField.PROFILE_AVATAR}
                        hint={Placeholders.AVATAR_TERMS}
                        >
                            <Input
                            name={NamesInputs.PROFILE_AVATAR}
                            placeholder={Placeholders.LOAD_AVATAR_PROFILE}
                            type={InputTypes.FILE}
                            changeFunction={props.handleChange}
                            />
                            <Input
                            name={NamesInputs.PROFILE_AVATAR}
                            placeholder={Placeholders.URL_AVATAR_EXAMPLE}
                            subtitle={Placeholders.URL_AVATAR_PROFILE}
                            changeFunction={props.handleChange}
                            type={InputTypes.URL}
                            error={getError(props, NamesInputs.PROFILE_AVATAR)}
                            />
                            <Preview
                            placeholder={Placeholders.PREVIEW_AVATAR}
                            imagesSrc={''}
                            />
                        </FormSection>
                        <FormSection
                        title={Titles.PROFILE_ALBUM}
                        isImportant={ImportantField.PROFILE_ALBUM}
                        hint={Placeholders.ALBUM_TERMS}
                        >
                            <Input
                            name={NamesInputs.PROFILE_ALBUM}
                            placeholder={Placeholders.LOAD_ALBUM}
                            type={InputTypes.FILE}
                            changeFunction={props.handleChange}
                            />
                        </FormSection>
                        <Input
                        name={NamesInputs.SEND_BUTTON}
                        type={InputTypes.SUBMIT}
                        placeholder={Placeholders.SEND_BUTTON}
                        />
                        <div dangerouslySetInnerHTML={{__html: Placeholders.REGISTRATION_TERMS}}/>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default RegistrationForm;
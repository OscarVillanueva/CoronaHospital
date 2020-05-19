import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { css } from "@emotion/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import FileUploader from 'react-firebase-file-uploader';
import SpecialitySelect from './SpecialitySelect';
import { Form, Field, InputSubmit, Error } from '../../includes/Form';
import { Alert } from "../../includes/Alert";
import useValidation from '../../../hooks/useValidation';
import validateConsultation from '../../../validation/validateConsultation';
import { addConsultationAction } from "../../../actions/consultationsAction";
import firebase from '../../../firebase/firebase';

const INITIAL_STATE = {
    symptom: "",
    speciality: ""
}

const CreateConsultation = () => {

    const [currentSpeciality, setSpeciality] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const current = useSelector( state => state.auth.current )
    const success = useSelector( state => state.consultations.success )
    const error = useSelector( state => state.consultations.error )

    // State para controlar el archivo
    const [upload, uploadToFirebase] = useState(false)
    const [progress, saveProgress] = useState(0)
    const [uploading, saveUploading] = useState(false)
    const [urlImage, saveUrl] = useState("")
    const [hasSelected, saveHasSelected] = useState(false)
    const [consultion, setConsultation] = useState({})

    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {

        handleSelectChange(currentSpeciality)

    }, [currentSpeciality])

    useEffect(() => {
        
        if(!error && submitted && success){
            router.push("/dashboard")
        }

    }, [success])

    useEffect(() => {
        
        if(upload) {

            setSubmitted(true)
            dispatch( addConsultationAction(consultion) );

        }

    }, [upload])

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useValidation(INITIAL_STATE, validateConsultation, createConsultation)

    const { symptom, speciality } = values

    function createConsultation() {
        const newConsultation = {
            symptom,
            speciality,
            status: "pending",
            comments: [],
            prescription: "",
            bill: 0,
            patient: {
                id: current.id,
                name: current.name,
                email: current.email,
                allergies: current.allergies,
                preconditions: current.preconditions,
                surgeries: current.surgeries,
                birthday: current.birthday,
                covid: current.covid
            },
            url: urlImage,
            answerby: {}
        }

        setConsultation( newConsultation )

        if(hasSelected && urlImage !== "")
            uploadToFirebase(true)
        else
            if(!hasSelected)
                uploadToFirebase(true)
            else
                uploadToFirebase(false)

    }

    const handleSelectChange = option => {
        const target = {
            target : {
                value: option,
                name: "speciality"
            }
        }
        handleChange(target)
    }   
    
    // react-firebase-file-uploader
    const handleUploadStart = () => {
        saveProgress(0);
        saveUploading(true);
        saveHasSelected(true)
    }
    
    const handleProgress = progress => saveProgress( progress );

    const handleUploadError = error => {
        saveUploading(error);
        console.error(error);
    };
    
    const handleUploadSuccess = imageName => {
        saveProgress(100);
        saveUploading(false);
        firebase
            .storage
            .ref(`covidHospital`)
            .child(imageName)
            .getDownloadURL()
            .then(url => {
                saveUrl(url);
            } );
    };

    return ( 
        <>
            <h1
                css = {css`
                    text-align: center;
                `}
            >
                Nueva consulta
            </h1>

            { uploading 
                && (
                    <div className="container">
                        <LinearProgress 
                            value={progress} 
                            variant= "determinate" 
                            css = {css` margin: 5rem 0;`}
                            color = "secondary"
                        />
                    </div>
                ) 
            }
    
            <Form onSubmit = {handleSubmit}>
    
            { error && <Error>{error.message}</Error> }
            { (success && submitted) && <Alert>Se agregado tu consulta correctamente</Alert>  }

            <label 
                htmlFor="symptom"
                css = {css`
                    margin-bottom: 0.5rem;
                    margin-top: 2rem;
                    display: block;
                `}
            >
                Imagen
            </label>
            <Field>
                <FileUploader 
                    name="image" 
                    id="image" 
                    randomizeFilename
                    storageRef={firebase.storage.ref(`covidHospital`)}
                    onUploadStart = {handleUploadStart}
                    onUploadError = {handleUploadError}
                    onUploadSuccess = {handleUploadSuccess}
                    onProgress = {handleProgress}
                    accept = "image/*, video/*"
                />
            </Field>
    
            <label 
                htmlFor="symptom"
                css = {css`
                    margin-bottom: 0.5rem;
                    display: block;
                `}
            >
                Sintomas
            </label>
            <Field>
                <textarea
                    name="symptom" 
                    id="symptom" 
                    value = {symptom}
                    onChange = {handleChange}
                >
                </textarea>
            </Field>
    
            { errors.symptom && <Error>{errors.symptom}</Error> }
    
            <SpecialitySelect
                setSpeciality = { setSpeciality }
            />
    
            { errors.speciality && <Error>{errors.speciality}</Error> }
            
            <InputSubmit 
                type="submit" 
                value="Enviar consulta"
                className = "mt-3"
            />
    
            </Form>
        </>
    );
}
 
export default CreateConsultation;
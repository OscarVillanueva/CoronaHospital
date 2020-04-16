import styled from '@emotion/styled';

export const Form = styled.form`
    max-width: 600px;
    width: 90%;
    margin: 0 auto;

    fieldset {
        margin: 1rem 0;
        border: 1px solid #e1e1e1;
        padding: 2rem;
    }

    @media (min-width: 768px) {
        fieldset {
            font-size: 2rem;
        }
    }

    legend {
        font-size: 1.2rem;
        font-family: 'Work Sans', sans-serif;
    }

`

export const Field = styled.div`
    margin-bottom: 2rem;
    
    label {
        display: block;
    }

    input,
    textarea{
        width: 100%;
    }

    textarea{
        height: 400px;
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;

        &:last-of-type {
            margin-bottom: 0;
        }

        label {
            flex: 0 0 20%;
            font-size: 1rem;
            margin-bottom: 0;
        }

        input,
        textarea {
            flex: 1;
            padding: 0.3rem;
            font-size: 1rem;
            border: 1px solid #e1e1e1;
            border-radius: 0.2rem;
        }

    }
    
`

export const InputSubmit = styled.input`
    width: 100%;
    padding: 0.7rem 1.7rem;
    text-align: center;
    color: #ffffff;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: none;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    border-radius: 0.2rem;
    background-color: var(--primary);
    margin: 2rem 0;

    &:hover {
        cursor: pointer;
    }
`

export const FormContainer = styled.div`

  @media (min-width: 768px) {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`

export const Error = styled.p`
    background-color: red;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    margin: 2rem 0;
    text-transform: uppercase;
`
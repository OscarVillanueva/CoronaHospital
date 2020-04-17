import React, { useState } from 'react';
import { Editor } from '@edtr-io/core'
import { createTextPlugin } from '@edtr-io/plugin-text'

const useEditor = () => {

    const localStorageRefence = "editor"

    const textPlugin = createTextPlugin({
        placeholder: 'Recetar',
        registry: []
    })

    const plugins = {
        text: textPlugin
    }
    
    const initialState = { plugin: "text" }

    const handleChangePresciption = ({ getDocument }) => {
        localStorage.setItem(localStorageRefence, JSON.stringify(getDocument().state))
    }

    return {
        localStorageRefence,
        component: <Editor
            plugins={plugins} 
            initialState={initialState}
            onChange={handleChangePresciption} 
        />
    };
}
 
export default useEditor;
import { UPDATE_CURRENT_COMPONENT } from "../types"

// Actualizar el componente actual a mostrar 
export function updateCurrentComponentAction(componentID) {
    return dispatch => {
        dispatch( updateCurrentComponent(componentID) )
    }
}

const updateCurrentComponent = componentID => ({
    type: UPDATE_CURRENT_COMPONENT,
    payload: componentID
})
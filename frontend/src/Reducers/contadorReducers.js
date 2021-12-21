// import {TYPES} from "../actions/contadorActions";

export const contadorInitialState = {contador : 0};

export const contadorInit = (initialState) =>{
    return{
        contador:initialState.contador+100,
    }
}

export function contadorReducer(state,action){
    switch(action.type){
        case TYPES.INCREMENT:
            return {contador:state.contador +1};

    }

}
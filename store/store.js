import {createStore} from 'redux'

const affichageTypeReducer = (state = {affichage: true}, action) =>{
    if (action.type === 'toggleAffichage'){
        return{
            affichage: !state.affichage
        }
    }
    return state
}
const store = createStore(affichageTypeReducer);

export default store;
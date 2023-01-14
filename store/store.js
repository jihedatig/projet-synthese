import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState={affichage: true, showOptions: true};

const affichageSlice = createSlice({
      name:'affichage',
      initialState,
      reducers:{
        toggleAffichage(state ){
            state.affichage = !state.affichage;
        },
        toggleOptions(state, action){
            state.showOptions = action.payload;
        }
      }
});


const store = configureStore({
    reducer: affichageSlice.reducer
});


export const affichageActions = affichageSlice.actions;

export default store;
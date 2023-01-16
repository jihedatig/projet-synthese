import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState={affichage: true, showOptions: true, screen: 'HomeScreen'};

const affichageSlice = createSlice({
      name:'affichage',
      initialState ,
      reducers:{
        toggleAffichage(state ){
            state.affichage = !state.affichage;
        },
        toggleOptions(state, action){
            state.showOptions = action.payload;
            console.log(state.showOptions);
        },
        toggleScreen(state, action){
            state.screen = action.payload;
            console.log('from Redux : '+state.screen);
        }
      }
});
const connexionSlice = createSlice({
    name:'connexion',
    initialState:{isConnected:false, isAdmin:false},
    reducers:{
      Authenticated(state ){
          state.isConnected = true;
      },
      roleAdmin(state ){
        state.isAdmin = true;
    },
    logout(state ){
        state.isConnected = false;
        state.isAdmin = false;
    },
    }
});

const store = configureStore({
    reducer:{affichage: affichageSlice.reducer, connexion:connexionSlice.reducer}
});


export const affichageActions = affichageSlice.actions;
export const connectActions = connexionSlice.actions;

export default store;
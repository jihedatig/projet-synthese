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
    initialState:{isConnected:false, isAdmin:false, userId:0},
    reducers:{
      Authenticated(state, action ){
          state.isConnected = true;
          state.userId = action.payload;
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
const fetchingIndex = createSlice({
    name:'indexes',
    initialState:{currentPage:1, searchPage:1},
    reducers:{
      incrementCurrent(state ){
        if(state.currentPage < 8){
           state.currentPage = state.currentPage + 1; 
        }
      },
      incrementSearch(state ){
        if(state.searchPage < 8){
            state.searchPage = state.searchPage + 1; 
         }
    },
    resetIndex(state ){
        state.currentPage = 1;
        state.searchPage = 1;
    },
    }
});
const panierSlice = createSlice({
    name:'panier',
    initialState:[],
    reducers:{
      panierExiste(state ){
        return state.length;
      },
      addToCart(state, action){
        state.push(action.payload)
      },
      incrementQty(state, action){
        var foundIndex = state.findIndex(x=> x.idproduit == action.payload);
        state[foundIndex].qty++
        console.log('from redux: '+ JSON.stringify(state)) 
      },
      decreaseQty(state, action){
        var foundIndex = state.findIndex(x=> x.idproduit == action.payload);
        state[foundIndex].qty--
        console.log('from redux: '+ JSON.stringify(state)) 
      },
      removeProduct(state, action){
        
        var foundIndex = state.findIndex(x=> x.idproduit == action.payload);
        state.splice(foundIndex,1)
          
        console.log('from redux: '+ JSON.stringify(state)) 
      },
      emptyCart(state){
        state.splice(0,state.length) 
      },
    
      
      
    }
});

const store = configureStore({
    reducer:{affichage: affichageSlice.reducer, connexion:connexionSlice.reducer, indexes:fetchingIndex.reducer, panier:panierSlice.reducer}
});


export const affichageActions = affichageSlice.actions;
export const connectActions = connexionSlice.actions;
export const fetchingIndexesActions = fetchingIndex.actions;
export const panierActions = panierSlice.actions;

export default store;
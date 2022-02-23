import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});


export default store;




// const counterReducer = (state=initialState, action)=>{
  //   switch (action.type) {
    //     case 'increment':
    //       return{
      //         counter: state.counter+1,
      //         showCounter: state.showCounter
      //       }
      //     case 'decrement':
      //       return{
        //         counter: state.counter-1,
        //         showCounter: state.showCounter
        //       }
        //     case 'increase':
        //       return{
          //         counter: state.counter + action.amount,
          //         showCounter: state.showCounter
          //       }  
          //     case 'toggle':
          //       return{
            //         showCounter: !state.showCounter,
            //         counter: state.counter
            //       }
            //     default:
            //       return state;
            //   }
            // }

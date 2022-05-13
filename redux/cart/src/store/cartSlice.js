const {createSlice}  = require("@reduxjs/toolkit")



const cartSlice = createSlice({
    name: "cart",
    initialState : [],
    reducers:{
        //frist will carete a add function by which we can able to add our item in cart//

        add(state,action){
            state.push(action.payload)  // here we muted our state directly
        },
        //afetr will carete a remove function by which we can able to remover our item in cart//
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        }
        
    }

})

export const {add , remove} = cartSlice.actions;
export default cartSlice.reducer;


//reducers is manily is pure function which it cannt change the function outside //
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++; //Immer
        },
        decrement(state) {
            state.value--; //Immer
        },
        reset(state) {
            state.value = initialState.value; //Immer
        },
        incrementByStep: (state, action) => {
            state.value += action.payload
        }
    }
});

//thunk: Es una función que nos permite ejecutar lógica asincrónica en el contexto de Redux. Se puede despachar como una acción regular. Ej: dispatch(incrementAsync(10)) Esto llamaría al thunk con la función dispatch como primer argumento. Mientras se ejecuta el thunk, otras acciones podrán ser despachadas.

export const incrementAsync = (step) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByStep(step))
    }, 4000)
}
export const { increment, decrement, incrementByStep, reset } = counterSlice.actions;
export default counterSlice.reducer;


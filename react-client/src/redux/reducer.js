const initialState = {
    counter: 5,
}

const reduser = (state = initialState, action) => {
    switch(action.type){
        case "Adding": {
            let newCounter = state.counter + 1;
            const newState = {...state, counter: newCounter}
            return newState;
        }
        case "Іubtraction": {
            return state;
        }
        default:
            return state

    }

}

export const adding = () => ({
    type: "Adding"
})
export default reduser;


const initState = {
    list: ['take out the trash', 'do laundry'],
}

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
function reducer(state = initState, action)
{
    switch(action.type)
    {
        case ADD_TODO:
        let newList = state.list.slice();
        newList.push(action.payload);
        return {...state, list: newList};
        case REMOVE_TODO:
        let copyList = state.list.filter((curVal, index) =>
        {
            return action.payload !== index;
        });
        return {list: copyList};

        default: 
            return state;
    }
}

export function addItem(value)
{
    return {
        type: ADD_TODO,
        payload: value
    }
}
export function removeItem(index)
{
    return{
        type: REMOVE_TODO,
        payload: index
    }
}

export default reducer;
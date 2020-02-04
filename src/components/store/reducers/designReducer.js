const initialState = {
    designs: [
        {id: 1, name: 'Project One', tshirtColor: 'black'},
        {id: 2, name: 'Project Two', tshirtColor: 'blue'},
        {id: 3, name: 'Project Two', tshirtColor: 'red'},
        {id: 4, name: 'Project Two', tshirtColor: 'white'},
        {id: 5, name: 'Project Two', tshirtColor: 'blue'}
    ]
}

const designReducer = (state = initialState, action) =>{
    return state
}

export default designReducer
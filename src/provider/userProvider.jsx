import React, {useReducer, useContext} from 'react';

const UserContext = React.createContext(null)


const userReducer = (state, action) => {
    switch(action.type) {
        case 'save-user': 
            return { ...state,  user: action.payload, token: action.payload.token }
    }
}

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: {}, token: ''
    })

    async function updateUserData (val) {
        await localStorage.setItem("authToken", val.token);
        await localStorage.setItem("user", JSON.stringify(val))
        await dispatch({type: 'save-user', payload: val})
    }

    async function recoverData () {
       if(await localStorage.getItem("user")){
        const user = await JSON.parse(localStorage.getItem('user'))
        await dispatch({type: 'save-user', payload: user})

       }

    }

    const actions = {
        updateUserData,
        recoverData
    }

    return (
        <UserContext.Provider value={{state, USER: actions}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext
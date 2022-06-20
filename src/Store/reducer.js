const initStore = {
    username: '',
    messages: []
}
export const SET_USERNAME = "SET_USERNAME"
export const SET_MESSAGE = "SET_MESSAGE"
export const chatReducer=(state = initStore, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            }
            case SET_MESSAGE:
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
        default:
            return state
    }
}
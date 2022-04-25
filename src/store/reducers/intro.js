export default function intro(state = true, action) {
    switch (action.type) {
        case "SET_INTRO":
            return action.data
        default:
            return state
    }
}
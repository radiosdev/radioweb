export default function radioSelected(state = false, action) {
    switch (action.type) {
        case "SET_RADIO_SELECTED":
            return action.data
        default:
            return state
    }
}
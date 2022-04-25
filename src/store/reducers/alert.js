export default function alert(state = false, action) {
    switch (action.type) {
        case "SET_ALERT":
            return action.data
        default:
            return state
    }
}
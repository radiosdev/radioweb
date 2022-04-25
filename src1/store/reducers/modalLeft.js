export default function modalLeft(state = false, action) {
    switch (action.type) {
        case "SET_MODAL_LEFT":
            return action.data
        default:
            return state
    }
}
import { combineReducers } from 'redux'

import user from './user'
import alert from './alert'
import modalLeft from './modalLeft'
import radioSelected from './radioSelected'
import intro from './intro'

export default combineReducers({
    user,
    intro,
    alert,
    modalLeft,
    radioSelected
});
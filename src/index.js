import React, { useState, useEffect } from 'react'

import Navigator from './pages/Navigator'

import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

const App: () => React$Node = () => {

    return (
        <>
            <StatusBar backgroundColor="#111" barStyle="light-content" />
            <Provider store={store}>
                <Navigator />
            </Provider>
        </>
    )
}

export default App
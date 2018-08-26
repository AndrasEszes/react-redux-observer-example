import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './root-epic'
import rootReducer from './root-reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

function configureStore(initialState?: {}) {
  const store = createStore(
    rootReducer,
    initialState!,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    ),
  )

  epicMiddleware.run(rootEpic)

  return store
}

const storeInstance = configureStore()

export default storeInstance

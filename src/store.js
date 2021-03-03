import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import { interceptorInstance } from './instance/axiosIntanse';
const configureStore = (initialState) => {
  const middleware = [];
  const enhancers = [];
  const actionCreators = {};
  middleware.push(thunk);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionCreators,
      })
    : compose;
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(rootReducer, initialState, enhancer);
  interceptorInstance(store);
  return store;
};

export default configureStore;

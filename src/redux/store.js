import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(sagas);

  return store;
}

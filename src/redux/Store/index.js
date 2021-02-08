import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";


import reducers from "../Reducers";
import rootSaga from "../Saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(compose(applyMiddleware(...middleware)))
    )
    sagaMiddleware.run(rootSaga);
    return store

}

export default configureStore;
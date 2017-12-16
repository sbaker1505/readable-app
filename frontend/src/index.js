import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/index.css';
import App from './Components/App';
import Post from './Components/Post';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact path='/'
          component={App}
        />
        <Route
          path='/category/:category'
          component={App}
        />
        <Route
          exact path='/post/:id'
          render={({ match }) => (
            <Post id={match.params.id}/>
          )}
        />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/index.css';
import App from './Components/App';
import Post from './Components/Post';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';
import CreateComment from './Components/CreateComment';
import EditComment from './Components/EditComment';
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
          exact path='/category/:category'
          render={({ match, history }) => (
            <App category={match.params.category} path={history}/>
          )}
        />
        <Route
          exact path='/:category/:id'
          render={({ match, history }) => (
            <Post
              id={match.params.id}
              path={history}/>
          )}
        />
        <Route
          exact path='/post/:id/edit'
          render={({ match, history }) => (
            <EditPost id={match.params.id} path={history}/>
          )}
        />
        <Route
          exact path='/new'
          render={({ history }) => (
            <CreatePost path={history} />
          )}
        />
        <Route
          exact path='/post/:id/comment/new'
          render={({match, history }) => (
            <CreateComment parentId={match.params.id} path={history} />
          )}
        />
        <Route
          exact path='/post/:parentId/comment/:id/edit'
          render={({match, history }) => (
            <EditComment
              parentId={match.params.parentId}
              id={match.params.id}
              path={history}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

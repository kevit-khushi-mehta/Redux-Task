
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';

const App = () => (
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <div>
        <h1>Comment Box</h1>
        <CommentInput />
        <CommentList />
      </div>
    </PersistGate>
  </Provider>
);

export default App;

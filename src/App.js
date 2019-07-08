import React from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import './App.css';
import FlickrSearchContainer from './containers/FlickrSearch'; 

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container-scroller">
          <FlickrSearchContainer />
        </div>
      </Provider>
    );
  }

}

export default App;

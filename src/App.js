import React from 'react'
import './styles/App.scss';
import Home from './components/Ui/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import Addform from './components/Ui/Addform';
import Editform from './components/Ui/Editform';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/addform" exact component={Addform} />
            <Route path="/editform" exact component={Editform} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

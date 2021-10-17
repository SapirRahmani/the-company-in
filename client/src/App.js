
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import DomainListPage from './components/DomainListPage';
import DomainPage from './components/DomainPage';


function App() {
  return (
    <Router>
      <div class="block">
        <Switch>
          <Route exact path="/" component={DomainListPage} />
          <Route path="/domain/:id" component={DomainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

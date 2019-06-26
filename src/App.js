import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Member } from './Member';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Foo } from './components/Foo';


class App extends Component{
  render() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route  path ="/about" component={About}/>
            <Route  path ="/contact" component={Contact}/>
            <Route  path ="/member" component={Member}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
        <Foo></Foo>
        </Layout>
    </React.Fragment>
  );
}
}

export default App;

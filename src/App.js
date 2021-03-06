import { Component } from 'react';
import Layout from './containers/Layout/Layout';
import IceCreamBuilder from './containers/IceCreamBuilder/IceCreamBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render(){
    return (
    <div>
      <Layout>
        <Switch>
          <Route path='/orders' component={Orders}  />
           <Route path='/checkout' component={Checkout}/>
          <Route path='/' component={IceCreamBuilder} />
        </Switch>
        
        
      </Layout>
    </div>
    );
  }
}

export default App;

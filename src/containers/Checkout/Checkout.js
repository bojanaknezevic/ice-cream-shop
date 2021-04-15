import { Component, Fragment } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
       this.props.history.replace('/checkout/contact-data');
    }

    //before redux 
    /*
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const flavors = {};
        let price = 0;

        for(let param of query.entries()){
            //param bi izgledao ovako: ['chocolate', '1']
            if(param[0] === 'price'){
                price = param[1];
            } else {
                flavors[param[0]] = +param[1];
            }
            
        }

        this.setState({flavors: flavors, totalPrice: price});
    }
    */

    render(){
        return(
            <Fragment>
                <CheckoutSummary flavors={this.props.flavors} checkoutCanceled={this.checkoutCanceledHandler} checkoutContinued={this.checkoutContinuedHandler}/>
               {/*<Route path={this.props.match.url + '/contact-data'} render={(props)=>(<ContactData flavors={this.state.flavors} price={this.state.totalPrice} {...props}/>)} />*/}
            
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}/>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        flavors: state.flavors
    }
};

export default connect(mapStateToProps)(Checkout);


import React, { Component, Fragment } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import BuildControls from '../../components/IceCream/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/IceCream/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class IceCreamBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: null
    }

    updatePurchaseState = (countFlavors) => {
        const sum = Object.keys(countFlavors)
            .map(flavKey => {
                return countFlavors[flavKey];
            })
            .reduce((sum,el)=>{
                return sum + el;
            },0);

            return sum>0;
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    modalClosedHandler = () => {
        this.setState({purchasing: false});
    }


    //used before redux
    /*addedFlavorHandler = (flavor) => {
        const oldFlavorCount = this.state.flavors[flavor];
        const newFlavorCount = oldFlavorCount + 1;
        const updatedFlavors = {
            ...this.state.flavors
        };
        updatedFlavors[flavor] = newFlavorCount;

        const oldPrice = this.state.price;
        const flavorPrice = FLAVOR_PRICES[flavor];
        const newPrice = oldPrice + flavorPrice;

        this.setState({flavors: updatedFlavors, price: newPrice});

        this.updatePurchaseState(updatedFlavors);
    }

    removedFlavorHandler = (flavor) => {
        const oldFlavorCount = this.state.flavors[flavor];

        if(oldFlavorCount<=0){
            return;
        }
        const updatedCount = oldFlavorCount - 1;
        const updatedFlavors = {
            ...this.state.flavors
        };
        updatedFlavors[flavor] = updatedCount;

        const oldPrice = this.state.price;
        const flavorPrice = FLAVOR_PRICES[flavor];
        const newPrice = oldPrice - flavorPrice;

        this.setState({flavors: updatedFlavors, price: newPrice});
        this.updatePurchaseState(updatedFlavors);
    }
    */

    orderSendHandler = () => {
        //before redux implemented 
        /*
        const queryParams = [];
        for(let i in this.state.flavors){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.flavors[i]));
        }
        queryParams.push('price=' + this.state.price);
        const queryString = queryParams.join('&');
        
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
        */
       this.props.history.push('/checkout');
    }

    //to implement with redux and async logic
    /*componentDidMount = () => {
        
        /*axios.get('/flavors.json')
            .then(response => {
                this.setState({flavors: response.data});
            })
            .catch(err => {
                this.setState({error: err});
            });
    }
    */

    render(){
        let disabled = {...this.props.flavors};
        for(let key in disabled){
            disabled[key] = disabled[key] <= 0;
        }

        let orderSummary = (this.state.loading || !this.props.flavors) ? <Spinner/> : <OrderSummary  totalPrice={this.props.price} cancelClicked={this.modalClosedHandler} orderClicked={this.orderSendHandler} flavors={this.props.flavors}/>;
                                             
        let modal = (this.state.purchasing) ? <Modal show={this.state.purchasing} modalClosed={this.modalClosedHandler}>
                                                {orderSummary}</Modal> : null;

        let iceCream = (this.state.error) ? <h2 style={{textAlign: 'center'}}>Flavors can't be loaded!</h2> : <Spinner />;

        if (this.props.flavors){
            iceCream = (
            <Fragment>
                <IceCream flavors={this.props.flavors} />
                <BuildControls flavors={this.props.flavors} 
                                added={this.props.onFlavorAdded} 
                                removed={this.props.onFlavorRemoved}
                                disabled={disabled}
                                price={this.props.price}
                                purchasable={this.updatePurchaseState(this.props.flavors)}
                                purchasing={this.purchasingHandler}/>
            </Fragment>
            );
        }
        return (
            <Fragment>
                {modal}
                {iceCream}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        flavors: state.flavors,
        price: state.price
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFlavorAdded: (flvName) => dispatch({type: actionTypes.ADD_FLAVOR, flavorName: flvName}),
        onFlavorRemoved: (flvName) => dispatch({type: actionTypes.REMOVE_FLAVOR, flavorName: flvName})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(IceCreamBuilder, axios));
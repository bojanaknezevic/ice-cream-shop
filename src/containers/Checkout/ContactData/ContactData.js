import { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component {
    state = {
        formData: {
            name: {
                inputType: 'input',
                inputConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                inputType: 'input',
                inputConfig: {
                    type: 'email',
                    placeholder: 'E-Mail'
                },
                value: ''
            },
            street: {
                inputType: 'input',
                inputConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            postalCode: {
                inputType: 'input',
                inputConfig: {
                    type: 'text',
                    placeholder: 'Postal Code'
                },
                value: ''
            },
            country: {
                inputType: 'input',
                inputConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let inputId in this.state.formData){
            formData[inputId] = this.state.formData[inputId].value;
        }
        const order = {
            flavors: this.props.flavors,
            price: this.props.price,
            formData: formData
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading:false});
            });
    }

    inputChangedHandler = (event, inputId) => {
        const changedFormData = { ...this.state.formData };
        const changedElement = { ...changedFormData[inputId] };
        changedElement.value = event.target.value;

        changedFormData[inputId] = changedElement;
        this.setState({formData: changedFormData});
    }

 render() {
     const inputElementArray = [];
     for (let key in this.state.formData){
        inputElementArray.push({
            id: key,
            config: this.state.formData[key]
        }
        );
     }

    let form = (
        <form onSubmit={this.orderHandler}>
            {inputElementArray.map(inputEl => {
                return <Input inputType={inputEl.config.inputType} 
                              inputConfig={inputEl.config.inputConfig} 
                              value={inputEl.config.value}
                              changed={(event)=>this.inputChangedHandler(event, inputEl.id)}/>
            })}
            <Button type="Success">ORDER</Button>
            </form>
    );

    if(this.state.loading){
        form = <Spinner />;
    }

     return(
        <div className={classes.ContactData}>
            <h4 style={{color: '#8f5c2c'}}>Enter your Contact Data</h4>
            {form}
        </div>
    );
 }
}

const mapStateToProps = state => {
    return {
        flavors: state.flavors,
        price: state.price
    }
}
export default connect(mapStateToProps)(ContactData);
import IceCream from '../../IceCream/IceCream';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => (
    <div className={classes.CheckoutSummary}>
        <h1 style={{color:'#8f5c2c'}}>Your order: </h1>
        <div style={{width: '100%', height: '300px', margin: 'auto', paddingBottom: '50px', overflow: 'scroll'}}>
            <IceCream flavors={props.flavors} style={{backgroundImage: 'none'}}/>
        </div>
        <Button type="Danger" clicked={props.checkoutCanceled}>CANCEL</Button>
        <Button type="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
);

export default checkoutSummary;
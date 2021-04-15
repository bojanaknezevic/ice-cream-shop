import { Fragment } from "react";

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const orderedFlavors = Object.keys(props.flavors)
        .map(flavKey => {
            return <li key={flavKey}>{flavKey}: {props.flavors[flavKey]}</li>
        })
    return (
        <Fragment>
            <p>You've ordered an ice cream with following flavors:</p>
            <ul>
                {orderedFlavors}
            </ul>
            <p><strong>Total price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue To Checkout?</p>
            <Button clicked={props.cancelClicked} type="Danger">CANCEL</Button>
            <Button clicked={props.orderClicked} type="Success">ORDER</Button>
        </Fragment>
    )
}

export default orderSummary;
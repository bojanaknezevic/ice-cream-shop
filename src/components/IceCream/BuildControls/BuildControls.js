import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const flavorControls = Object.keys(props.flavors)
        .map(flav => {
            return <BuildControl key={flav} label={flav} added={()=>props.added(flav)} removed={()=>props.removed(flav)} disabled={props.disabled[flav]}/>
        });

    return (
        <div className={classes.BuildControls}>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
            {flavorControls}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>ORDER</button>
        </div>
    );
}

export default buildControls;




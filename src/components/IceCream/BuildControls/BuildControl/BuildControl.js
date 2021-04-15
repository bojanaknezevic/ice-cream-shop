import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label}</label>
            <button className={classes.Add} onClick={props.added}>Add</button>
            <button className={classes.Remove} onClick={props.removed} disabled={props.disabled}>Remove</button>
        </div>
    );
}

export default buildControl;
import classes from './Input.module.css';

const input = (props) => {
    let input = null;

    switch(props.inputType){
        case('input'):
            input = <input {...props.inputConfig} className={classes.Input} onChange={props.changed} required/>;
            break;
        case('textarea'):
            input = <textarea {...props.inputConfig} className={classes.Input} onChange={props.changed} required/>;
            break;
        default: 
            input = <input {...props.inputConfig} className={classes.Input} onChange={props.changed} required/>;
            break;
    }

    return(
        <div>
            <label>{props.label}</label>
            {input}
        </div>
    );
} 

export default input;
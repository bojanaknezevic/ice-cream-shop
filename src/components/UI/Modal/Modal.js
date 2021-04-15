import { Component } from 'react';
import classes from './Modal.module.css';
import { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    //componentDidUpdate doesn't trigger
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
             {(this.props.show) ? <div className={classes.Modal}>
                {this.props.children}
            </div> : null}
            </Fragment>
        );
    }
}

export default Modal;
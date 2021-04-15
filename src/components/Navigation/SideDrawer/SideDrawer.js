import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Fragment } from 'react';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.showSideDrawer){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
        <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer} />
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo height="10%"/>
            </div>
            <NavigationItems />
        </div>
        </Fragment>
    );
}

export default sideDrawer;
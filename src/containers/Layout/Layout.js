import React, { Fragment, Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    menuClickedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
    } );
}
    render(){
        return (
            <Fragment>
                <Toolbar menuClicked={this.menuClickedHandler} />
                <SideDrawer showSideDrawer={this.state.showSideDrawer} closeSideDrawer={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;
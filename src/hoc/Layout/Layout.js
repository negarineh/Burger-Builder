import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ax from '../Ax/Ax';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false })
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer : !prevState.showSideDrawer }
    })
  };

  render() {
    return (
      <Ax>
        <Toolbar
          // onClick={this.sideDrawerToggleHandler}
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Ax>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token,
    }
};

export default connect(mapStateToProps)(Layout);
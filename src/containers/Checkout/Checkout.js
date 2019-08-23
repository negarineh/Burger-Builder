import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component{
  // ****** before adding redux *********
  // state = {
  //   ingredients: null,
  //   totalPrice: 0,
  // };

  // UNSAFE_componentWillMount() {
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = null;
  //   for (let param of query.entries()) {
  //     // ['salad' : '1']
  //     // ingredients[param[0]] = +param[1];
  //     if (param[0] === 'price') {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients, totalPrice: price });
  // }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    let summery = (<Redirect to="/"/>);
    if (this.props.ings) {
      const purchaseRedirect = this.props.purchased ? <Redirect to='/'/> : null;
      summery = (
        <div>
          {purchaseRedirect}
          <CheckoutSummery
            ingredients={this.props.ings}
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler}/>
          <Route
            path={this.props.match.path + '/contact-data'}
            component={ContactData}/>
        </div>
      )
    }
    return summery;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  }
};

export default connect(mapStateToProps)(Checkout);
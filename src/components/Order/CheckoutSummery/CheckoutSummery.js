import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummery.module.css';

const checkoutSummery = (props) => {
  return (
    <div className={classes.CheckoutSummery}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCanceled}>CANCEL</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
};

export default checkoutSummery;
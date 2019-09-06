import React from 'react';
import Ax from '../../../hoc/Ax/Ax';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
  // This doesn't need to be a functional component
    const ingredientSummery = Object.keys(props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
        <span style={{ textTransform: 'capitalize'}}>
          {igKey}:</span>
            {props.ingredients[igKey]}
          </li>
        )
      });

    return (
      <Ax>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
          {ingredientSummery}
        </ul>
        <p><strong>Total Price: {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </Ax>
    )
}

export default orderSummery;
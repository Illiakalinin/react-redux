import React from 'react';

import { connect } from 'react-redux';
import { decrement, increment } from '../..';

function Counter (props) {
  const { count, dispatch } = props;

  //* dispatch викликається, коли треба сповістити стору
  //* про необхідність змінити стан.
  //* Як саме треба змінити стан вказує екшн в параметрах dispatch:
  //* "dispatch надсилає екшн с стору"
  const decrementCount = () => {
    dispatch(decrement());
  };

  const incrementCount = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

//* функція - перший параметр connect -
//* для прокидування стейту в пропси компонента
function mapStateToProps (state) {
  return state;
}

//* connect створює HOC, який прокине в пропси компонента, що обгортається,
//* dispatch - функції для сповіщення стори про необхідність змінити стан
const HOC = connect(mapStateToProps);
export default HOC(Counter);

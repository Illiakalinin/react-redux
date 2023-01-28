import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, setStep } from '../../store/slices/counterSlice';

function Counter (props) {
  const { count, step, decrementCount, incrementCount, setNewStep } = props;

  const handleStepChange = ({ target: { value } }) => {
    setNewStep(Number(value));
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <input type='number' value={step} onChange={handleStepChange} />
    </div>
  );
}

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch) {
  return {
    decrementCount: () => dispatch(decrement()),
    incrementCount: () => dispatch(increment()),
    setNewStep: v => dispatch(setStep(v)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' name='city' placeholder='Please Enter City'/>
      <button>Get Weather Forecast</button>
    </form>
  )
}

export default Form;

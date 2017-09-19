import { connect } from 'react-redux';
import React from 'react';

function addTodo() {
  return (
    <div>
      <form action="">
        <input type="text" />
        <button />
      </form>
    </div>
  );
}
const AddTodo = connect()(addTodo());

export default AddTodo;

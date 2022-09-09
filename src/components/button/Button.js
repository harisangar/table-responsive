import React from 'react';

function Button() {

  return (
    <div>
    <button className="btn btn-danger mr-5 transform  transition duration-500 hover:scale-125 ease-in-out" >
    <i className="icon-trash icon-large"></i> Delete</button>
    <button className="btn btn-primary transform  transition duration-500 hover:scale-125 ease-in-out" ><i class="icon-edit-sign icon-large"></i> Edit</button>
    </div>
  )
}

export default Button

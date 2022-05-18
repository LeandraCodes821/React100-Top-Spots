import React from 'react';

export default props => (
  <div className='my-3 row'>
    <div className='col-md-12'>
      <div className='card'>
        <div className='card-body'>
          <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a className='btn btn-primary' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} role='button'>See Location</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
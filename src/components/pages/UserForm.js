import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const UserForm = () => {
  return (
    <div className='container'>
      {/* UserForm */}

      <div className='container_buttons'>
        <Link type='submit' className='btn_next' to='./therapy'>
          Next
        </Link>
      </div>
    </div>
  );
};

export default UserForm;

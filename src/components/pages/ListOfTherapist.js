import React from 'react';
import { Link } from 'react-router-dom';

const ListOfTherapist = () => {
  return (
    <div>
      ListOfTherapist
      <div className='containerTherapist'>
        <div>ListOfTherapist</div>

        <div className='containerTherapist_main'>
          <div className='containerTherapist_buttons'>
            <Link type='submit' className='btn_back' to='./language'>
              Back
            </Link>
            <button type='submit'>
              <Link type='submit' className='btn_next' to='./succes'>
                Next
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfTherapist;

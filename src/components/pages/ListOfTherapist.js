import React from 'react';
import { Link } from 'react-router-dom';
import {postSuccesResult} from '../services/ApiService';

const ListOfTherapist = () => {




  return (
    <div>
      <div className='containerListOfTherapist'>
        <div>ListOfTherapist</div>

        <div className='containerListOfTherapist_main'>
          <div className='containerListOfTherapist_buttons'>
            <Link type='submit' className='btn_back' to='./language'>
              Back
            </Link>
            <button type='submit' type='submit' className='btn_next'>
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

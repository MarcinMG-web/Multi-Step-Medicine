import React from 'react';
import { Link } from 'react-router-dom';

const ListOfTherapist = () => {
  return (
    <div>
      <div className='mainText'>List of therapist</div>
      <div className='containerListOfTherapist'>
        <div className='containerListOfTherapist_main'>
          <div className='containerListOfTherapist_box'>
            <div className='containerListOfTherapist_box-foto'>foto</div>
            <div className='containerListOfTherapist_box-info'>from $ 20 per sesion <br />
            dr. Alexandra Stevens-Schlotterback < br />
            Psychologist, Consellor
            </div>
          </div>

          <div className='containerListOfTherapist_details'>details</div>
          <div className='containerListOfTherapist_capabilities'>capabilities</div>
          <div className='containerListOfTherapist_text'>lorem ipsu</div>

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

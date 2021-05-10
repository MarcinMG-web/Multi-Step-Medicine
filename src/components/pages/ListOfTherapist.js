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

          <div className = 'containerListOfTherapist_box2'>
            <div className='containerListOfTherapist_box2-details'>
              <span className='containerListOfTherapist_box2-details-option'>Depression</span>
              <span className='containerListOfTherapist_box2-details-option'>Depression</span>
              <span className='containerListOfTherapist_box2-details-option'>Phycical Addiction</span>
              <span className='containerListOfTherapist_box2-details-option'>Phycical Addiction</span>
              <span className='containerListOfTherapist_box2-details-option'>Borderline personality</span>
              <span className='containerListOfTherapist_box2-details-option'>Borderline personality</span>
            </div>
            <div className='containerListOfTherapist_box2-capabilities'>
              <span className='containerListOfTherapist_box2-capabilities-text'>Video</span>
              <span className='containerListOfTherapist_box2-capabilities-text'>Phone</span>
              <span className='containerListOfTherapist_box2-capabilities-text'>Chat</span>
            </div>
          </div>

          <div className='containerListOfTherapist_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</div>

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

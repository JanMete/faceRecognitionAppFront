import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, handleKeyPress }) => {
  return (
    <div>
      <p className='f3 tc'>{'This app will detect faces from your images.'}</p>
      <div className='center'>
        <div className='pa4 br3 shadow-5 form center'>
          <input
            type='text'
            className='f4 pa2 w-70 center'
            onChange={onInputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white btn-color'
            onClick={onButtonSubmit}
            onKeyPress={handleKeyPress}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

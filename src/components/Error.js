import React from 'react';

const Error=(props)=>(

    <div className='card card-body mt-4' id="error_container">
         <i className="em em-slightly_frowning_face"  aria-label="SLIGHTLY FROWNING FACE"></i> 
        <h4 className='errorMessage'>
        {props.error}
        </h4>
    </div>

)


export default Error;
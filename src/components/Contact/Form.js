import React from 'react';
import './Form.scss';

const Form = ({ isReady }) => {
  return (
    <div className="form-div" style={isReady ? {opacity:"1", marginTop:"0px"}: {opacity:"0", marginTop:"50px"}}>
      <div className="left-box">
        <div>
          <h1>Explore the multiverse</h1>
          <h3>Sed Feugiat amet aliquam</h3>
          <p>
          Lorem ipsum sed dolor sit feugiat amet consectetur elit. Praesent etiam nibh sed tellus egestas congue. Aenean ornare velit lacus et varius enim proin aliquam facilisis ante sed etiam congue. Lorem et ipsum dolor amet nullam consequat.
          </p>
        </div>
      </div>
      <div className="right-box">
        <div>
          <h3>Sign up today</h3>
          <p>
            Aenean ornare velit lacus et varius enim proin aliquam facilsis
            ante.
          </p>
          <form action="#">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="submit" placeholder="Submit" />
            <p>Aereon lorem ipsum ormare velit locus.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

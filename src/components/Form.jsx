import React from "react";

const Form = () => {
  return (
    <div className="Form_main_container">
      <div className="Form_main_left">
        <div className="Form_main_left_upper">
          <h1>Ready to start something amazing?</h1>
          <p>
            We’re all ears. Let’s talk about how we can bring your ideas to
            life.
          </p>
        </div>
        <span>
          Mail on:
          <br />
          nimblenestdesign@gmail.com
        </span>
      </div>
      <div className="Form_main_right">
        <form className="Form_main_right_form">
          <div className="Form_main_right_input_maindiv">
            <div className="Form_main_right_input_div">
              <span>First Name</span>
              <input
                className="Form_main_right_input"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="Form_main_right_input_div">
              <span>Last Name</span>
              <input
                className="Form_main_right_input"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <div className="Form_main_right_input_maindiv">
            <div className="Form_main_right_input_div">
              <span>Email *</span>
              <input
                className="Form_main_right_input"
                placeholder="Enter your email address"
              />
            </div>
            <div className="Form_main_right_input_div">
              <span>I'm interested in</span>
              <select className="Form_main_right_input">
                <option>Select</option>
              </select>
            </div>
            {/* ----------------------------------------------------------------------------- */}
          </div>
          {/* ---------------------------------------------------------------------- */}
          <div className="Form_main_right_input_maindiv">
            <div className="Form_main_right_input_textarea_div">
              <span>Message *</span>
              <textarea
                className="Form_main_right_textarea"
                placeholder="Enter your message"
              />
            </div>
          </div>
          {/* ----------------------------------------------------------------------- */}
          <button className="form_submit_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

 import { BtnFeedback } from "components/BtnFeedback/BtnFeedback";
import PropTypes, { arrayOf } from "prop-types";
import React from "react";




export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
     <>
        {options.map(option => {
          return (
            <li key={option}>
              <BtnFeedback
                key={option}
                type="button"
                value={option}
                children={option}
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </BtnFeedback>
            </li>
          );
        })}
    </>
    );
  };


    


FeedbackOptions.propTypes = {
options: arrayOf(PropTypes.string.isRequired),
onLeaveFeedback: PropTypes.func.isRequired,
};
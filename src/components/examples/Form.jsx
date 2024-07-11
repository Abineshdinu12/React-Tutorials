import React from "react";
import { Survey } from "survey-react-ui";
import surveyJson from "../modles/Sample";
import { Model } from "survey-core";

const Form = () => {
  const data = new Model(surveyJson);
  return <Survey model={data} />;
};

export default Form;

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "file",
    },

    {
      type: "button",
      name: "nextButton",
      title: "Next",
      click: "nextPage",
    },
  ],
};

export default surveyJson;

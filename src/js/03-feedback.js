let throttle = require('lodash.throttle');

let formValues={};

const form=document.querySelector(".feedback-form");

const inputText=document.querySelector("input");

const area=document.querySelector("textarea");

const btn=document.querySelector("button");

if(JSON.parse(localStorage.getItem("feedback-form-state")))
{
    inputText.value=JSON.parse(localStorage.getItem("feedback-form-state")).email;

    area.value=JSON.parse(localStorage.getItem("feedback-form-state")).message;
}

function storageValues(evt)
{
 
  
      formValues.email=inputText.value;
  
      formValues.message=area.value;
  
      localStorage.setItem("feedback-form-state", JSON.stringify(formValues));
  
   
}


 form.addEventListener("input",throttle(storageValues, 500));
 
 form.addEventListener("submit",(event)=>{

      event.preventDefault();

    const {
      elements: { email, message }
    } = event.currentTarget;

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    event.currentTarget.reset();

    localStorage.clear();

 });



let formData = { 
    email: "", 
    message: "" };
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const textareaEmail =form.elements.email;
const textareaMessage =form.elements.message;

const rawData = localStorage.getItem(localStorageKey);
if (rawData) {
  const data = JSON.parse(rawData);
  textareaEmail.value.trim()=data.email || "";
  textareaMessage.value.trim()=data.message || "";
  formData=data;
}

form.addEventListener('input', onFormInput)
form.addEventListener("submit", onFormSubmit)

function onFormInput (evt){
    const fieldName=evt.target.name;
    const fieldValue=evt.target.value;
    formData[fieldName]=fieldValue;
localStorage.setItem(localStorageKey, JSON.stringify(formData));
}
 function onFormSubmit (evt) {
  evt.preventDefault();
  if(textareaEmail.value.trim()==='' || textareaMessage.value.trim() ===''){
alert(`Fill please all fields`)
  }
  else{
    	console.log(formData);
 localStorage.removeItem(localStorageKey);
 form.reset();
  }
}

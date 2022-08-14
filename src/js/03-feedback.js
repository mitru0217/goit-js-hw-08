const STORAGE_KEY = `feedback-form-state`;

const formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input"),
};

 saveLocaleStorage ();

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

});

function onFormSubmit(e) {
    e.preventDefault();
    if(refs.textarea.value === "" || refs.input.value === "") {
        return alert("Please fill all fields");
    }
    e.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY); 
};

function saveLocaleStorage () {
    const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
    if(savedInfo) {
        for(const key in savedInfo) {
            if(savedInfo.hasOwnProperty(key)) {
                refs.textarea.value = savedInfo.message || "";
                refs.input.value = savedInfo.email || "";
            }
        }
      }
    }



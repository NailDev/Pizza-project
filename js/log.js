const form = document.getElementById("signupForm");
const userN = document.getElementById("username");
const emailF = document.getElementById("email");
const passW = document.getElementById("password");
let limitName = document.querySelector(".error");
let limitEmail = document.querySelector(".error1");
let limitPassWord = document.querySelector(".error2");

let modal = document.getElementById("modal");
let closeSp = document.getElementById("closeB");
let okey = document.getElementById("okBtn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
 if(validForm()){
  modal.style.display = "block";
 } 
});
closeSp.addEventListener("click", () => {
  modal.style.display = "none";
});
okey.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


function validForm(){
   let isValid = true;
  if (!userN.value) {
    limitName.style.display = "block";
    limitName.textContent='Имя не заполнено';
    userN.style.borderColor = "red";
    isValid = false;
  } else if (userN.value.length < 3) {
    limitName.style.display = "block";
    userN.style.borderColor = "red";
   
    isValid = false;
  } else {
    limitName.style.display = "none";
    userN.style.borderColor = "green";
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailF.value) {
    limitEmail.style.display = "block";
    limitEmail.textContent = "Email не заполнен";
    emailF.style.borderColor = "red";
    isValid = false;
  } else if (!re.test(emailF.value)) {
    limitEmail.style.display = "block";
    emailF.style.borderColor = "red";
    isValid = false;
  } else {
    limitEmail.style.display = "none";
    emailF.style.borderColor = "green";
  }

  if (!passW.value) {
    limitPassWord.style.display = "block";
    passW.style.borderColor = "red";
    limitPassWord.textContent = "Пароль не заполнен";
    isValid = false;
  } else if (passW.value.length < 5) {
    limitPassWord.style.display = "block";
    limitPassWord.textContent = "Пароль слишком короткий";
    passW.style.borderColor = "red";
    isValid = false;
  } else {
    limitPassWord.style.display = "none";
    passW.style.borderColor = "green";
  }
  return isValid;
}
const fields = [userN, emailF, passW];
fields.forEach((field) => {
  const place = field.placeholder;
  field.addEventListener("focus", () => {
    field.placeholder = "";
    limitName.style.display = "none";
    limitEmail.style.display = "none";
    limitPassWord.style.display = "none";
  });
  field.addEventListener("blur", () => {
    field.placeholder = place;
  });
});

function showPass() {
  const input = document.getElementById("password");
  const eye = document.querySelector(".password_eye");
  const close = document.querySelector(".close");
  eye.addEventListener("click", () => {
    if (input.type === "password") {
      input.type = "text";
      eye.style.display = "block";
      close.style.display = "none";
    } else {
      input.type = "password";
      close.style.display = "block";
      eye.style.display = "block";
    }
  });
}
showPass();

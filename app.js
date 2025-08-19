const form=document.getElementById('contact-form');
const successMessage=document.getElementById('success-message');

// event listener
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const firstName=document.getElementById('firstName').value.trim();
  const lastName=document.getElementById('lastName').value.trim();
  const email=document.getElementById('email').value.trim();
  const queryType=document.querySelector('input[name="queryType"]:checked');
  const message=document.getElementById('message').value.trim();
  const privacyPolicy=document.getElementById('privacyPolicyGroup').checked;

  const formAlerts=document.querySelectorAll('.form-alert');

  let isValid=true;
  // first-name validation
  if(firstName===''){
    document.querySelector('#firstName + .form-alert').style.display='block';
    document.querySelector('#firstName ').style.border='1px solid var(--Red)';
    isValid=false;
  }else{
    document.querySelector('#firstName + .form-alert').style.display='none';
    document.querySelector('#firstName ').style.border='1px solid var(--Green-600)';
  }
  // last-name validation

  if(lastName===''){
    document.querySelector('#lastName + .form-alert').style.display='block';
    document.querySelector('#lastName ').style.border='1px solid var(--Red)';
    isValid=false;
  }else{
    document.querySelector('#lastName + .form-alert').style.display='none';
    document.querySelector('#lastName ').style.border='1px solid var(--Green-600)';
  }

  // validation for email
  let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailPattern.test(email)==='' || email===''){
    isValid=false;
    document.querySelector('#email + .form-alert').style.display='block';
    document.querySelector('#email ').style.border='1px solid var(--Red)';
  }else{
     document.querySelector('#email + .form-alert').style.display='none';
    document.querySelector('#email ').style.border='1px solid var(--Green-600)';
  }
  // message validation
  if(message===''){
    document.querySelector('#message + .form-alert').style.display='block';
    document.querySelector('#message ').style.border='1px solid var(--Red)';
    isValid=false;
  }else{
    document.querySelector('#message + .form-alert').style.display='none';
    document.querySelector('#message ').style.border='1px solid var(--Green-600)';
  }
  // is form valid
  if(isValid){
    successMessage.classList.add('active')
    form.reset();
  }

  // success message timeout
  setTimeout(() => {
    successMessage.classList.remove('active');
  }, 3000);
})
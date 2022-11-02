/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const form=document.querySelector('#action_page.php');
const usernameInput=document.querySelector('#username');

const emailInput=document.querySelector('#email');

form.addEventListener('submit',(event){
    event.preventDefault();
    validateForm();
})
function validateForm(){
    //username
    if(usernameInput.value.trim()==''){
        setError(usernameInput,'name can not be empty');
    }
    else if (usernameInput.valueOf().length<5 || usernameInput.value.trim().length>15){
        setError(usernameInput,'name must be min 5 and max 15 characters');
    }
    //email 
    if(emailInput.value.true()==''){
        setError(emailInput,'provide email address');
    }
}

function setError(element,errorMessage){
    const parent=element.parentElement;
    parent.classlist.add('error')
}

function setSuccess(element){
    const parent=element.parentElement;
    parent.classlist.add('success')
}




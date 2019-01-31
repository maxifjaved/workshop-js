/**
 * form  --> submit, id, listner(submit)
 *      fieldset
 *          formgroup
 *              input --> value, class, style, type, name, placeholder
 *
 *
 *          button --> type,
 *
 *
 */

function setElementAttributes(element, name, value) {
    element.setAttribute(name, value)
}

function createElement(tag, parent) {
    var cTag = document.createElement(tag)

    if (parent) {
        parent.append(cTag)
    }

    return cTag;
}

var wrapper = document.getElementById('main')
var form = createElement('form', wrapper)

form.addEventListener('submit', function (event) {
    event.preventDefault();
    // debugger
})

setElementAttributes(form, 'class', 'form fo bar baz')
setElementAttributes(form, 'id', 'fo-form')
setElementAttributes(form, 'data-type', 'login')

var fieldset = createElement('fieldset', form)


var formGroup0 = createElement('div', fieldset)
setElementAttributes(formGroup0, 'class', 'form-group')

var nameInput = createElement('input', formGroup0)
setElementAttributes(nameInput, 'class', 'form-control')

var formGroup1 = createElement('div', fieldset)
setElementAttributes(formGroup1, 'class', 'form-group')

var emailInput = createElement('input', formGroup1)
setElementAttributes(emailInput, 'class', 'form-control')


var formGroup2 = createElement('div', fieldset)
setElementAttributes(formGroup2, 'class', 'form-group')

var passwordInput = createElement('input', formGroup2)
setElementAttributes(passwordInput, 'class', 'form-control')


var formGroup3 = createElement('div', fieldset)
setElementAttributes(formGroup3, 'class', 'form-group')

var confirmPasswordInput = createElement('input', formGroup3)
setElementAttributes(confirmPasswordInput, 'class', 'form-control')


var submitButton = createElement('button', fieldset)
submitButton.innerText = 'Submit'
// setElementAttributes(submitButton, 'text', 'Submit')
setElementAttributes(submitButton, 'type', 'submit')



// var fieldset = createElement('fieldset', form)
// var fieldset = createElement('fieldset', form)
// var fieldset = createElement('fieldset', form)
// var fieldset = createElement('fieldset', form)
// // createElement(fieldset, form)
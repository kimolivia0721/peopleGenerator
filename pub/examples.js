/* JS Library usage examples */
"use strict";

// People Generator
const pg = new PeopleGenerator()
pg.makePeople()

const select = document.querySelector('#people')
const person = document.createElement('div')
person.appendChild(pg.people[0][0])
const divide = document.createElement('div')
// divide.id = "buttons"
const buttonPose = document.createElement('button')
buttonPose.className = 'return'
buttonPose.innerText = 'Change Pose'
buttonPose.id = 'pose'
divide.appendChild(buttonPose)
const buttonHair = document.createElement('form')
buttonHair.id = 'changeHair'
const inputButtonHair = document.createElement('input')
inputButtonHair.id = 'newHair'
inputButtonHair.type = 'text'
inputButtonHair.placeholder = 'type new hair color'
buttonHair.appendChild(inputButtonHair)
const submitButtonHair = document.createElement('input')
submitButtonHair.type = 'submit'
submitButtonHair.value = 'Change hair color'
buttonHair.appendChild(submitButtonHair)
divide.appendChild(buttonHair)
const buttonSkin = document.createElement('form')
buttonSkin.id = 'changeSkin'
const inputButtonSkin = document.createElement('input')
inputButtonSkin.id = 'newSkin'
inputButtonSkin.type = 'text'
inputButtonSkin.placeholder = 'type new Skin color'
buttonSkin.appendChild(inputButtonSkin)
const submitButtonSkin = document.createElement('input')
submitButtonSkin.type = 'submit'
submitButtonSkin.value = 'Change Skin color'
buttonSkin.appendChild(submitButtonSkin)
const buttonGender = document.createElement('button')
buttonGender.className = 'return'
buttonGender.innerText = 'Change Gender'
buttonGender.id = 'gender'
divide.appendChild(buttonSkin)
divide.appendChild(buttonGender)

person.appendChild(divide)
select.appendChild(person)

const poseButton = document.querySelector('#pose')
poseButton.addEventListener('click', changePoseClick)
const hairButton = document.querySelector('#changeHair')
hairButton.addEventListener('submit', changeHairClick)
const skinButton = document.querySelector('#changeSkin')
skinButton.addEventListener('submit', changeSkinClick)
const genderButton = document.querySelector('#changeGender')
genderButton.addEventListener('submit', changeGenderClick)

const arrow = document.querySelector('#arrow')
arrow.style = " width: 0; height: 0; border-left: 50px solid transparent;border-right: 50px solid transparent;border-bottom: 100px solid pink;"

function changePoseClick(e) {
    e.preventDefault();
    if (e.target.innerText === 'Change Pose') {
        changePose(e.target.parentElement.parentElement.firstChild.id)
    }
}

function changePose(personId) {
    pg.changePose(personId)

}

function changeHairClick (e) {
    e.preventDefault();
    
    changeHair(e.target.parentElement.parentElement.firstChild.id, document.querySelector('#newHair').value)
}

function changeHair(personId, color) {
    pg.changeHairColor(personId, color)

}


function changeSkinClick (e) {
    e.preventDefault();
    
    changeSkin(e.target.parentElement.parentElement.firstChild.id, document.querySelector('#newSkin').value)
}

function changeSkin(personId, color) {
    pg.changeSkinColor(personId, color)

}

function changeGenderClick(e){
    e.preventDefault();

}
function changeGender(personId){

}
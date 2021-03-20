/* JS Libraries */
"use strict";

function PeopleGenerator(selector){
    " Each element in people is in an order of hair, head, left arm, body, right arm, legs "

    this.people = []
}

PeopleGenerator.prototype = {
    makePeople: function () {
        const person = document.createElement("div")
        const hair = document.createElement("div")
        hair.style = 'border:2px solid black;width: 60px; height: 30px; border-radius: 30px 30px 0px 0px; background-color: black;'
        const head = document.createElement("div")
        head.style = "border:2px solid black;width: 60px; height: 30px; border-radius: 0px 0px 30px 30px ; background-color: yellow;"
        const body = document.createElement("div")
        body.style = "border-left: 15px solid black; height:100px;margin-left:16px;display:inline-block;"
        
        const eyes = document.createElement("div")
        eyes.style = "width: 3px; height: 3px; border-radius: 50%; background-color: black;"


        // var canvas = document.getElementById('myCanvas');
        // var context = canvas.getContext('2d');
        // var centerleftX = canvas.width / 4;
        // var centerRightX = 3 * canvas.width / 4;
        // var centerY = canvas.height / 2;
        // var radius = 70;
        // context.beginPath();
        // context.rect(0, 0, 400, 200);
        // context.fillStyle = 'rgb(200,200,200)';
        // context.fill();
        // context.lineWidth = 7;
        // context.strokeStyle = 'black';
        // context.stroke();


        // context.beginPath();
        // context.arc(centerleftX + 50, centerY, radius, 0, 2 * Math.PI, false);
        // context.fillStyle = "rgba(0, 0,255,0.7)";
        // context.fill();


        // context.beginPath();
        // context.arc(centerRightX - 50, centerY, radius, 0, 2 * Math.PI, false);
        // context.fillStyle = "rgba(255, 0,0,0.7)";
        // context.fill();
        // const arms = document.createElement("div")
        // arms.className = "theDiv"
        // arms.id = "theDiv"
        // const armsStyle = document.createElement("style")
        // armsStyle.innerHTML = "#theDiv:after{ content:''; position:absolute;border-top:1px solid red;width:40px;transform: rotate(45deg); transform-origin: 0% 0%;}"
        // arms.style = armsStyle

        // const arms = document.createElement("svg")
        // arms.setAttribute("height", "210")
        // arms.setAttribute("width", "500")
        // arms.height = "210"
        // arms.width = "500"
        // const armsContent = document.createElementNS('http://www.w3.org/2000/svg','line')
        // armsContent.setAttribute("x1", "0")
        // armsContent.setAttribute("y1", "0")
        // armsContent.setAttribute("x2", "100")
        // armsContent.setAttribute("y2", "100")
        // armsContent.setAttribute("stroke", "black")
        // arms.appendChild(armsContent)

        // const arms = document.createElement("canvas")
        // arms.id, arms.width,arms.height = "myCanvas", "300", "150"
        // const armsScript = document.createElement("script")
        // const armsContent = arms.getContext("2d")
        // armsContent.beginPath();
        // armsContent.moveTo(0,0);
        // armsContent.lineTo(300,150);
        // armsContent.stroke();
        // armsScript.append(armsContent);
        // console.log(arms)
        const leftarm = document.createElement("div")
        leftarm.style = "border-left: 6px solid green; height: 100px; display:inline-block;"
        const rightarm = document.createElement("div")
        rightarm.style = "border-left: 6px solid green; height: 100px;margin-left:20px; display:inline-block;"
        const shoulder = document.createElement("hr")
        shoulder.style = "margin:0;height:2px; width: 60px;border-width:0;color:black;background-color:black"
        const upper = document.createElement("div")
        upper.style = "margin-bottom: 0px;"
        upper.append(leftarm)
        upper.append(body)
        upper.append(rightarm) 
        const legs = document.createElement("div")
        legs.style = "border-left: 6px solid blue; height: 100px; display:inline-block"
        const legs2 = document.createElement("div")
        legs2.style = "border-left: 6px solid blue; height: 100px;margin-left:50px; display:inline-block;"
    
        const waist = document.createElement("hr")
        waist.style = "margin:0;height:5px; width: 60px;border-width:0;color:black;background-color:black"

        // var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        // newLine.setAttribute('id','line2');
        // newLine.setAttribute('x1','0');
        // newLine.setAttribute('y1','0');
        // newLine.setAttribute('x2','200');
        // newLine.setAttribute('y2','200');
        // newLine.setAttribute("stroke", "black")
        // const newDiv = $("body")
        person.append(hair)
        person.append(head)
        person.append(shoulder)
        person.append(upper)
        person.append(waist)
        person.append(legs)
        person.append(legs2)
        person.id = this.people.length
        // person.append(arms)

        // newDiv.append(person)
        this.people.push([person, false]) // add to people list

    },

    changeHairColor: function(index, color) {
        const child = this.people[index][0].firstChild
        child.style.backgroundColor = color
    },

    changeSkinColor: function(index, color) {
        const child = this.people[index][0].firstChild.nextSibling
        child.style.backgroundColor = color

    },

    changePose: function(index) {
        var child = this.people[index][0].firstChild

        for (let i = 0; i < this.people[index][0].childElementCount; i++) {
            
            if (i == 3 && !this.people[index][1]){
                const arm = document.createElement("hr")
                arm.style = "margin:0; margin-right: 5px;margin-left: 5px;margin-bottom: 100px;height:5px; width: 100px;border-width:0;background-color:green; display:inline-block;"
                const arm2 = document.createElement("hr")
                arm2.style = "margin:0; margin-left: 15px;margin-bottom: 100px;height:5px; width: 100px;border-width:0;background-color:green; display:inline-block;"
                child.replaceChild(arm, child.firstChild)
                child.replaceChild(arm2, child.firstChild.nextSibling.nextSibling)
            }
            else if (i == 4 && !this.people[index][1]){
                child.style.marginLeft = "105px"

            }
            else if (i < this.people[index][0].childElementCount - 1 && !this.people[index][1]){
                child.style.marginLeft = "100px"
            }
            else if (this.people[index][1] && i == 3) {
                const leftarm = document.createElement("div")
                leftarm.style = "border-left: 6px solid green; height: 100px; display:inline-block;"
                const rightarm = document.createElement("div")
                rightarm.style = "border-left: 6px solid green; height: 100px;margin-left:20px; display:inline-block;"
                const shoulder = document.createElement("hr")
                shoulder.style = "margin:0;height:2px; width: 60px;border-width:0;color:black;background-color:black"
                child.replaceChild(leftarm, child.firstChild)
                child.replaceChild(rightarm, child.firstChild.nextSibling.nextSibling)
            }
            else if (i == 4 && this.people[index][1]){
                child.style.marginLeft = "0px"

            }
            else if (i < this.people[index][0].childElementCount - 1 && this.people[index][1]){
                child.style.marginLeft = "0px"
            }

            child = child.nextSibling
		}

        if (this.people[index][1]){
            this.people[index][1] = false
        }
        else{
            this.people[index][1] = true
        }
    },

    changeGender: function(index) {
        const child = this.people[index][0].firstChild.nextSibling
        child.style.backgroundColor = color

    },
}
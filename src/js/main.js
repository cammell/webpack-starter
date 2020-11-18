const name="Pawel", 
        age=44;

console.log(`Hello there, my name is ${name} and im ${age}`);

const date=new Date();
document.querySelector('.navigation-header__date--js').innerHTML=date;

//function homework week 5



function printNameAge(name, age) {
        //console.log('Hello from function printNameAge. My name is ${name} and im ${age}');
        return `Hello from function printNameAge. My name is ${name} and im ${age} years old`
}

//fat arrow function, homework week 5

const printNameAgeArrow=(name, age) => {
        return  `Hello from function printNameAgeArrow. My name is ${name} and im ${age} years old`
}

function addParagraph(name, age, arr) {
        const newP=document.createElement("p");
        let      newText;
        if(!arr) {
                newText=document.createTextNode(printNameAge(name, age));
        } else
                newText=document.createTextNode(printNameAgeArrow(name, age));
        
        newP.appendChild(newText);
        const currentP= document.querySelector('.article--js');
        currentP.insertBefore(newP, null);
}

const addP = {
        name: undefined,
        age: undefined,
        printNameAgeMethod: (name, age) => {
                return  `Hello from function printNameAgeMethod. My name is ${name} and im ${age} years old`
        },
        addParagraphMethod: (name, age) => {
                const newP=document.createElement("p");
                let      newText;
                newText=document.createTextNode(addP.printNameAgeMethod(name, age));
                newP.appendChild(newText);
                const currentP= document.querySelector('.article--js');
                currentP.insertBefore(newP, null);
        },
}

const hamburger= document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
        const nav=document.querySelector('.navigation--js');
        nav.classList.toggle('navigation--open');
})
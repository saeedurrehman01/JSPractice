// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// console.log(sum(1, 2, 3, 4));

// function sum(...args) {
//     console.log(`${n * 5}`);
// }

// console.log(sum(1, 2, 3, 4, 5));

// function interest(principal, rate, years) {
//     rate = rate || 3.5;
//     years = rate || 5;
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000));


// Rest Operator ********
// function myBio(firstName, lastName, ...otherInfo) {
//     return `${firstName} ${lastName} ${otherInfo}`;
// }

// // Invoke myBio function while passing five arguments to its parameters:
// console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));

// function sum(a, ...b) {
//     let c = 0;
//     let arr = []
//     for (let num of b) {
//         c = a + num;
//         arr.push(c)
//     }
//     console.log(arr);
// }

// sum(1, 2, 3, 4, 5);

//

// const numbers = [1, 2, 3, 4, 5];


// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(sum);

// ******************************************************************

// Getters - Setters / Try - Catch
const person = {
    firstName: 'Saeed',
    lastName: 'Ur Rehman',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a First and Last Name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 'ABC ZXC';
}
catch (e) {
    console.log(e);
}

// getters => access  properties
// setters => change (mutate) them

console.log(person);

// *********************************************************

// This keyword ******************

// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

video.play();

// Exercise 1 **********************

function sum(...items) {
    if (items.length == 1 && Array.isArray(items[0]))
        items = [...items[0]]

    return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4]));

// Exercise 2 ***********************

let circle = {
    radius: 2,
    get area() {
        return Math.PI ** this.radius
    }
};

console.log(circle.area);

//Exercise 3 *****************************
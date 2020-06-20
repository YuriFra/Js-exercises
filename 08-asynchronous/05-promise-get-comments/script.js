(() => {
    document.querySelector('#run').addEventListener('click', () => {
        let promise = lib.getPosts();
        promise.then((posts) => {
            posts.forEach((post) => {
                // you have to make a new promise for each item in the array of posts
                lib.getComments(post.id).then((comments) => {
                    console.table(comments);
                });
            });
        }, () => {
            alert('ERROR');
        })
    });
})();

/*
var animal = 'monkey';
function test() {
    if {
        console.log(animal);
    }
}
test()
// console will log monkey

let animal = 'monkey';
function test2() {
    var animal = 'donkey';
    if {
        console.log(animal);
    }
}
test2()
// let animal has a global scope, var a local one so the console will print donkey monkey
// with let you can rewrite the value of your variable
// global scope of let, they can be changed anywhere in the code! so be carefull to use them

let animal = 'monkey';
function test2() {
    animal = 'donkey';
    if {
        console.log(animal);
    }
}
test2()
// will log donkey donkey - scope is still global

let animal = 'monkey';
function test2() {
    animal = 'donkey';
    if {
        console.log(animal);
    }
}
test2()
// will log donkey donkey - scope is still global


function test2() {
let animal = 'monkey';
    if {
        let animal = 'donkey';
        console.log(animal);
    }
}
test2()
// logs monkey donkey because both cases are true, let has 'block scope', donkey is only accessible in the if scope
// variables need to be safe of overwriting by others

function test2() {
var animal = 'monkey';
    if {
        var animal = 'donkey';
        console.log(animal);
    }
}
test2()
// logs monkey monkey, exposes to the function
// if you don't define a variable it will be available anywhere
*/

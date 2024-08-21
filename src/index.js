/*Example 1*/
import {printName} from "./fileAA";

function init(){
    let nameElement = document.getElementById('name');
    nameElement.innerText = printName();
}

init();


/*Example 2*/
// import image from "./images/dog1.png"
// import {printName} from "./fileAA";
//
// function init(){
//     let nameElement = document.getElementById('name');
//     nameElement.innerText = printName();
//     let imageElement = document.createElement('img');
//     imageElement.src = image;
//     nameElement.appendChild(imageElement)
// }
//
// init();



/*Example 3*/
// import {printLastName} from "./fileB";
// import {printName} from "./fileAA";
//
//
// function init(){
//     let nameElement = document.getElementById('name');
//     nameElement.innerText = printName();
//
//     document.getElementById('button_1').addEventListener('click', async()=> {
//         console.log(printLastName);
//     });
// }
//
// init()

/*Example 4*/
// import {printName} from "./fileAA";
//
// function init(){
//     let nameElement = document.getElementById('name');
//     nameElement.innerText = printName();
//
//
//     document.getElementById('button_1').addEventListener('click', async()=> {
//         const modules = {
//             moduleB: () => import("./fileB.js" /* webpackChunkName: "moduleB" */),
//         }
//         const moduleB = await modules['moduleB']()
//         console.log(moduleB.printLastName());
//     });
// }
//
// init()

/*Example 5*/
// import {printName} from "./fileAA";
//
// function init(){
//     let nameElement = document.getElementById('name');
//     nameElement.innerText = printName();
//
//     document.getElementById('button_1').addEventListener('click', async()=> {
//         const modules = {
//             moduleB: () => import("./fileB.js" /* webpackChunkName: "moduleB" */),
//         }
//         const moduleB = await modules['moduleB']()
//         console.log(moduleB.printLastName());
//     });
//
//     document.getElementById('button_2').addEventListener('click', async()=> {
//         const modules = {
//             moduleC: () => import("./fileC.js" /* webpackChunkName: "moduleC" */),
//         }
//         const moduleC = await modules['moduleC']()
//         console.log(moduleC.printJob());
//     });
// }
//
// init()

/*
file b -> file d
file c -> file d
 */

/*Example 6*/
// import {printName} from "./fileAA";
//
// function init(){
//     let nameElement = document.getElementById('name');
//     nameElement.innerText = printName();
//
//     document.getElementById('button_1').addEventListener('click', async()=> {
//         const modules = {
//             moduleB: () => import("./fileB.js" /* webpackChunkName: "moduleB" */),
//         }
//         const moduleB = await modules['moduleB']()
//         console.log(moduleB.printLastName());
//     });
//
//     document.getElementById('button_2').addEventListener('click', async()=> {
//         const modules = {
//             moduleC: () => import("./fileC.js" /* webpackChunkName: "moduleC" */),
//         }
//         const moduleC = await modules['moduleC']()
//         console.log(moduleC.printJob());
//     });
//
//     document.getElementById('button_3').addEventListener('click', async()=> {
//         const modules = {
//             moduleD: () => import("./fileD.js" /* webpackChunkName: "moduleD" */),
//         }
//         const moduleD = await modules['moduleD']()
//         console.log(moduleD.printCity());
//     });
// }
//
// init()

/*
 file b -> file e
 file c -> file e & f
 file d -> file f
 */

/*Example 7*/
// import {printName} from "./fileAA";
//
// export function notUse(){
//     console.log('not used')
// }
//
//
// function init(){
//     console.log(printName())
// }
//
// init()

// /*Example 8*/
// import {printName} from "./flieA";
// function init(){
//     //here some comments
//     console.log(printName())
// }
//
// init()

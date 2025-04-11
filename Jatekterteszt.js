import Jatekter from "./Jatekter.js";


const szuloElem = document.querySelector('main'); // vagy bármely HTML elem, amit átadsz
const jatek = new Jatekter(szuloElem);
const TESZTLISTA=[{

    index:4,
    vart:[false, false, false,
        false, true, false,
        false, false, false],
    nev:"középső",
    
},
{
    index:5,
    vart:[false, false, true,
        false, false, true,
        false, false, true],
    nev:"jobb szélső középen",
   
},
{
    index:3,
    vart:[true, false, true,
        true, true, true,
        true, false, true],
    nev:"bal szélső középen",
    
},

{
    index:1,
    vart:[false, true, false,
        true, false, true,
        true, false, true],
    nev:"felső sor",
    
},
{
    index:7,
    vart:[false, true, false,
        true, true, true,
        false, true, false],
    nev:"alsó sor",
    
},
{
    index:0,
    vart:[true, false, false,
        true, true, true,
        false, true, false],
    nev:"bal felső sarok",
    
},
{
    index:6,
    vart:[true, false, false,
        true, true, true,
        true, false, false],
    nev:"bal alsó sarok",
    
},
{
    index:2,
    vart:[true, true, true,
        true, true, false,
        true, false, false],
    nev:"jobb felső sarok",
    
},
{
    index:8,
    vart:[false, false, false,
        false, true, true,
        false, true, true],
    nev:"jobb alsó sarok",
}
];


function TESZT(){
    for (let i = 0; i < TESZTLISTA.length; i++) {
        const e = TESZTLISTA[i];
        console.log(e);
    }
    
}

TESZT();
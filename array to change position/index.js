

const anemo = document.querySelector('.Anemo');
const cryo = document.querySelector('.Cryo');
const dendro = document.querySelector('.Dendro');
const elec = document.querySelector('.Electro');
const geo = document.querySelector('.Geo');
const hydro = document.querySelector('.Hydro');
const pyro = document.querySelector('.Pyro');


const element = document.querySelector('.element');

const btn = document.querySelector('.btn');


const rotate = document.querySelector('.rotate');

var elements = [anemo,cryo,dendro,elec,geo,hydro,pyro];


console.log(element);

btn.addEventListener('click',()=>{
    //   elec.classList.toggle('rotate');
       // temp = anemo.src;
       // anemo.src = cryo.src;
       // cryo.src = temp;
    
       var temp =elements[0].src;
       for(let i=0;i< 7;i++){
           if(i == 6){ 
               elements[i].src = temp;
   
           }
           if(i!=6){
           elements[i].src = elements[i+1].src;
           }
       }
      
     

   
   })







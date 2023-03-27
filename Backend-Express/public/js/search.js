const menuOne = document.getElementById('menuOne');
const menuTwo = document.getElementById('menuTwo');
const menuThree = document.getElementById('menuThree');
const menuFour = document.getElementById('menuFour');
const menuFive = document.getElementById('menuFive');

const mouseOverMenu = () =>{
    menuOne.style.textDecoration = 'underline'; 
};

const mouseOutMenu = () =>{
    menuOne.style.textDecoration = 'none';
};

const mouseOverMenuTwo = () =>{
    menuTwo.style.textDecoration = 'underline';

};

const mouseOutMenuTwo = () =>{
    menuTwo.style.textDecoration = 'none';

};

const mouseOverMenuThree = () =>{
    menuThree.style.textDecoration = 'underline';

}

const mouseOutMenuThree = ()=> {
    menuThree.style.textDecoration = 'none';
};

const mouseOverMenuFour = () =>{
    menuFour.style.textDecoration = 'underline';
}

const mouseOutMenuFour = () =>{
    menuFour.style.textDecoration = 'none'
}

const mouseOverMenuFive = function(){
    menuFive.style.textDecoration = 'underline';
};

const mouseOutMenuFive = function(){
    menuFive.style.textDecoration = 'none';
};




function clickedImage(id){
    document.getElementById('img-cerveja01').style.opacity = 1;

    document.getElementById(id).style.opacity = 0.5;
    
}
let btnPlus = document.getElementById('btnp');
let btnMoins = document.getElementById('btnm');
let btnadd = document.getElementById('add_button');




btnPlus.addEventListener('click', ajouter);
btnMoins.addEventListener('click', enlever);
btnadd.addEventListener('click', viderPanier);






function ajouter(){
    document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) +1;
    sumTotal();
    totTotal();
}

function enlever(){
    if(document.querySelector('.qty').value > 0){
        document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) -1;
        sumTotal();
        totTotal(); 
    }
    else{
        alert("Le panier est vide");
    }
}

function sumTotal(){
    let prix = parseInt(document.querySelector('.prix').innerText);
    let qty = parseInt(document.querySelector('.qty').value);
    let total = prix*qty;

     document.querySelector('.prixTotal').innerText = total + " €";
}

function viderPanier(){
    if(document.querySelector('.qty').value > 0){
        document.querySelector('.qty').value = 0;
    }
    
}

function totTotal(){
    let prix = parseInt(document.querySelector('.prix').innerText);
    let qty = parseInt(document.querySelector('.qty').value);
    let total = prix*qty;
    let tot = total;

    document.getElementById('total_display').innerHTML = tot + " €";
}

function changeBtn(){
    let btnchange = document.querySelector('.fa-solid');
    console.log(btnchange);
    if(btnchange.style.color != "red"){
        btnchange.style.color = "red";
    }
    else{
        btnchange.style.color = "black ";
    }
}

// ARTICLE DEUX //

let butonp = document.getElementById('btnp1');
let butonm = document.getElementById('btnm2');



butonp.addEventListener('click', addProduit);
butonm.addEventListener('click', removeProduit);
btnadd.addEventListener('click', viderCart);



function addProduit(){
    document.querySelector('.qty1').value = parseInt(document.querySelector('.qty1').value) +1;
    sumProduit();
    global();
}

function removeProduit(){
    if(document.querySelector('.qty1').value > 0){
        document.querySelector('.qty1').value = parseInt(document.querySelector('.qty1').value) -1;
        sumProduit();
        global();
    }
    else{
        alert("Le Panier est vider !")
    }
}

function sumProduit(){
    let price = parseInt(document.querySelector('.prix1').innerHTML);
    let qty1 = parseInt(document.querySelector('.qty1').value);
    let sum = price*qty1;

    document.querySelector('.prixTotal1').innerHTML = sum + " €";
}

function viderCart(){
    if(document.querySelector('.qty1').value > 0){
        document.querySelector('.qty1').value = 0;
    }
    else{
        alert("Le Panier est Vider !");
    }
}

function global(){
    let price = parseInt(document.querySelector('.prix1').innerHTML);
    let qty1 = parseInt(document.querySelector('.qty1').value);
    let sum = price*qty1;
    let sumglobal = sum;

    document.querySelector('.total_display').innerHTML = sumglobal + " €";
    
}

function changeButton(){
    let button = document.querySelector('#icon1');
    if(button.style.color != "red"){
        button.style.color = "red";
    }
    else{
        button.style.color = "black";
    }
}


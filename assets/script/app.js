document.getElementById('Add 1 LS').addEventListener("click",function(){
    window.localStorage.setItem('name','Paramesh1');
    updateUI();

});
document.getElementById('Add another LS').addEventListener('click',function(){


});
document.getElementById('Get 1 from LS').addEventListener('click',function(){


});
document.getElementById('Remove 1 from LS').addEventListener('click',function(){


});
document.getElementById('Remove all from LS').addEventListener('click',function(){


});

function updateUI(){
    var values = [], keys=Object.keys(localStorage), i=keys.length;
    while(i--){values.push(localStorage.getItem(Keys[i]));}

    document.getElementById("ls-currently").textContent=values;
}


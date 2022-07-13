let donut = 0;
let auto = 0;
let multi = 0;
let autoCost = 100;
let multiCost = 100;
let multiDonut = 1;

function AddDonut() {
    if(multi > 0){
        donut += multiDonut;
    }
    else{
        donut++;
    }
    document.getElementById("donutCount").innerHTML = donut;
  };

function AddAuto() {
    if(donut >= autoCost){
        donut -= autoCost;
        auto++;
        autoCost += (autoCost * .1);
    }
    setInterval(autoClick, 1000/auto)
    function autoClick(){
        donut +=multiDonut;
        console.log(donut)
        document.getElementById("donutCount").innerHTML = donut;
    };
    document.getElementById("autoCount").innerHTML = auto;
    document.getElementById("autoCost").innerHTML = autoCost;
    document.getElementById("donutCount").innerHTML = donut;
    };




function AddMulti() {
    if(donut >= multiCost){
        donut -= multiCost;
        multi++;
        multiCost += (multiCost * .2);
        multiDonut += (multiDonut * .2);
    }
    document.getElementById("multiCount").innerHTML = multi;
    document.getElementById("multiCost").innerHTML = multiCost;
    document.getElementById("donutCount").innerHTML = donut;
    };

//modals 1

const modalOne = document.getElementById("usModal");

// Get the button that opens the modal
const btnOne = document.getElementById("aboutUs");

// Get the <span> element that closes the modal
const spanOne = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}

//modals 2

const modalTwo = document.getElementById("meModal");

// Get the button that opens the modal
const btnTwo = document.getElementById("aboutMe");

// Get the <span> element that closes the modal
const spanTwo = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}
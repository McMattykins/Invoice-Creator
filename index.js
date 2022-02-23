/*
This could potentially be changed into an object and then the number of functions could possibly be reduced as well.
I'll have to come back to this project and after I've learned more.
 */
//Elements used by script
const washCarBtn = document.getElementById("wash-car-btn");
const mowLawnBtn = document.getElementById("mow-lawn-btn");
const pullWeedsBtn = document.getElementById("pull-weeds-btn");
const washCarEl = document.getElementById("wash-car-el");
const mowLawnEl = document.getElementById("mow-lawn-el");
const pullWeedsEl = document.getElementById("pull-weeds-el");
const notesEl = document.getElementById("notes-el");
const totalEl = document.getElementById("total-el");
const removeWashCar = document.getElementById("remove-wash-car");
const removeMowLawn = document.getElementById("remove-mow-lawn");
const removePullWeeds = document.getElementById("remove-pull-weeds");
const sendInvoiceBtn = document.getElementById("send-invoice-btn");

//Checking if the task is on the list or not
let washCarTsk = false;
let mowLawnTsk = false;
let pullWeedsTsk = false;

let totalSum = 0;

updateTotal();

function updateTotal() {
  totalSum = washCarTsk * 10 + mowLawnTsk * 20 + pullWeedsTsk * 30;
  if (totalSum) {
    notesEl.style.display = "inline";
  } else {
    notesEl.style.display = "none";
  }
  totalEl.textContent = `$${totalSum}`;
}

//Functions to remove and add services from the invoice
function serviceAdded(e) {
  e.style.display = "flex";
  updateTotal();
}

function serviceRemoved(e) {
  e.style.display = "none";
  updateTotal();
}

//Event listeners for buttons
washCarBtn.addEventListener("click", function () {
  washCarTsk = true;
  serviceAdded(washCarEl);
});

mowLawnBtn.addEventListener("click", function () {
  mowLawnTsk = true;
  serviceAdded(mowLawnEl);
});

pullWeedsBtn.addEventListener("click", function () {
  pullWeedsTsk = true;
  serviceAdded(pullWeedsEl);
});

removeWashCar.addEventListener("click", function () {
  washCarTsk = false;
  serviceRemoved(washCarEl);
});

removeMowLawn.addEventListener("click", function () {
  mowLawnTsk = false;
  serviceRemoved(mowLawnEl);
});

removePullWeeds.addEventListener("click", function () {
  pullWeedsTsk = false;
  serviceRemoved(pullWeedsEl);
});

sendInvoiceBtn.addEventListener("click", function () {
  //This function seems too messy. Will have to clean this up when I make changes later.
  serviceRemoved(washCarEl);
  serviceRemoved(mowLawnEl);
  serviceRemoved(pullWeedsEl);
  washCarTsk = false;
  mowLawnTsk = false;
  pullWeedsTsk = false;
  updateTotal();
});

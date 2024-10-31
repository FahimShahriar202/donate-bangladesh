//  current-balance 

// noakhali-amount  btn-donate-now noakhali-input
// feni-amount  feni-input  btn-donate-now-feni
// quota-amount quota-input  btn-donate-now-quota




// home-btn


// common variables st
const homeBtn = document.getElementById("home-btn")

// common variables st



// close button refresh off
document.getElementById("noa-close").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("my_modal_5").close();
})

document.getElementById("feni-close").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("my_modal_2").close();
})

document.getElementById("quota-close").addEventListener("click",function(event){
  event.preventDefault();
  document.getElementById("my_modal_1").close();
})

// close button refresh off




// ger input value by id common function
function getInputValueById(id) {
    
    const inputElement = document.getElementById(id);

    return inputElement.value;
};
// ger input value by id common function done




// ger input innertext by id common function
function getInputTextById(id) {
    
    const inputText = document.getElementById(id);

    return inputText.innerText;
};
// ger input innertext by id common function done


// sticky navbar
window.addEventListener(scroll,function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky")

});


// blog work

document.getElementById('blog-btn2').addEventListener('click', function(event){
  event.preventDefault();
  window.location.href = "blog.html";
});
// blog button work done



// // history work
const donationHistorySection = document.getElementById("history-section")
// noakhali
document.getElementById("btn-donate-now-noakhali").addEventListener("click", function(event){

  event.preventDefault();
  

  const noakhaliInpVal = document.getElementById("noakhali-input").value;

  const noaParaNew = document.createElement('p');
  noaParaNew.textContent = `\nDonated amount: ${noakhaliInpVal} BDT in Noakhali`;
  
  donationHistorySection.appendChild(noaParaNew);

});


// feni 
document.getElementById("btn-donate-now-feni").addEventListener("click", function(event){
  event.preventDefault();
  

  const feniInpVal = document.getElementById("feni-input").value;

  const feniParaNew = document.createElement('p');
  feniParaNew.textContent = `\nDonated amount: ${feniInpVal} BDT in feni `;

  donationHistorySection.appendChild(feniParaNew);


})


// quota
document.getElementById("btn-donate-now-quota").addEventListener("click", function(event){
  event.preventDefault();
  

  const quotaInpVal = document.getElementById("quota-input").value;

  const quotaParaNew = document.createElement('p');
  quotaParaNew.textContent = `\nDonated amount: ${quotaInpVal} BDT in Quota section `;

  donationHistorySection.appendChild(quotaParaNew);


})


// // history done



// toggle donation and history section
// Select buttons and sections
const donationButton = document.getElementById('btn-donation');
const historyButton = document.getElementById('btn-history');
const donationSection = document.getElementById('donation-section');
const historySection = document.getElementById('history-section');





donationButton.addEventListener('click', function()  {
  donationSection.classList.remove('hidden'); // Show donation section
  historySection.classList.add('hidden');     // Hide history section
});



historyButton.addEventListener('click', function() {
  historySection.classList.remove('hidden');  // Show history section
  donationSection.classList.add('hidden');    // Hide donation section
});


// toggle donation and history section done




// donation and history button design toggle

const btnDonation = document.getElementById('btn-donation');
        const btnHistory = document.getElementById('btn-history');

        // Mouseover and mouseout for btn-donation
        btnDonation.addEventListener('mouseover', function() {
            btnDonation.classList.add('btn-success');
            btnDonation.classList.remove('btn-active');
            btnHistory.classList.remove('btn-success');
            btnHistory.classList.add('btn-active');
        });

        btnDonation.addEventListener('mouseout', function() {
            btnDonation.classList.remove('btn-success');
            btnDonation.classList.add('btn-active');
        });

        // Mouseover and mouseout for btn-history
        btnHistory.addEventListener('mouseover', function() {
            btnHistory.classList.add('btn-success');
            btnHistory.classList.remove('btn-active');
            btnDonation.classList.remove('btn-success');
            btnDonation.classList.add('btn-active');
        });

        btnHistory.addEventListener('mouseout', function() {
            btnHistory.classList.remove('btn-success');
            btnHistory.classList.add('btn-active');
        });

// donation and history button design toggle done



// check if the given value is positive and numbers only

// noakhali
document.getElementById("btn-donate-now-noakhali").addEventListener("click",function(event){
  event.preventDefault();


  


  const noaVal = getInputValueById("noakhali-input");

  if (parseFloat(noaVal)>0 || typeof(noaVal)==="number") {
    const noaAmount = getInputTextById("noakhali-amount");

    const newNoaAmount = parseFloat(noaVal) + parseFloat(noaAmount);

    // updated amount
    document.getElementById("noakhali-amount").innerText = newNoaAmount;

    // updated total amount
    const totalAmount = parseFloat(getInputTextById("balance"));

    
    if (totalAmount>newNoaAmount){
      const newTotal = parseFloat(totalAmount) - parseFloat(newNoaAmount);
      console.log(newTotal)
      
  
      document.getElementById("balance").innerText = newTotal
    }

    else{
      console.log("error")
    }





    

    
  }

  else{
    console.log("error")

  }


});




// feni
document.getElementById("btn-donate-now-feni").addEventListener("click", function(event) {
  event.preventDefault();
  const feniVal = getInputValueById("feni-input");

  if (parseFloat(feniVal) > 0 || typeof(feniVal) === "number") {
    const feniAmount = getInputTextById("feni-amount");

    const newFeniAmount = parseFloat(feniVal) + parseFloat(feniAmount);

    // updated amount
    document.getElementById("feni-amount").innerText = newFeniAmount;

    // updated total amount
    const totalAmount = parseFloat(getInputTextById("balance"));

    if (totalAmount > newFeniAmount) {
      const newTotal = parseFloat(totalAmount) - parseFloat(newFeniAmount);
      // console.log(newTotal);

      document.getElementById("balance").innerText = newTotal;
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
});



// quota
document.getElementById("btn-donate-now-quota").addEventListener("click", function(event) {
  event.preventDefault();
  const quotaVal = getInputValueById("quota-input");

  if (parseFloat(quotaVal) > 0 || typeof(quotaVal) === "number") {
    const quotaAmount = getInputTextById("quota-amount");

    const newquotaAmount = parseFloat(quotaVal) + parseFloat(quotaAmount);

    // updated amount
    document.getElementById("quota-amount").innerText = newquotaAmount;

    // updated total amount
    const totalAmount = parseFloat(getInputTextById("balance"));

    if (totalAmount > newquotaAmount) {
      const newTotal = parseFloat(totalAmount) - parseFloat(newquotaAmount);
      // console.log(newTotal);

      document.getElementById("balance").innerText = newTotal;
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
});



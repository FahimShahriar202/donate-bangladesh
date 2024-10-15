//  current-balance 

// noakhali-amount  btn-donate-now noakhali-input
// feni-amount  feni-input  btn-donate-now-feni
// quota-amount quota-input  btn-donate-now-quota


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





// blog work
document.getElementById('blog').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "/blog.html";
});
// blog button work done



// history work
document.getElementById('btn-history').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "/history.html";
});
// history done


// donation work
document.getElementById('btn-donation2').addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "/index.html";
});
// donation done





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



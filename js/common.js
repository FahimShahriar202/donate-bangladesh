//  current-balance 

// noakhali-amount  btn-donate-now noakhali-input
// feni-amount  feni-input  btn-donate-now-feni
// quota-amount quota-input  btn-donate-now-


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
  // 
  // 
  // console.log(noaVal)
  // if (parseFloat(noaVal)>0 && typeof(noaVal)==="number") {
  //   const noaAmount = getInputValueById("noakhali-amount").innerText;
  //   
  //   getInputValueById("noakhali-amount").innerText = newNoaAmount;


//   }

//   else{
    

//   }


// })


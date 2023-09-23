// function beforesubmit(){
//     let outputdate  = document.querySelector('.outputdate');
//     let inputdate  = document.querySelector('.inputdate');
//     console.log('inputdate',inputdate.value);

//     let formatteddate = new Date(inputdate.value).toLocaleDateString();
//     outputdate.value = formatteddate(); 
// }
// function timestamp() { 
//     var response = document.getElementById("g-recaptcha-response");
//      if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
//      elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
//      }
//      }
//     setInterval(timestamp, 500); 


let captchachecked = false;
debugger;
function beforesubmit(event){
	 if (captchachecked) {
    let outputdate  = document.querySelector('.outputdate');
    let inputdate  = document.querySelector('.inputdate');
    console.log('inputdate',inputdate.value);

    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate(); 
	} else {
    alert("please check the reCAPTCHA box to submit the form");
    event.preventDefault();
  }
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") {
     var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
     elems["ts"] = JSON.stringify(new Date().getTime());
     document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     }
     }
    setInterval(timestamp, 500); 
function captchasuccess() {
  captchachecked = true;
}
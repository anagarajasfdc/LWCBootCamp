function beforesubmit(){
    let outputdate  = document.querySelector('.outputdate');
    let inputdate  = document.querySelector('.inputdate');
    console.log('inputdate',inputdate.value);

    let formatteddate = new Date(inputdate.value).toLocaleDateString();
    outputdate.value = formatteddate(); 
}
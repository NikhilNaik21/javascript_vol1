function myfunction() {
    //document = entire web page
   // console.log("javascript is here....");
   // console.log(document);
   // console.log(typeof document);
    //select element by ID
    console.log(document.getElementById("x1"));
    //select element by id and use its value
    var amount = document.getElementById("x1").value
    //console.log(amount);
    var DISCOUNT = document.getElementById("x2").value
 
   console.log(typeof amount);
   var p =parseInt(amount)     
   var d =parseInt(DISCOUNT)
   
   amount =Math.round(amount) 
   DISCOUNT = Math.round(DISCOUNT)                 
   console.log(amount);
   console.log(DISCOUNT);
    var DIS =  ((d/100) *amount); 
    var final =amount-DIS
    document.getElementById("m1").innerHTML=` &#8377; ${ DIS}` 

                                           
   document.getElementById("m2").innerHTML=` &#8377; ${ final}`
}
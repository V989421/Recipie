function vadai() {
    var vadaCount = window.prompt("How much do you want ?");
    document.write("price of vadai is Rs.10",vadaCount,"How much you want?" );
    var price = 10
    var result = price * vadaCount
    window.alert(result, "Rs");
    window.alert("price of vadai");
    // if 3 > 10 "" offer
    // 3 < "ok vaanga"
    // 10 > "saapdaadinga"

    // var vadaiCount = window.prompt("Vadai is 10rs ? How much you are going to buy");
    // console.log("You selected", vadaiCount, "vadai right");
}

function dosai(){
    var DosaiCount=window.prompt("There are many variaties of dosai","Which you need");
    document.write("I need two plain Dosai",DosaiCount,"It's Cost is 250");
    var price=65
    var result=price*DosaiCount
    window.alert(result,"Rs");
    window.alert("price of dosai");
}

function paraota(){
    var paraotaCount=window.prompt("Paroata cost of one set is 55.Rs");
    document.write("We need 10 paraota",paraotaCount,"Pay the bill and give the bill to parcel section");
    var price=25
    var result=price*paraotaCount
    window.alert(result,"Rs");
    window.alert("price of paraota");

}

function pongal(){
    var pongalCount=window.prompt("pongal cost is 75Rs","chef add more ghee and cashewnuts for special taste");
    document.write("we need 50 pongal",pongalCount,"Get extra sidedish for your ordered menu");
    var price=70
    var result=price*pongalCount
    window.alert(result,"Rs");
    window.alert("price of pongal");
}

// function registration(event){
//     // Page refresh pannama vechukuraan
//     event.preventDefault();
//     // event la enna irukkunnu pakarakku 
//     // console.log(event);
//     let name = document.getElementById("exampleInputName1").value;
//     let email=document.getElementById("exampleInputEmail1").value;

//     let password=document.getElementById("exampleInputPassword1").value;


//     if (name.length > 0 && email.length > 0 && password.length > 0) {
//         document.write("ALL DETAILS ARE FILLED");

//     }
// }

function registration(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("age").value;
    let password = document.getElementById("email").value;

    if (name.length > 0 && email.length > 0 && password.length > 0) {
        document.write("All details are filled");
        window.alert("Hurrey have filled your details")
        // You can add code here to proceed with the registration process.
    } else {
        document.write("Please fill in all the fields.");
    }
}

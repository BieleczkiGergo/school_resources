


function function1 (){
    document.getElementById('basic').innerHTML = "Content changed";

}

function function2 (){
    document.getElementById('basic').style.fontFamily = "verdana";

}

function blockTest(){
    let num1 = 2;
    var num2 = 4;
    var inblock = document.getElementById("inblock");
    var outblock = document.getElementById("outblock");

    {
        let num1 = 3;
        var num2 = 5;
        inblock.innerHTML = "" + num1 + ", " + num2;
    }

    outblock.innerHTML = "" + num1 + ", " + num2;
}
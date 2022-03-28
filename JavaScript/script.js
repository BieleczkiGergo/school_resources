const PI = 3.1415926535;


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

function constants(){
    document.getElementById("constPI").innerHTML += PI;
    const cList = ["Arch", "Fedora", "Ubuntu"];
    document.getElementById("constbase").innerHTML += cList;
    cList[1] = "Debian";
    document.getElementById("constchanged").innerHTML += cList;
    cList.push("Manjaro");
    document.getElementById("constappended").innerHTML += cList;
    cList.pop();
    document.getElementById("constremoved").innerHTML += cList;
    {
        const PI = 87;
        //When used inside different block,
        //variable can be redeclared
        document.getElementById("constinside").innerHTML += PI;
        //Could be used in hacking
        //Doesn't even give error
        document.getElementById("constfunction").innerHTML += constTest(3);
        //But it goes only for that scope
        //You cannot use this in other functions, so it's not that useful
    }

}

function constTest(radius){
    return radius*2*PI;
}
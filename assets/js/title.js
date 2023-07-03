if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 225);

}

var x = 0;

var titleText = [ " - ", " &#92; ", " | ", " / ", " S- ", " S&#92; ", " S| ", " S/ ", " Sq- ", " Sq&#92; ", " Sq| ", " Sq/ ", " Squ- ", " Squ&#92; ", " Squ| ", " Squ/ ", " Squi- ", " Squi&#92; ", " Squi| ", " Squi/ ", " Squir- ", " Squir&#92; ", " Squir| ", " Squir/ ", " Squirr- ", " Squirr&#92; ", " Squirr| ", " Squirr/ ", " Squirre- ", " Squirre&#92; ", " Squirre| ", " Squirre/ ", " Squirrel- ", " Squirrel&#92; ", " Squirrel| ", " Squirrel/ ", " Squirrel- ", " Squirrel&#92; ", " Squirrel| ", " Squirrel/ ", " Squirrel- ", " Squirrel&#92; ", " Squirrel| ", " Squirrel/ ", " Squirrel ", " Squirrel ", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel", "Squirrel" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
	
}
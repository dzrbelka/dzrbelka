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

var titleText = [ " - ", " &#92; ", " | ", " / ", " B- ", " B&#92; ", " B| ", " B/ ", " Be- ", " Be&#92; ", " Be| ", " Be/ ", " Bel- ", " Bel&#92; ", " Bel| ", " Bel/ ", " Belk- ", " Belk&#92; ", " Belk| ", " Belk/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka- ", " Belka&#92; ", " Belka| ", " Belka/ ", " Belka ", " Belka ", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka", "Belka" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
	
}
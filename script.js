/* var data;

Papa.parse('Episode.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    data = results.data;
  }
}); */
function vakerGehad() {
d3.csv("EpisodeKomma.csv").then(function(data) {
  data.forEach(function(d) {
    if (d.EpisodeTitel == 'beroerte') {
      window.location.replace("bespreekRisicofactoren.html");
    }
    else {
      window.location.replace("beoordelingNeuroloog.html")
    }
  });
});
}

function comorbiditeitAanwezig() {
d3.csv("EpisodeKomma.csv").then(function(data) {
  data.forEach(function(d) {
    if (d.EpisodeEind == '' && d.EpisodeStart != '') {
      showPostievePrognose();
    }
    else {
      showErnstigeUitvalsverschijnselen();
    }
  });
});
}

function showPostievePrognose() {
  var x = document.getElementById("positievePrognose");
    x.style.display = "block";
}
function showErnstigeUitvalsverschijnselen() {
  var x = document.getElementById("ernstigeUitvalsverschijnselen");
    x.style.display = "block";
}

function showFASTarm() {
  var x = document.getElementById("FASTarm");
    x.style.display = "block";
}
function showFASTspreken() {
  var x = document.getElementById("FASTspreken");
    x.style.display = "block";
}
function showAanwezig() {
  var x = document.getElementById("aanwezig");
    x.style.display = "block";
}

function showindicatiesSpoedverwijzing() {
  var x = document.getElementById("indicatiesSpoedverwijzing");
    x.style.display = "block";
}


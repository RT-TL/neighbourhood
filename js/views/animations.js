/**
 * Created by SpinyNorman on 06/12/2016.
 */

//Configure variables
var hider = document.getElementById("hider");

//Toggle menu bar
hider.addEventListener("click", function(){
    var sidebar = document.getElementById("wrapper");
    sidebar.classList.toggle('toggled');
    hider.classList.toggle('inverted');
});

const pageLoad = function() {};
//above line stops the stupid popup
//inject the html at window load
window.onload = function() {

    try {
        var x = document.getElementsByClassName("FullWidth Right");
        var y = x[0].innerHTML;
        x[0].innerHTML = '<span id="download" title="test ajax response" onClick="test()"><b>Ajax Test</b></span>&nbsp;&nbsp;<span id="download" title="Download the current page as a PDF file" onClick="exportTwo()"><b>Download As PDF</b></span>&nbsp;&nbsp; <span id="download" title="Print this page" onClick="window.print();"><b>Print this Page</b></span>&nbsp;&nbsp;' + y;
    } catch (e) {
        console.log(e);
    }
}
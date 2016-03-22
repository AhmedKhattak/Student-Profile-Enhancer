/*function exportTwo() {

	$('body').scrollTop(0);
    var canvasToImage = function(canvas){
        var img = new Image();
        var dataURL = canvas.toDataURL('image/png');
        img.src = dataURL;
        return img;
    };
    var canvasShiftImage = function(oldCanvas,shiftAmt){
        shiftAmt = parseInt(shiftAmt) || 0;
        if(!shiftAmt){ return oldCanvas; }
        
        var newCanvas = document.createElement('canvas');
        newCanvas.height = oldCanvas.height - shiftAmt;
        newCanvas.width = oldCanvas.width;
        var ctx = newCanvas.getContext('2d');
        
        var img = canvasToImage(oldCanvas);
        ctx.drawImage(img,0, shiftAmt, img.width, img.height, 0, 0, img.width, img.height);
        
        return newCanvas;
    };
    
    
    var canvasToImageSuccess = function(canvas){
        var pdf = new jsPDF('portrate'),
            pdfInternals = pdf.internal,
            pdfPageSize = pdfInternals.pageSize,
            pdfScaleFactor = pdfInternals.scaleFactor,
            pdfPageWidth = pdfPageSize.width,
            pdfPageHeight = pdfPageSize.height,
            totalPdfHeight = 0,
            htmlPageHeight = canvas.height,
            htmlScaleFactor = canvas.width / (pdfPageWidth * pdfScaleFactor),
            safetyNet = 0;
        
        while(totalPdfHeight < htmlPageHeight && safetyNet < 15){
            var newCanvas = canvasShiftImage(canvas, totalPdfHeight);
            pdf.addImage(newCanvas, 'png', 0, 0, pdfPageWidth, 0, null, 'NONE');
            
            totalPdfHeight += (pdfPageHeight * pdfScaleFactor * htmlScaleFactor);
            
            if(totalPdfHeight < htmlPageHeight){
                pdf.addPage();
            }
            safetyNet++;
        }
        
        pdf.save('test.pdf');
    };
    
    html2canvas(document.body, {

    	//Render each letter, help avoid text smudging
        letterRendering: true,
        //Show log of process in console
        logging: true,
        onrendered: function(canvas){
            canvasToImageSuccess(canvas);
        }
    });
}
*/









//function download () {
//var pdf = new jsPDF('p','pt','a4');
//pdf.addHTML(document.title);


//pdf.save('test.pdf');

/*
var 
 form = $('html');
 $('body').scrollTop(0);
 createPDF();
//create pdf
function createPDF(){
 getCanvas().then(function(canvas){
  var 
  img = canvas.toDataURL("image/png"),
  doc = new jsPDF({
          unit:'px', 
          format:'a4'
        });     
        doc.addImage(img, 'JPEG', 2, 2,440,800);
        doc.save('test.pdf');
 });
}
 
// create canvas object
function getCanvas(){
 //form.width((a4[0]*1.33333) -80).css('max-width','none');
 return html2canvas(form); 
}



       window.resizeTo( 500,500);

*/
function exportTwo() {
    // body...

    var pdf;
    pdf = new jsPDF('a4');
    pdf.addHTML(document.body, function() {
        pdf.save(window.location.pathname + '.pdf');
        //pdf.output('dataurlnewwindow');
    });

}
/*function exportTwo() {
            html2canvas($('body'),{

            	    	//Render each letter, help avoid text smudging
        letterRendering: true,
        //Show log of process in console
        logging: true,
                onrendered: function (canvas) {                     
                            var imgString = canvas.toDataURL("image/png");
                            window.open(imgString);                  
            }

        });
  

}
/*function exportTwo(){
var ELEMENT = jQuery("html");

//get element width and height
var w = ELEMENT.width();
var h = ELEMENT.height();

//scale up your element
ELEMENT.css({
'transform': 'scale(2)',
'-ms-transform': 'scale(2)',
'-webkit-transform': 'scale(2)' });

var x=ELEMENT.width();
var y=ELEMENT.height();

//run html2canvas
html2canvas(ELEMENT, {
onrendered: function(canvas) {

//scale back your element
ELEMENT.css({
'transform': '',
'-ms-transform': '',
'-webkit-transform': '' });

//your actions to canvas
var win = window.open();
win.document.write('<img width="100%" height:"100%" src="'+canvas.toDataURL()+'"/>');
},
//set proper canvas width and height
width: x,
height: y
});
}
*/


//set flags 
//as soon as any page on the domain opens start ajax requests to target pages in background 
//get elemnts from dom
//store them in local storage 
//get update time 
//store update time
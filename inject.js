(function() {



    document.addEventListener('DOMSubtreeModified', injectJS, false);

    function injectJS() {
        if (document.head) {
            document.removeEventListener('DOMSubtreeModified', injectJS, false);
            var script5 = document.createElement("script");
            script5.src = chrome.extension.getURL('jquery-2.2.0.min.js');
            document.head.appendChild(script5);
            var script22 = document.createElement("script");
            script22.src = chrome.extension.getURL('jspdf.min.js');
            document.head.appendChild(script22);
            var lockr = document.createElement("script");
            lockr.src = chrome.extension.getURL('lockr.js');
            document.head.appendChild(lockr);
            var script = document.createElement("script");
            script.src = chrome.extension.getURL('luckyducky.js');
            document.head.appendChild(script);
            var script3 = document.createElement("link");
            script3.href = chrome.extension.getURL('custom.css');
            script3.rel = "stylesheet";
            script3.type = "text/css";
            document.head.appendChild(script3);
            var script4 = document.createElement("script");
            script4.src = chrome.extension.getURL('download.js');
            document.head.appendChild(script4);
            var script55 = document.createElement("script");
            script55.src = chrome.extension.getURL('jquery.tabletojson.js');
            document.head.appendChild(script55);
            var script553 = document.createElement("script");
            script553.src = chrome.extension.getURL('xdLocalStorage.min.js');
            document.head.appendChild(script553);
            var script6 = document.createElement("script");
            script6.src = chrome.extension.getURL('html2canvas.min.js');
            document.head.appendChild(script6);

        }
    }


})()









//function nodeInsertedCallback(event) {
//if (event.target.tagName=="script" /*&& event.srcElement.text.indexOf(testcase)!=-1*/) {
///event.preventDefault();
//      console.log(event.target);
//     console.log("----------------------------------------------------------");
//   try
// {

// console.log(document.getElementsByTagName("script")[7].innerHTML);
// console.log("overwritten");
//}
// catch(x)
//{
//console.log(x);
//  }
//}
// else
// {


// }


//};
//document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
//var x=document.scripts[8].text;
/*console.log(x);
var testcase1="Do you want to retrive your BU Email account?";
if (x.indexOf(testcase1)!=-1) 
{

	console.log("the shitty popup script has been found");
	
}
else
{
	console.log("not ");
};
console.log(x);
document.getElementById('ctl00_MenuTable').color="green";
*/
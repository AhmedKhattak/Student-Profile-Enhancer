(function() {



    document.addEventListener('DOMSubtreeModified', injectJS, false);

    function injectJS() {
        if (document.head) {
            document.removeEventListener('DOMSubtreeModified', injectJS, false);
            var script5 = document.createElement("script");
            script5.src = chrome.extension.getURL('global-scripts/jquery-2.2.0.min.js');
            document.head.appendChild(script5);
            var script22 = document.createElement("script");
            script22.src = chrome.extension.getURL('global-scripts/jspdf.min.js');
            document.head.appendChild(script22);
            var script65 = document.createElement("script");
            script65.src = chrome.extension.getURL('global-scripts/luckyducky.js');
            document.head.appendChild(script65);
            var script3 = document.createElement("link");
            script3.href = chrome.extension.getURL('global-css/custom.css');
            script3.rel = "stylesheet";
            script3.type = "text/css";
            document.head.appendChild(script3);
            var script4 = document.createElement("script");
            script4.src = chrome.extension.getURL('global-scripts/download.js');
            document.head.appendChild(script4);
            var script55 = document.createElement("script");
            script55.src = chrome.extension.getURL('global-scripts/jquery.tabletojson.js');
            document.head.appendChild(script55);
            var script6 = document.createElement("script");
            script6.src = chrome.extension.getURL('global-scripts/html2canvas.min.js');
            document.head.appendChild(script6);

        }
    }


})()



try {
    if (document.URL == "http://111.68.99.8/StudentProfile/Home.aspx") {
        console.log(document.URL);
        chrome.runtime.sendMessage('Loggedin');
    }

} catch (ex) {
    console.log(ex);

}









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
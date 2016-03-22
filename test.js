/*(function(){
 
   
 
        document.addEventListener('DOMSubtreeModified', injectJS, false);
 
        function injectJS(){
            if(document.head){
                document.removeEventListener('DOMSubtreeModified', injectJS, false);
 
                var script = document.createElement("script");
                script.src = chrome.extension.getURL('fuck.js');
                document.head.appendChild(script);
                var script2 = document.createElement("script");
                script2.src = chrome.extension.getURL('jspdf.js');
                document.head.appendChild(script2);
                console.log("fuck");
            }
        }
    
 
})()











//function nodeInsertedCallback(event) {
 //if (event.target.tagName=="script" /*&& event.srcElement.text.indexOf(testcase)!=-1*///) {
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



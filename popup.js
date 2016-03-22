// popup.js

document.getElementById('okgr8').onclick=function(){

	save();
	test();
	alert("clicked");
}

function save()
{
	//window.open('YourStudentProfile.html','_blank');
}

function test(){

Lockr.set('username', 'Coyote'); // Saved as string
Lockr.set('user_id', 12345); // Saved as number
Lockr.set('users', [{name: 'John Doe', age: 18}, {name: 'Jane Doe', age: 19}]);
}








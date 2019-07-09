// Your code goes here
let password,checkedPassword,newPassword,
newPasswordLength = 5,
emailMinLength = 6,
isConfirmed = false, 
email = prompt('What is your email ?');

if (email === null || !email){
	alert('Canceled');
} else if (email.length < emailMinLength){
	alert('I dont know any emails having name length less than 6 symbols');
} else if(email === 'user@gmail.com' || email === 'admin@gmail.com'){
	password = prompt('Write your password');
	if(password === null || !password){
		alert('Canceled');
	} else {
		if(email === 'user@gmail.com' && password === 'UserPass' || 
			email === 'admin@gmail.com' && password === 'AdminPass'){
			isConfirmed = confirm('Do you want to change your password?');
			if(isConfirmed){
				checkedPassword = prompt('Write your old password');
				if(checkedPassword === 'UserPass' && email === 'user@gmail.com' || 
					checkedPassword === 'AdminPass' && email === 'admin@gmail.com'){
					newPassword = prompt('Write your new password');
					if(newPassword.length < newPasswordLength){
						alert("It's too short password.Sorry");
					} else {
						checkedPassword = prompt('Enter your new password again');
						if(newPassword !== checkedPassword){
							alert('You wrote the wrong password');
						}
					}
				} else {
					alert('Wrong password');
				}
			} else {
				alert('You have failed the change.');
			}
		} else {
			alert('Wrong password');
		}
	}
} else{
	alert('I dont know you');
}
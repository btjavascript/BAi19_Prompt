var name = prompt('what is your name?');
document.write('<p>Name: ' + name + '</p>');

var age = prompt('How old are you?');
document.write('<p>Age: '+age+'</p>');

var isMale = confirm('Are you male?');

if (isMale == true){
    document.write('<p>Sex: Male</p>');
} else{
    document.write('<p>Sex: Female</p>');
}

var gender = isMale ? 'Male' : 'Female';
document.write('<p>Sex: '+ gender+'</p>');
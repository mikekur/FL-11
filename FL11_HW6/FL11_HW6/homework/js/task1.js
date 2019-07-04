var a1,a2,b1,b2,c1,c2;
a1 = +prompt('Enter A point x numeric value');
a2 = +prompt('Enter A point y numeric value');
b1 = +prompt('Enter B point x numeric value');
b2 = +prompt('Enter B point y numeric value');
c1 = +prompt('Enter C point x numeric value');
c2 = +prompt('Enter C point y numeric value');

var dx,dy, magicNumber = 2;
dx = (a1+b1) / magicNumber;
dy = (a2 + b2) / magicNumber;

console.log(c1 === dx && c2 === dy);
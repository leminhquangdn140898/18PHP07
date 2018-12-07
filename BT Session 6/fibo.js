var f1 = 0;
var f2 = 1;
var fn = f2;
for (var i = 1; i <= 11 ; i++) {
	document.write(fn + " ");
	fn = f1 + f2;
	f1 = f2;
	f2 = fn;
}
var a,b,c,d;
function NumberMax(a,b,c,d) {
	if(a > b && a > c && a > d ){
			document.write(a + "Là số lớn nhất");
	}
	else if(b > c && b > d){
			document.write(b + "Là số lớn nhất");
	}
	else if(c > d){
			document.write(c + "Là số lớn nhất");
	}
	else  {
		document.write(d + "Là số lớn nhất");
	}
}
NumberMax(11,5,8,10);
document.write("<br>")
function NumberMin(a,b,c,d) {
	if(a < b && a < c && a < d ){
			document.write(a + "Là số nhỏ nhất");
	}
	else if(b < c && b < d){
			document.write(b + "Là số nhỏ nhất");
	}
	else if(c < d){
			document.write(c + "Là số nhỏ nhất");
	}
	else  {
		document.write(d + "Là số nhỏ nhất");
	}
}
NumberMin(11,5,8,1);

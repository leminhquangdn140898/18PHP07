var n;
function Chanle(n) {
	 if (n % 2 == 0) 
        document.write(n + " là số chẵn");
    else
    document.write(n + " là số lẽ");
}
Chanle(1);

document.write("<br>")

function Fibonacci(n) {
    var f1 = 1;
    var f2 = 1;
    var fn = f1 + f2; 
    if (n == 1 || n == 2)
        document.write(n + " nằm trong dãy fibonacci từ 1-100");
    	
    else {
        while (fn < n) {
            f1 = f2;
            f2 = fn;
            fn = (f1 + f2);
        }
        if (fn == n) 
            document.write(n + " nằm trong dãy fibonacci từ 1-100");
        else
            document.write(n + " không nằm trong dãy fibonacci từ 1-100");
    }
}
Fibonacci(21);

document.write("<br>")

function ChinhPhuong(n) {
    var a = 1;
    while (a * a < n) {
        a++;
    }
    if (a * a == n) 
        document.write(n + " là số chính phương<br>");
    else
    document.write(n + " không phải là số chính phương<br>");
}
ChinhPhuong(4);
var m , y  ;
function CheckMonthYear(m , y) {
	switch(m){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			document.write("Đây là tháng ", m , "Năm ",y , " có 31 ngày");
			break;
		case 2:
			if (y % 4 == 0 && y % 100!= 0)  {
				document.write("Đây là tháng 2 năm:",y,"có 29 ngày");
			}
			else {
				document.write("Đây là tháng 2 năm:",y,"có 28 ngày");
			}
			break;
		case 4:
   		case 6:
    	case 9:
    	case 11: document.write(" Đây là tháng ",m," có 30 ngày");
    	break;
		default:
			document.write("Đây không phải là tháng trong năm");
			break;
	}

}
CheckMonthYear(11,2021)

// document.write("<br>");
// var n = 3;
// switch(n){
// 	case 1:
// 	case 2:
// 	case 3:
// 	case 4:
// 	case 5:
// 		document.write("Đây là tháng" + n);
// 		break;
// }
// document.write("<br>");
// for (var i = 1; i <= 12; i++) {
// 	document.write("Đây là tháng" +i+ "<br>");
// }
// var n = 1;
// while(n <= 12)
// 	document.write("Đây là tháng" + n + "<br>");



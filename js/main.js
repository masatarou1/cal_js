var myDate = new Date();
var myWeekTbl = new Array("日","月", "火", "水", "木", "金", "土");
var myMonthTbl = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

if(((myYear%4)==0 && (myYear%100)!=0 || (myYear%400)==0){
	myMonthTbl[1] = 29;
}

var myYear = myDate.getFullYear();
var myMonth = myDate.getMonth();
var myToday = myDate.getDate();
var myWeek = myDate.getDay();

myDate.setDate(1);
var myWeek = myDate.getDay();
var myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);
var myTable = new Array(7*myTblLine);
for (i=0; i<7*myTblLine; i++){
	myTable[i]="-";
}
for(i = 0; i<myMonthTbl[myMonth]; i++){
	myTable[myWeek+i] = i+1;
}



var obj, dbParam, xmlhttp, myObj, x, y, txt = "";
obj = { table: "pool_stats" };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
		txt += "<p>";
		txt += "<table border='1' >";
        txt += "<tr>";
		txt += "<th> Invalid Shares </th>";
		txt += "<th> Current Hashrate [MH/s] </th>";
		txt += "</tr>"
		for (y = 0; y < 1; y++) {
			txt += "<tr>";
			txt += "<td>" + myObj.getuserstatus.data.shares.invalid + "</td>";
			txt += "<td>" + myObj.getuserstatus.data.hashrate/1000 + "</td>";
			txt += "</tr>"
        }
		txt += "</table>"; 
		txt += "</p>";

		document.getElementById('pool_stats').innerHTML = txt;
	}
	
	
};
xmlhttp.open("GET", "https://rvn.suprnova.cc/index.php?page=api&action=getuserstatus&api_key=1550fc73baa4708db4756fe01f1ce2bee9cff49d07f7558ccfd490ccc2958f67&id=133846", true);
xmlhttp.send("y=" + dbParam);







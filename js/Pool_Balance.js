var obj, dbParam, xmlhttp, myObj, x, y, txt2 = "";
obj = { table: "balance" };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
		txt2 += "<p>";
		txt2 += "<table border='1' >";
        txt2 += "<tr>";
		txt2 += "<th> Confirmed </th>";
		txt2 += "<th> Unconfirmed </th>";
		txt2 += "</tr>"
		for (y = 0; y < 1; y++) {
			txt2 += "<tr>";
			txt2 += "<td>" + myObj.getuserbalance.data.confirmed + "</td>";
			txt2 += "<td>" + myObj.getuserbalance.data.unconfirmed + "</td>";
			txt2 += "</tr>"
        }
		txt2 += "</table>"; 
		txt2 += "</p>"; 
		
		document.getElementById('balance').innerHTML = txt2;
	
	}
};
xmlhttp.open("GET", "https://rvn.suprnova.cc/index.php?page=api&action=getuserbalance&api_key=1550fc73baa4708db4756fe01f1ce2bee9cff49d07f7558ccfd490ccc2958f67&id=133846", true);
xmlhttp.send("y=" + dbParam);
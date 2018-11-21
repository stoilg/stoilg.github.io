var obj, dbParam, xmlhttp, myObj, x, y, txt3 = "";
obj = { table: "miner_stats" };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        
		txt3 += "<p>";
		txt3 += "<table border='1' >";
        txt3 += "<tr>";
		txt3 += "<th> Algorithm </th>";
		txt3 += "<th> Difficulty </th>";
		txt3 += "<th> Hashrate/Hour [MH/s] </th>";
		txt3 += "<th> Hashrate/Day [MH/s] </th>";
		txt3 += "<th> Uptime [Hours] </th>"; 
		txt3 += "</tr>"
		for (y = 0; y < 1; y++) {
			txt3 += "<tr>";
			txt3 += "<td>" + myObj.algorithm + "</td>";
			txt3 += "<td>" + myObj.active_pool.difficulty + "</td>";
            txt3 += "<td>" + myObj.hashrate_hour/1000000 + "</td>";
			txt3 += "<td>" + myObj.hashrate_day/1000000 + "</td>";
			txt3 += "<td>" + myObj.uptime/3600 + "</td>";
			txt3 += "</tr>"
        }
		txt3 += "</table>"; 
		txt3 += "</p>"; 
		
		
		txt3 += "<p>";
		txt3 += "<table border='1' >";
        txt3 += "<tr>";
		txt3 += "<th> Vendor </th>";
		txt3 += "<th> Model </th>";
		txt3 += "<th> Temperature [C] </th>";
		txt3 += "<th> Fan Speed [%] </th>"; 
		txt3 += "<th> Power </th>";
		txt3 += "<th> Efficiency </th>";
		txt3 += "<th> Hashrate/Hour [MH/s] </th>";
		txt3 += "</tr>"
		
		for (x in myObj.gpus) {
			txt3 += "<tr>";
			txt3 += "<td>" + myObj.gpus[x].vendor + "</td>";
            txt3 += "<td>" + myObj.gpus[x].name + "</td>";
			txt3 += "<td>" + myObj.gpus[x].temperature + "</td>";
			txt3 += "<td>" + myObj.gpus[x].fan_speed + "</td>";
			txt3 += "<td>" + myObj.gpus[x].power + 'W' + "</td>";
			txt3 += "<td>" + myObj.gpus[x].efficiency + "</td>";
			txt3 += "<td>" + myObj.gpus[x].hashrate_hour/1000000 + "</td>";
			txt3 += "</tr>";
        }
        txt3 += "</table>";   
		txt3 += "<p>";
			
		document.getElementById("miner_stats").innerHTML = txt3;
	
	}
};
xmlhttp.open("GET", "http://213.191.183.209:6202/summary", true);
xmlhttp.send("x=" + dbParam);
xmlhttp.send("y=" + dbParam);


var interval = setInterval(function() {update_clocks()}, 100);
var launch_date = new Date('1970-01-01T00:00:00Z');

function update_clocks()
{
	var one_day = 1000 * 60 * 60 * 24;

	var time = new Date();
	time = time - launch_date;
	var tzero_flag = time / Math.abs(time)
	time = new Date(Math.abs(time));

	//Convert time sign to + or - character
	if(tzero_flag < 0)
	{
		tzero_flag = "-";
	}
	else
	{
		tzero_flag = "+";
	}

	// If UTC, then only show days of year
	label = document.getElementById("label1").innerHTML;
	if(label == "UTC")
	{
		var year = time;
		year = year.getUTCFullYear();
		year = year + "-01-01T00:00:00Z";
		year = new Date(year);
		var days = time - year;
		days = Math.floor( days / one_day ) + 1;
		tzero_flag = "";
	} else {
		var days = Math.floor( Math.abs(time / one_day) ) * (time / Math.abs(time));
	}

	var hours   = format_time_digits(time.getUTCHours());
	var minutes = format_time_digits(time.getUTCMinutes());
	var seconds = format_time_digits(time.getUTCSeconds());
	document.getElementById("clock1").innerHTML = tzero_flag + " " + days + ":" + hours + ":" + minutes + ":" + seconds;
}

function format_time_digits(value)
{
	if (value < 10)
	{
		value = "0" + value;
	}
	return value;
}

function show_menu()
{
	button = document.getElementById("settings_button");
	button.setAttribute("onclick", "hide_menu()");
	sidebar = document.getElementById("sidebar");
	sidebar.style.marginLeft="0px";
}

function hide_menu()
{
	button = document.getElementById("settings_button");
	button.setAttribute("onclick", "show_menu()");
	sidebar = document.getElementById("sidebar");
	sidebar.style.marginLeft="-300px";
}

function change_mission(name, date)
{
	label = document.getElementById("label1");

	now = new Date();
	launch_date = new Date(date);

	if (name == "UTC")
	{	
		label.innerHTML = "UTC";
	} else if (name == "E1P") {
		label.innerHTML = name + " Elapsed Swimming Time";
	} else {
		if (now > launch_date)
		{
			label.innerHTML = name + " Mission Elapsed Time";
		} else {
			label.innerHTML = name + " Launch";
		}
	}
}

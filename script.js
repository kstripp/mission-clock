var interval = setInterval(function() {update_clocks()}, 100);
var launch_date = new Date('1970-01-01T00:00:00Z');

function update_clocks()
{
	var time = new Date();
	time = time - launch_date;
	time = new Date(time);
	
	var days 	= Math.floor(time / (1000 * 60 * 60 * 24));
	var hours   = format_time_digits(time.getUTCHours());
	var minutes = format_time_digits(time.getUTCMinutes());
	var seconds = format_time_digits(time.getUTCSeconds());
	document.getElementById("clock1").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
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
	} else {
		if (now > launch_date)
		{
			label.innerHTML = name + " Mission Elapsed Time";
		} else {
			label.innerHTML = name + " Launch";
		}
	}
}

var interval = setInterval(function() {update_clocks()}, 100);

function update_clocks()
{
	var time = new Date()
	var hours   = format_time_digits(time.getUTCHours());
	var minutes = format_time_digits(time.getUTCMinutes());
	var seconds = format_time_digits(time.getUTCSeconds());
	document.getElementById("UTC").innerHTML = hours + ":" + minutes + ":" + seconds;
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
	sidebar.style.marginLeft="-250px";
}

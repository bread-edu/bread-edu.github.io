var allDirections = ["#u", "#l", "#r", "#d"];
var validDirections = validDirections();

function validDirections() {
	// IDs: index, title, topic, mid, end
	pageType = $("body").attr("id");
	if (pageType == "index") {
		return ["#r"];
	} else if (pageType == "title") {
		return ["#l", "#r"];
	} else if (pageType == "topic") {
		return ["#l", "#d"];
	} else if (pageType == "mid") {
		return ["#u", "#l", "#d"];
	} else { // if (pageType == "end")
		return ["#u", "#l"];
	}
	return allDirections;
}
function disableAllBut(arrow) {
	$.each(validDirections, function(index, id) {
		if (id != arrow) {
			$(id).addClass("disabled");
		}
	});
};
function enableAll() {
	$.each(validDirections, function(index, id) {
		$(id).removeClass("disabled");
	});
};

function anim($elem, properties) {
	$elem.animate(properties, { duration: 500, queue: false });
}
function show($elem) {
	anim($elem.slideDown(500), { opacity: 1 });
}
function hide($elem) {
	anim($elem.slideUp(500), { opacity: 0 });
}
function blue($elem) {
	$elem.css("color", "#0AF");
}
function eulb($elem) {
	$elem.css("color", "#DDD");
}

$(document).ready(function() {
	$.each(allDirections, function(index, id) {
		if (!validDirections.includes(id)) {
			$(id).addClass("disabled");
		}
	});
	
	$("#l").click(function() {
		if (!$("#l").hasClass("disabled")) {
			window.location.href = "../";
		}
	});
	
	$("#r").click(function() {
		$pages = $("#pages");
		$float = $("nav h4");
		if ($pages.css("display") == "none") {
			show($pages);
			blue($float);
			disableAllBut("#r");
		} else {
			hide($pages);
			eulb($float);
			enableAll();
		}
	});
});

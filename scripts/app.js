
var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
		RocknCoder.Pages[pageName][eventType].call(that);
	}
};

RocknCoder.Pages.Events = function () {
	$("div[data-rockncoder-jspage]").live(
		'pagebeforecreate pagecreate pagebeforeload pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide pageinit',
		RocknCoder.Pages.Kernel).live(
		"pageinit orientationchange", RocknCoder.hideAddressBar);
} ();

// page one monitors the input:radio, if one change, we grab its value and
// use it to update src of all of the squirrel image
RocknCoder.Pages.page1 = function () {
	var pageinit = function(){
	},
	pageshow = function () {
		$("input:radio").bind('change', function(event){
			var fileName = this.value;
			// this will update the src on ALL of the images
			$(".squirrel-image").attr("src",fileName);
		});
	},
	pagehide = function () {
		$("input:radio").unbind();
	};
	return {
		pageinit: pageinit,
		pageshow: pageshow,
		pagehide: pagehide
	}
}();

// page two does nothing and doesn't do anything, this function could be deleted
RocknCoder.Pages.page2 = function () {
	var pageinit = function(){
		},
		pageshow = function () {
		},
		pagehide = function () {
		};
	return {
		pageinit: pageinit,
		pageshow: pageshow,
		pagehide: pagehide
	}
}();


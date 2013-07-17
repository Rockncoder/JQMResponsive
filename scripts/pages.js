/**
 * User: Troy
 * Date: 7/16/13
 * Time: 8:10 PM
 */

var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

// page one monitors the input:radio, if one change, we grab its value and
// use it to update src of all of the squirrel image
RocknCoder.Pages.page1 = function () {
  return {
    pageinit: function(){
    },
    pageshow: function () {
      $("input:radio").on('change', function(event){
        var fileName = this.value;
        // this will update the src on ALL of the images
        $(".squirrel-image").attr("src",fileName);
      });
    },
    pagehide: function () {
      $("input:radio").off();
    }
  }
}();

// page two does nothing and doesn't do anything, this function could be deleted
RocknCoder.Pages.page2 = function () {
  return {
    pageinit: function () {
    },
    pageshow: function () {
    },
    pagehide: function () {
    }
  }
}();


/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 OA Wu Design
 */

$(function () {
  window.mainLoading = $('#loading');

  window.hideLoading = function (callback) {
    this.mainLoading.addClass ('hide').fadeOut (function () {
      $(this).hide (function () {
        if (callback)
          callback ();
      });
    });
  };

  window.closeLoading = function (callback) {
    window.hideLoading (function  () {
      if (callback)
        callback ();
        window.mainLoading.remove ();
    });
  };
});
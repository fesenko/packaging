angular.module('ui-templates', ['template/carousel/carousel.html']);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel banner\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <div class=\"arrow arrow-left\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"></div>\n" +
    "    <div class=\"arrow arrow-right\" ng-click=\"next()\" ng-show=\"slides.length > 1\"></div>\n" +
    "    <div class=\"markers\" ng-show=\"slides.length > 1\">\n" +
    "        <i class=\"marker\" ng-class=\"{selected: isActive(slide)}\"\n" +
    "           ng-repeat=\"slide in slides track by $index\" ng-click=\"select(slide)\"></i>\n" +
    "    </div>\n" +
    "</div>");
}]);

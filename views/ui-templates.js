angular.module('ui-templates', ['template/carousel/carousel.html', 'template/views/catalog.html', 'template/views/contacts.html', 'template/views/main.html', 'template/views/prices.html', 'template/views/section.html']);

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

angular.module("template/views/catalog.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/views/catalog.html",
    "<div class=\"content\">\n" +
    "    <h1>Каталог продукции</h1>\n" +
    "    <div class=\"catalog\">\n" +
    "        <div class=\"section\" ng-repeat=\"section in sections\">\n" +
    "            <a class=\"section__pic\" href=\"#\" ng-class=\"section.id\"></a>\n" +
    "            <a class=\"section__title\" ng-href=\"#/catalog/{{section.id}}\">{{section.title}}</a>\n" +
    "            <p>\n" +
    "                {{section.description}}\n" +
    "                <a ng-href=\"#/catalog/{{section.id}}\"><nobr>Подробнее »</nobr></a>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("template/views/contacts.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/views/contacts.html",
    "<div class=\"content\">\n" +
    "    <h1>Контактная информация</h1>\n" +
    "    <div class=\"container contact-data\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2\">\n" +
    "                <strong>Адрес</strong>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                115088, Россия, Москва, улица Угрешская, дом 26 (Продбаза «Покоторг»)\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2\">\n" +
    "                <strong>Телефоны</strong>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                +7 (495) 363-2919<br/>\n" +
    "                +7 (495) 679-9448<br/>\n" +
    "                +7 (916) 173-6863\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2\">\n" +
    "                <strong>Электронная почта</strong>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                <a href=\"mailto:multipack@yandex.ru\">info@mnogoplenki.ru</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-2\">\n" +
    "                <strong>Часы работы</strong>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-10\">\n" +
    "                Пн – Пт 10:00 – 18:00\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"print()\">Печать</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <map x=\"55.717862\" y=\"37.702749\" placemark=\"ООО «МультиПАК»\"></map>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/views/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/views/main.html",
    "<carousel interval=\"5000\">\n" +
    "    <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "        <img ng-src=\"{{slide.image}}\" style=\"margin: auto;\" height=\"300\"/>\n" +
    "    </slide>\n" +
    "</carousel>\n" +
    "\n" +
    "<div class=\"content main\">\n" +
    "    <p>\n" +
    "        Наша компания, ООО «МультиПАК», работает с 1996 г. и является поставщиком широкого спектра упаковочных материалов от ведущих европейских и российских производителей.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        Мы поставляем высококачественные, экологически чистые, безопасные для здоровья потребителя, привлекательные для покупателя и приемлемые для всех по цене упаковочные материалы всевозможных типов.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        Вся поставляемая нами продукция, будь то импортная или произведенная в России – снабжена соответствующими сертификатами и допущена к реализации на отечественном рынке.\n" +
    "    </p>\n" +
    "    <p>\n" +
    "        Мы продаем упаковочные материалы со склада в Москве и осуществляем их поставки в любую точку России.\n" +
    "    </p>\n" +
    "</div>");
}]);

angular.module("template/views/prices.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/views/prices.html",
    "<div class=\"content\">\n" +
    "    <p class=\"last\" style=\"display: none;\">\n" +
    "        <span class=\"glyphicon glyphicon-download\"></span> Скачайте <a href=\"/documents/multipack-price.doc\">Прайс-лист</a>\n" +
    "    </p>\n" +
    "    <div class=\"price-category\" ng-repeat=\"category in categories\">\n" +
    "        <h2 id=\"{{category.code}}\">{{category.name}}, производство – {{category.country}}</h2>\n" +
    "\n" +
    "        <table class=\"table table-striped prices\" ng-repeat=\"kind in category.kinds\">\n" +
    "            <thead>\n" +
    "                <tr ng-class=\"colors[category.type]\">\n" +
    "                    <th>Ширина,<br>мм</th>\n" +
    "                    <th>Толщина,<br>мкм</th>\n" +
    "                    <th ng-hide=\"{{category.type == 3}}\">Длина,<br>м</th>\n" +
    "                    <th>Цвет</th>\n" +
    "                    <th>Артикул<br>(этикетка)</th>\n" +
    "                    <th>Вес нетто<br>(без учета веса<br>шпули), кг</th>\n" +
    "                    <th>Цена за 1 рулон,<br>включая НДС, руб</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in kind.items\">\n" +
    "                    <td>{{item.width}}</td>\n" +
    "                    <td>{{item.thickness}}</td>\n" +
    "                    <td ng-hide=\"{{category.type == 3}}\">{{item.length}}</td>\n" +
    "                    <td>{{item.color}}</td>\n" +
    "                    <td>{{item.article}}</td>\n" +
    "                    <td>{{item.weight | number : 2}}</td>\n" +
    "                    <td>{{item.price | number : 2}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("template/views/section.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/views/section.html",
    "<div class=\"content\">\n" +
    "</div>");
}]);

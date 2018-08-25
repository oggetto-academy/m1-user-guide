(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{164:function(e,t,v){"use strict";v.r(t);var _=v(0),n=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"websites-stores-and-views"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#websites-stores-and-views","aria-hidden":"true"}},[e._v("#")]),e._v(" Websites Stores and Views")]),e._v(" "),v("p",[e._v("При установке Magento создаются основной веб-сайт ("),v("code",[e._v("main website")]),e._v("), магазин по умолчанию ("),v("code",[e._v("default store")]),e._v(") и представление\nмагазина ("),v("code",[e._v("store view")]),e._v("). Можно создать сколько угодно дополнительных веб-сайтов, магазинов и представлений.\nУ каждого сайта могут быть несколько магазинов, а у каждого магазина - несколько отдельных представлений. Представления\nмагазина обычно используются для отображения магазина на разных языках, хотя их можно использовать\nдля других целей. Клиенты используют выбор языка в заголовке, чтобы изменить вид магазина.")]),e._v(" "),v("p",[e._v("Каждый сайт имеет свой собственный домен.")]),e._v(" "),v("p",[e._v("Каждый магазин может иметь другое главное меню, выбор продуктов и внешний вид. Все магазины одного сайта управляются из\nодной админки.\nКаждый магазин может иметь отдельную корневую категорию, что позволяет иметь совершенно другой набор навигации для\nразных магазинов.")]),e._v(" "),v("p",[e._v("Создание и управление сайтами, магазинами и представлениями находится в "),v("code",[e._v("System > Manage Stores")]),e._v(".")]),e._v(" "),v("p",[e._v("При создании нового Website:")]),e._v(" "),v("ul",[v("li",[e._v("name - преднзначено для внутренней ссылки, может быть доменом.")]),e._v(" "),v("li",[e._v("code - используется на сервере чтобы указывать на домен.")])]),e._v(" "),v("p",[v("strong",[e._v("Для создания нового магазина ("),v("code",[e._v("store")]),e._v("):")])]),e._v(" "),v("ul",[v("li",[e._v("необходимо настроить корневую категорию, которая будет использоваться для этого магазина. Для этого в\nAdmin manu выбирите "),v("code",[e._v("System > Manage Stores")]),e._v(";")]),e._v(" "),v("li",[e._v("в разделе Manage Stores нажмите кнопку "),v("code",[e._v("Create Store")]),e._v(". Затем выполните следующие действия:\n"),v("ul",[v("li",[e._v("установите "),v("code",[e._v("Website")]),e._v(" на сайт, который является родителем этого магазина;")]),e._v(" "),v("li",[e._v("введите "),v("code",[e._v("Name")]),e._v(" для магазина. Имя предназначено для внутренней ссылки, чтобы отличить его от\nдругих магазинов в иерархии.")]),e._v(" "),v("li",[e._v("установите "),v("code",[e._v("Root Category")]),e._v(" в корневую категорию, которая будет использоваться для основной навигации по\nмагазину. Корневая категория может быть такой же, как и для других магазинов, или уникальной для этого магазина.")])])])]),e._v(" "),v("p",[v("strong",[e._v("Для создания нового представления магазина ("),v("code",[e._v("store view")]),e._v("):")])]),e._v(" "),v("ul",[v("li",[e._v("в Admin manu выбирите "),v("code",[e._v("System > Manage Stores")]),e._v(";")]),e._v(" "),v("li",[e._v("в разделе Manage Stores нажмите кнопку "),v("code",[e._v("Create Store View")]),e._v(". Затем выполните следующие действия:\n"),v("ul",[v("li",[e._v("установите "),v("code",[e._v("Store")]),e._v(" на магазин, который является родителем этого представления;")]),e._v(" "),v("li",[e._v("введите "),v("code",[e._v("Name")]),e._v(" для представления. Имя появится в «language chooser» в заголовке магазина. Например: французский;")]),e._v(" "),v("li",[e._v("введите "),v("code",[e._v("Code")]),e._v(" в нижнем регистре, чтобы определить представление. Например: privatesales.fr;")]),e._v(" "),v("li",[e._v("для активации представления, установите "),v("code",[e._v("Status")]),e._v(" на "),v("code",[e._v("Enabled")]),e._v(";")]),e._v(" "),v("li",[e._v("(необязательно) введите номер порядка сортировки "),v("code",[e._v("Sort Order")]),e._v(", чтобы определить последовательность, в которой это представление\nбудет перечислено среди других представлений.")])])])]),e._v(" "),v("h2",{attrs:{id:"configuration-scope"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#configuration-scope","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Scope")]),e._v(" "),v("p",[e._v("Если в вашей установке Magento есть несколько веб-сайтов, магазинов или представлений, вы можете установить область действия\nпараметра конфигурации для применения к определенной части вашей установки. Поле Current Configuration Scope в верхнем левом углу\nрабочей области определяет область текущих настроек. По умолчанию для области конфигурации задано значение «“Default Config”».\nДля пользователей-администраторов с ограниченным доступом список включает только те области, где пользователю предоставляется разрешение\nна доступ. Область конфигурации применяется к категориям продуктов, атрибутам, настройкам управления клиентами и т.д.")]),e._v(" "),v("p",[e._v("Если ваша установка включает в себя несколько веб-сайтов, магазинов или представлений, вы всегда должны устанавливать\nCurrent Configuration Scope для определения того, где вы хотите применить настройки. Возможные настройки: [STORE], [WEBSITE] и [GLOBAL].\nЛюбой элемент с границей [STORE] может быть установлен по-разному для каждого представления. Например, поскольку область имени и\nописания продукта - [STORE], поля могут иметь другое значение для каждого языка. Однако некоторые настройки конфигурации, такие как почтовый\nиндекс являются [GLOBAL], потому что одна и та же настройка применяется во всей системе. Область [WEBSITE] также применяется ко всему сайту,\nвключая все представления.")]),e._v(" "),v("p",[v("strong",[e._v("Scope Settings:")])]),e._v(" "),v("table",[v("tr",[v("th",[e._v("Store")]),e._v(" "),v("td",[e._v("Этот параметр ограничен видом магазина, который часто используется для отображение магазина на нескольких языках")])]),e._v(" "),v("tr",[v("th",[e._v("Website")]),e._v(" "),v("td",[e._v("Настройки ограничены веб-сайтом")])]),e._v(" "),v("tr",[v("th",[e._v("Global")]),e._v(" "),v("td",[e._v("Эта настройка применяется ко всей установке")])])]),e._v(" "),v("h2",{attrs:{id:"store-urls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#store-urls","aria-hidden":"true"}},[e._v("#")]),e._v(" Store URLs")]),e._v(" "),v("p",[e._v("Magento использует переменные для определения внутренних ссылок по отношению к базовому URL, что позволяет перемещать\nцелое хранилище с одного URL на другой без необходимости обновлять внутренние ссылки. По умолчанию целевая страница для\nбазового URL - это «cms».")]),e._v(" "),v("p",[v("strong",[e._v("Настроить base URL можно:")]),e._v(" "),v("code",[e._v("System > Configuration > GENERAL > Web")])]),e._v(" "),v("p",[v("strong",[e._v("Настроить Admin URL можно через панель администратора:")]),e._v(" "),v("code",[e._v("System > Configuration > ADVANCED > Admin")]),e._v(",\nили альтернативным методом, поменяв "),v("code",[e._v("# <frontName><![CDATA[admin]]></frontName>")]),e._v(" в "),v("code",[e._v("app/etc/local.xml")]),e._v(".")]),e._v(" "),v("h2",{attrs:{id:"secure-and-unsecure-urls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#secure-and-unsecure-urls","aria-hidden":"true"}},[e._v("#")]),e._v(" Secure and Unsecure URLs")]),e._v(" "),v("p",[e._v("Каждый сайт в установке Magento имеет базовый URL-адрес, назначенный для фронта и для админки. Можно настроить один или\nоба из них для работы по безопасно зашифрованному каналу SSL. Незащищенные базовые URL-адреса начинаются с «http», а\nзащищенные - с «https». Например:"),v("br"),e._v("\nUnsecure URL: "),v("code",[e._v("http://www.yourdomain.com/magento/")]),v("br"),e._v("\nSecure URL: "),v("code",[e._v("https://www.yourdomain.com/magento/")])]),e._v(" "),v("p",[e._v("Настройки лежат в "),v("code",[e._v("System > Configuration > Web (секции “Secure” и “Unsecure”)")]),e._v(".")]),e._v(" "),v("h2",{attrs:{id:"custom-admin-url"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#custom-admin-url","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Admin URL")]),e._v(" "),v("p",[e._v("В типичной установке Magento путь к админке - это один каталог под корнем (базовым URL-адресом Magento).\nНастройки находятся в "),v("code",[e._v("System > Configuration > Admin > Admin Base URL")]),e._v(". Можно задать кастомный URL и путь к админке.")])])}],!1,null,null,null);n.options.__file="web_stores_views.md";t.default=n.exports}}]);
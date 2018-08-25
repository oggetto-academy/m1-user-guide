(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{173:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"seo-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seo-best-practices","aria-hidden":"true"}},[e._v("#")]),e._v(" SEO Best Practices")]),e._v(" "),a("p",[e._v("Оптимизация в поисковых системах - это тонкая настройки содержимого сайта, чтобы улучшить способ\nиндексации страниц поисковыми системами. Magento Enterprise Edition предоставляет ряд инструментов, которые вы можете\nиспользовать, чтобы улучшить способ индексирования вашего сайта поисковыми системами.")]),e._v(" "),a("ul",[a("li",[e._v("Заполнение полей "),a("code",[e._v("Meta Information")]),e._v(" (мета-заголовка, мета-описания и ключевых слов) улучшит индексацию сайта поисковыми системами;")]),e._v(" "),a("li",[e._v("Карта сайта("),a("code",[e._v("Sitemap")]),e._v(") может улучшить индексацию некоторыми поисковыми системами. Карта сайта может быть отформатирована как вложенная\nдревовидная структура или как простой список;")]),e._v(" "),a("li",[e._v("Карта сайта Magento не включает страницы CMS, только категории, поэтому рекомендуется также создать карту сайта Google\n(генерируется автоматически если поле "),a("code",[e._v("System > Configuration > Catalog > Search Engine Optimizations > Autogenerated Site Map")]),e._v(" установлено в "),a("code",[e._v("Enable")]),e._v(",\nнастройки лежат в "),a("code",[e._v("System > Configuration > Google Sitemap")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"catalog-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#catalog-urls","aria-hidden":"true"}},[e._v("#")]),e._v(" Catalog URLs")]),e._v(" "),a("p",[e._v("URL-адреса, которые назначены для продуктов и категорий, играют важную роль в определении того, насколько хорошо сайт индексируется поисковыми системами.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Dynamic URL")])]),e._v(" создается «на лету» и может содержать строку запроса с переменными для идентификатора продукта, порядка сортировки и страницы, на которой был сделан запрос.\nПример: "),a("code",[e._v("http://mystore.com/catalogsearch/result/?q=tee+shirt")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Static URL")])]),e._v(" адрес является фиксированным адресом для определенной страницы. Он может отображаться в формате, включающем слова, которые люди могут использовать для\nпоиска продукта, или содержать id продуктов и категорий.\nПервый вариант адресов создается с помощью включения поля"),a("code",[e._v("System > Configuration > Web > Search Engine Optimizations > Use Web Server Rewrites")])]),e._v(" "),a("p",[e._v("Примеры:"),a("br"),e._v(" "),a("code",[e._v("http://mystore.com/accessories/eyewear.html http://mystore.com/catalog/product/view/id/409/s/chelsea-tee-409/category/16/")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("URL Key")])]),e._v(" является частью статического URL-адреса, описывающего продукт или категорию. При создании продукта или категории исходный URL-ключ автоматически\nсоздается на основе имени. Ключ URL должен состоять из символов нижнего регистра с дефисами для разделения слов. Хорошо продуманный URL-адрес с поисковой системой\nможет включать имя продукта и ключевые слова, чтобы улучшить способ индексирования поисковыми системами. Ключ URL-адреса можно настроить для создания автоматического\nперенаправления, если изменяется URL-адрес.")]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Store Code")])]),e._v(". Код магазина может быть включен в URL-адрес. Однако это может вызвать проблемы, если сторонние службы, такие как PayPal, настроены на работу с URL-адресом,\nкоторый не включает код. По умолчанию код магазина не включен в URL-адреса. Настроить можно в "),a("code",[e._v("System > Configuration > Web > URL Options")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("HTML Suffix")])]),e._v(" может быть включен в URL-адрес категории или продукта в зависимости от настроек. Никогда не нужно вводить суффикс непосредственно в URL-адрес категории\nили продукта (Это приведет к двойному суффиксу в конце URL-адреса если добавление .html-суффикса включено в настройках)."),a("br"),e._v("\nНастроить можно в "),a("code",[e._v("System > Configuration > Catalog > Search Engine Optimizations")]),e._v("."),a("br"),e._v("\nПримеры:"),a("br"),e._v(" "),a("code",[e._v("http://mystore.com/accessories/eyewear.html http://mystore.com/accessories/eyewear/retro-chic-eyeglasses")])]),e._v(" "),a("p",[a("strong",[a("code",[e._v("Category Path")])]),e._v(" может быть включен в URL-адрес товара (Настроить можно в "),a("code",[e._v("System > Configuration > Catalog > Search Engine Optimizations")]),e._v(")."),a("br"),e._v("\nПо умолчанию путь категории включен во все страницы категорий и продуктов. Чтобы поисковые системы не индексировали несколько URL-адресов,\nкоторые приводят к одному и тому же контенту, можно исключить путь категории из URL-адреса. Другой метод - использовать канонический мета-тег ("),a("code",[e._v("Canonical Meta Tag")]),e._v("),\nчтобы поисковые системы знали, какие URL индексировать, а какие игнорировать."),a("br"),e._v("\nПримеры:"),a("br"),e._v(" "),a("code",[e._v("http://mystore.com/accessories/eyewear/retro-chic-eyeglasses http://mystore.com/retro-chic-eyeglasses")])]),e._v(" "),a("h2",{attrs:{id:"dynamic-media-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-media-urls","aria-hidden":"true"}},[e._v("#")]),e._v(" Dynamic Media URLs")]),e._v(" "),a("p",[e._v("Динамический медиа-URL является относительной ссылкой на изображение или другой медиа-ресурс. Когда настройка включена, динамические мультимедийные URL-адреса могут использоваться\nдля прямого связывания с активами в хранилище мультимедиа или даже с CDN. Например, можно использовать "),a("code",[e._v("WYSIWYG Editor")]),e._v(" для вставки изображения в поле описания продукта.\nФормат динамического медиа-URL выглядит так:")]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v('{{media url="path/to/image.jpg"}}`\n')])])]),a("p",[e._v("Если динамические мультимедийные URL-адреса были включены в каталог, но позже этот параметр отключили, каждая ссылка в каталоге будет отображаться как неработающая.\nОднако ссылки могут быть восстановлены путем повторного включения динамических мультимедийных URL-адресов. Использование динамических мультимедийных URL-адресов может\nулучшить каталог, но также может повлиять на производительность поиска в каталоге.")]),e._v(" "),a("h2",{attrs:{id:"duplicate-url-key-priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-url-key-priority","aria-hidden":"true"}},[e._v("#")]),e._v(" Duplicate URL Key Priority")]),e._v(" "),a("p",[e._v("Ссылка  "),a("code",[e._v("http://www.example.com/shoes.html")]),e._v(" может вести как на категорию, так и на продукт, так и на настраиваемый URL-редирект ("),a("code",[e._v("Custom URL Redirect")]),e._v(").\nПоскольку все три объекта имеют одинаковый URL-адрес когда посетитель магазина запрашивает "),a("code",[e._v("http://www.example.com/shoes.html")]),e._v(" Magento перебирает приоритеты по порядку,\nпока не будет найдено совпадение. Ключи URL CMS-страниц имеют самый низкий приоритет.")]),e._v(" "),a("p",[e._v("Приоритеты настраиваются в "),a("code",[e._v("System > Configuration > Catalog > Search Engine Optimizations > Priority for Duplicated URL Keys")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"canonical-meta-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canonical-meta-tag","aria-hidden":"true"}},[e._v("#")]),e._v(" Canonical Meta Tag")]),e._v(" "),a("p",[e._v("Некоторые поисковые системы наказывают веб-сайты с несколькими URL-адресами, указывающими на один и тот же контент. Канонический метатег сообщает поисковым системам,\nчто страница уже индексируется, когда несколько URL-адресов имеют одинаковый или очень похожий контент. Использование канонического мета-тега может улучшить рейтинг сайта и\nсовокупные просмотры страниц. Канонический мета-тег помещается в блок "),a("code",[e._v("<head>")]),e._v(" страницы продукта или категории. Он предоставляет ссылку на предпочтительный URL-адрес, поэтому\nпоисковые системы дадут ему больший вес.")]),e._v(" "),a("p",[e._v("Канонический мета-тег настраивается в "),a("code",[e._v("System > Configuration > Catalog > Search Engine Optimizations")]),e._v(".")])])}],!1,null,null,null);i.options.__file="seo_optimization.md";t.default=i.exports}}]);
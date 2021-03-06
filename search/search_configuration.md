# Catalog Search Configuration
Доступные параметры поиска зависят от поисковой системы, используемой для установки Magento. 

__Поисковые системы__:
* MySQL
* Solr


## MySQL
По умолчанию Magento использует MySQL.  
__Чтобы настроить поиск в каталоге:__
* В Admin menu выберите `System > Configuration`;
* На панели `Configuration` слева под разделом `Catalog`, выберите `Catalog`;
* Кликните по раскрывающейся панели `Catalog Search`

поле Search type:  
`Like` - поиск по отдельным ключевым словам;  
`Fulltext` - поиск на основе полного текста каждого атрибута, оцененного по релевантности;  
`Combine (Like and Fulltext)` - поиск на основе комбинации двух типов, сопоставление ключевых слов и оцененка по релевантности

## Solr
Solr - автономный сервер поиска, который легко взаимодействует с приложением. Обладает высокой масштабируемостью, производительностью. 
Рекомендуется для сайтов с интенсивным трафиком. Все продукты индексируюся Solr, также индексируюся атрибуты (неоюходимо включить навигацию по каталогам), 
поэтому Solr может использоваться для `Layered navigation`.
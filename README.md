# Sortable Select2
A small plugin that will make the Select2 Jquery library sortable. Select2 is a jQuery-based replacement for select boxes. Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options. SortableSelect2 will make the multi-selection boxes sortable.

## Get started
#### 1) Add Jquery to the website
You can use the Jquery CDN :
`````Html
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
`````
#### 2) Add Select2 library to the website
You can use the Select2 CDN :
`````Html
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
`````
#### 3) Add SortableSelect2 plugin to the website
You can use the Select2 CDN :
`````Html
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
`````
#### 4) Initialize SortableSelect2
Finally, we need to initialize SortableSelect2 as shown below. You don't need to additionally initialize Select2. SortableSelect2 will take care of that.
`````Javascript
$("select[multiple]").sortableSelect2();
`````
# License
AsyncBee is licensed under the [GNU GENERAL PUBLIC LICENSE](https://github.com/Niyko/AsyncBee/blob/master/LICENSE).

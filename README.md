![SortableSelect2 logo](https://i.imgur.com/XhTkYMp.png)
A small plugin that will make the [Select2](https://github.com/select2/select2) Jquery library for multiple select sortable. Select2 is a jQuery-based replacement for select boxes. Select2 gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options. SortableSelect2 will make the multi-selection boxes sortable.

## Get started
#### 1) Add Jquery to the website
You can use the Jquery CDN :
`````Html
<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
`````
#### 2) Add Select2 library to the website
You can use the [Select2](https://github.com/select2/select2) CDN :
`````Html
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
`````
#### 3) Add SortableSelect2 plugin to the website
You can use the SortableSelect2 CDN :
`````Html
<link href="https://cdn.jsdelivr.net/gh/Niyko/SortableSelect2/src/sortable.select2.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/Niyko/SortableSelect2/src/sortable.select2.js"></script>
`````
#### 4) Initialize SortableSelect2
Finally, we need to initialize SortableSelect2 as shown below. You don't need to additionally initialize Select2. SortableSelect2 will take care of that.
`````Javascript
$("select[multiple]").sortableSelect2();
`````
## Example
`````Html
<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/gh/Niyko/SortableSelect2/src/sortable.select2.css" rel="stylesheet"/>
    </head>
    <body>
        <select class="food" name="food" multiple style="width: 400px">
            <option selected value="milk">Milk</option>
            <option selected value="apple">Apple</option>
            <option selected value="orange">Orange</option>
            <option value="biscuit">Biscuit</option>
        </select>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/Niyko/SortableSelect2/src/sortable.select2.js"></script>
        <script type="text/javascript">
            $(function (){
                $(".food").sortableSelect2();
            });
        </script>
    </body>
</html>
`````
View and edit this example on [Codepen](https://codepen.io/niyko/pen/oNqdVBa).
# License
SortableSelect2 is licensed under the [MIT LICENSE (MIT)](https://github.com/Niyko/SortableSelect2/blob/master/LICENSE).

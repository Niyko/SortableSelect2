$(function (){
    $.sortableSelect2 = [];

    $.fn.sortableSelect2 = function (){
        $(this).each(function() {
            $(this).addClass("sortable-select2__select");
            $(this).select2();
            $(this).change(function (){
                $.sortableSelect2.init();
            });
            $.sortableSelect2.init();
        });
    };

    $.sortableSelect2.init = function (){
        $(".sortable-select2__select").each(function (){
            let selectOptions = $(this).find("option");
            let select2Container = $(this).next(".select2-container");
            $(select2Container).addClass("sortable-select2__select2");
            $(select2Container).find("ul.select2-selection__rendered li.select2-selection__choice").each(function (index){
                let sortableSelect2OptionId = (Math.random()+1).toString(36).substring(7);
                $(selectOptions[index]).attr("sortable-select2-option-id", sortableSelect2OptionId);
                $(this).attr("sortable-select2-option-id", sortableSelect2OptionId);
            });
        });
        $.sortableSelect2.reset();
        $.sortableSelect2.addButtons();
    };

    $.sortableSelect2.reset = function (){
        $(".sortable-select2__sort-btn").each(function (){
            $(this).remove();
        });
    };

    $.sortableSelect2.addButtons = function (){
        $(".sortable-select2__select2 ul.select2-selection__rendered li.select2-selection__choice").each(function (){
            let btnTypes = ["prev", "next"];
            let select2Item = $(this);
            btnTypes.forEach(function (btnType){
                let sortBtn = document.createElement("button");
                sortBtn.classList.add("sortable-select2__sort-btn");
                sortBtn.innerHTML = `<span>`+(btnType=="prev"?`&#8249;`:`&#8250;`)+`</span>`;
                sortBtn.addEventListener("click", function (event){
                    event.stopPropagation();
                    $.sortableSelect2.sortSelection(sortBtn, btnType);
                });
                $(select2Item).append(sortBtn);
            });
        });
    };

    $.sortableSelect2.sortSelection = function (element, sortBtn){
        let select2Option = $(element).closest(".select2-selection__choice");
        let sortableSelect2OptionId = $(select2Option).attr("sortable-select2-option-id");
        let selectOption = $("option[sortable-select2-option-id="+sortableSelect2OptionId+"]");
        if(sortBtn=="prev") $(selectOption).insertBefore($(selectOption).prev());
        else $(selectOption).insertAfter($(selectOption).next());
        setTimeout(function (){
            $.sortableSelect2.init();
        }, 100);
    };
});
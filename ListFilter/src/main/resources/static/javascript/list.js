$(function() {
	getList();

	function getList() {
		$.ajax({
			type : "GET",
			url : "/getlist",
			contentType : "application/json; charset=utf-8",
			dataType: "json",
			timeout : 5000
		}).done(function (listResults) {
			processlistResults(listResults);
		}).fail(function(jqXHR) {
			jqXHR.requestName = "Get List Results";
			$('#errorMsg').html("An error occurred getting the list: (" + jqXHR.status + ") " + jqXHR.error);
		});
	}

	function processlistResults(listResults) {
		listResults.sort();
		listModel = listResults;

		var items = [];
		$.each(listResults, function(i, item) {
			items.push('<li class="list-group-item">' + item + '</li>');
		});
		
		$('#list').append( items.join('') );
		
		setFilter();
	}

	function setFilter() {
	    jQuery.fn.filterByText = function(textbox) {
	        return this.each(function() {
	            var list = this;
	            var listItems = [];

	            // add <li> items to list
	            $(list).find('li').each(function() {
	                listItems.push({text: $(this).text()});
	            });
	            
	            $(list).data('listItems', listItems);
	            $(textbox).bind('change keyup', function() {
	                var listItems = $(list).empty().data('listItems');
	                var search = $.trim($(this).val());	// get regex from textbox
	                var regex = new RegExp(search,"gi");
	              
	                // filter items
	                $.each(listItems, function(i) {
	                    var item = listItems[i];
	                    if (item.text.match(regex) !== null) {
	                        $(list).append(
	                           $('<li class="list-group-item">').text(item.text)
	                        );
	                    }
	                });
	            });            
	        });
	    };
	
		$('#list').filterByText($('#filter'));
	};
});

$(document).ready(init);

function init(){
	$('#addItem').on('click', addItem)
 

}

function addItem() {
	var name = $('#name').val();
	var price = $('#num').val();
	var $item = $('<span>');
	var $name = $('<span>').text(name + " ");
	var $price = $('<span>').text(price);
	$item.append($name).append($price);

	$('#main').append($item);
}

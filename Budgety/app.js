var budgetController = (function() {

console.log('bc');

})();




var UIController = (function() {

console.log('ui');

})();




var controller = (function(budgetCtrl, UICtrl) {

	var ctrlAddItem = function() {
		console.log('działa');
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event) {
		if(event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}
	});

})(budgetController, UIController);
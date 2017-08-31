var budgetController = (function() {

// var a = 1;
// return a;

})();




var UIController = (function() {

	// var b = 2;
	// return b;

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();




var controller = (function(budgetCtrl, UICtrl) {

	// console.log('odpalone');
	// console.log(budgetCtrl + ' ' + UICtrl);

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();

		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	

	var ctrlAddItem = function() {

		var input = UICtrl.getInput();
		console.log(input);
	};

	return {
		init: function () {
			console.log('app start');
			setupEventListeners();
		}
	};

})(budgetController, UIController);

controller.init();

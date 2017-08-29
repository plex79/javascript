(function() {

	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Question.prototype.displayQuestion = function() {
		console.log(this.question);

		for(var i=0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(odp){
		if(odp === this.correct) {
			console.log('Odpowiedź prawidłowa!')
		} else {
			console.log('Zła odpowiedź')
		}
	};

	var q1 = new Question('2+2=4 ?', ['tak', 'nie'], 0);
	var q2 = new Question('3+3=6 ?', ['nie', 'tak', 'może'], 1);
	var q3 = new Question('4+4=9 ?', ['tak', 'nie'], 1);
	var q4 = new Question('5+5=10 ?', ['tak', 'nie'], 0);

	var questions = [q1,q2,q3,q4];
	var n = Math.floor(Math.random() * questions.length);

	questions[n].displayQuestion();
	var zapytanie = parseInt(prompt('Odpowiedz na takie pytanie'));

	questions[n].checkAnswer(zapytanie);

}) ();



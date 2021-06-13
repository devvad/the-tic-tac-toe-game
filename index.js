// Получаю ячейки таблицы в переменную:
let cells = document.querySelectorAll('#field td');
start(cells);

// Для начала делаю так, чтобы по нажатию на любую ячейку таблицы в этой ячейке просто появлялся крестик.
// Для этого создаю функцию start, параметром принимающую массив ячеек таблицы.
// Также реализую чередования крестиков и ноликов. Для этого вводится счётчик ходов: крестик будет появляться на чётные значения счётчика, а нолик - на нечётные.
function start(cells) {
	let i = 0;

	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			this.innerHTML = ['X', 'O'][i % 2];
			this.removeEventListener('click', step);

			if (isVictory(cells)) {
				alert(this.innerHTML); // выводится имя победителя - X или 0
			} else if (i == 8) {
				alert('Ничья');
			}

			i++;
		});
	}
}

// Реализую функцию isVictory, которая параметром будет принимать массив ячеек и возвращать true, если на поле есть победа, и false, если нет.
function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != ''
		) {
			return true;
		}
	}

	return false;
}
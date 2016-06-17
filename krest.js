var table = document.getElementById ('krest');

var counter = 0;

table.addEventListener ('click', function (event){
	target = event.target;
	if (target.tagName != 'TD') return;
	if (target.textContent) return
	counter++;
	if (counter % 2 == 0) {target.innerHTML = ('O');}
	else {target.innerHTML = ('X');}
	if (counter > 4) {winner (table)}
})

function getColorForTable (table) {
	table.addEventListener ('mouseover', function (event) {
		target = event.target;
		if (target.tagName != 'TD') return;
		target.style.backgroundColor = 'yellow'
	})

	table.addEventListener ('mouseout', function (event) {
		target = event.target;
		if (target.tagName != 'TD') return;
		target.style.backgroundColor = ''
	})
}

getColorForTable (table);

function newGame (table) {
	var button = document.getElementById ('new game');
	button.onclick = function (event) {
		var td = table.getElementsByTagName ('td');
		for (var i = 0; i< td.length; i++) {
			td[i].innerHTML = '';
		}
		counter = 0;
	}
}
newGame (table);


// I do not really like the winning check
// it's true

function winner (table) {
	var tdCheck = table.getElementsByTagName ('td');
	var arr = [];
	var arrRes = [];
	for (var i = 0; i<tdCheck.length; i++) {
		arrRes.push (tdCheck[i].outerText);
		if (arrRes.length == 3) {
			arr.push (arrRes);
			arrRes = [];
		}
	}
    var mdigX = 0, mdigO = 0, supdigX = 0, supdigO = 0;
	for (var i = 0; i < arr.length; i++) {
        var horX = 0, verX = 0, horO= 0, verO = 0;

		for (var j = 0; j<arr[i].length; j++) {
			if (arr[i][j] == 'X') {
				horX ++
			}
			if (arr[j][i] == 'X') {
				verX ++
			}
			if (arr[i][j] == 'O') {
				horO ++
			}
			if (arr[j][i] == 'O') {
				verO ++
			}
            if (verX == 3) {
                alert ('win ver X');
            }
            if (horX == 3) {
                alert ('win hor X');
            }
            if (verO == 3) {
                alert ('win ver O');
            }
            if (horO == 3) {
                alert ('win hor O');
            }
		}
		if (arr [i][i] == 'O') {
			mdigO ++;
		}
		if (arr[i][i] == 'X') {
			mdigX ++;
		}
        if (mdigO == 3) {
            alert ('win dig O');
        }
        if (mdigX == 3) {
            alert ('win dig X')
        }
        if (arr[i][2-i] == 'O'){
            supdigO ++;
        }
        if (arr[i][2-i] == 'X') {
            supdigX ++;
        }
        if (supdigO == 3) {
            alert ('win supdig O')
        }
        if (supdigX == 3) {
            alert ('win supdig X')
        }
    }


}

	



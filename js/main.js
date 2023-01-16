// 'use strict'

function ShowAccordion() {
	let accordion = document.getElementById('accordion');
	accordion.addEventListener('click', change);
	function change(event) {
		let targ = event.target;
		if (targ.tagName !== 'H3') return;
		if (targ.classList.contains('select')) {
			hideAll();
		} else {
			hideAll();
			targ.classList.add('select');
			showText(targ.nextElementSibling);
		}
	}
	function hideAll() {
		let h3El = accordion.querySelectorAll('h3');
		let divEl = accordion.querySelectorAll('div');
		for (let i = 0; i < h3El.length; i++) {
			h3El[i].classList.remove('select');
		}
		for (let i = 0; i < divEl.length; i++) {
			divEl[i].style.height = '0';
		}
	}
	function showText(textEl) {
		textEl.style.height = textEl.scrollHeight + 'px';
	}
}
ShowAccordion();

function addActiveForBurger() {
	$(document).ready(function () {
		$('.burger').click(function (event) {
			$('.burger, .header-list-app').toggleClass('active');
			$('body').toggleClass('lock');
		})
	});
}
addActiveForBurger();

function workSwither() {
	$(document).ready(function () {
		$('.switcherCost__btn').click(function (event) {
			$('.switcherCost__btn').toggleClass('activeSwitch');
		})
	});


	let switcher = document.getElementById('switcher');
	console.log(switcher);


	switcher.addEventListener('click', change);
	function change(event) {
		let switcherButton = event.target;
		// let switcherBtnLeft = document.getElementsByClassName('.switcherCost__btn-left');
		// let switcherBtnRight = document.getElementsByClassName('.switcherCost__btn-right');
		let switcherButtons = document.querySelector('.switcherCost__btn');
		switcherButtons.classList.toggle('.activeSwitch');
		if (switcherButton.className == '.activeSwitch') {
		}
	}

}
// workSwither();

function show_list() {
	var courses = document.getElementById("dropdown-list");

	if (courses.style.display == "block") {
		courses.style.display = "none";
	} else {
		courses.style.display = "block";
	}
}

function show_spoilerLanguges() {
	var spoilerList = document.getElementById("spoilerLanguges-list");

	if (spoilerList.style.display == "block") {
		spoilerList.style.display = "none";
	} else {
		spoilerList.style.display = "block";
	}
}

window.onclick = function (event) {
	if (!event.target.matches('.dropdownBtn')) {
		document.getElementById('dropdown-list')
			.style.display = "none";
	}
	if (!event.target.matches('.SpoilerLanguges-btn')) {
		document.getElementById('spoilerLanguges-list')
			.style.display = "none";
	}
}





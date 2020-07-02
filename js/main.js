const toggleState = document.querySelector('.a-toggle');
const tileValue = document.querySelectorAll('.tile__value');
const toggleSelect = document.querySelectorAll('.copy--header');

toggleState.addEventListener('change', function () {

    for (let tileCount = 0; tileCount < tileValue.length; tileCount++) {
        tileValue[tileCount].classList.toggle('-disabled');
    }

    for (let i = 0; i < toggleSelect.length; i++) {
        toggleSelect[i].classList.toggle('-selected');
    }

});
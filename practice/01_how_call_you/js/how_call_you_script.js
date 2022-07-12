function check_how_call() {
    let from_age = Math.abs(document.getElementById('from_age').value);
    let to_age = Math.abs(document.getElementById('to_age').value);
    let radio = document.querySelectorAll('input[type="radio"]:checked');
    let from_gender = radio[0].value;
    let to_gender = radio[1].value;
    let result =  document.getElementById('result_text');

    if((from_age == '') || (to_age == '')) {
        result.innerText = 'input age!';
    } else {
        if(from_age == to_age) {
            result.innerText = 'chingu / from the Korean word 친구';
        } else if (from_age < to_age) {
            if(from_gender == to_gender) {
                result.innerText = from_gender == 'm' ? 'hyoeng / from the Korean word 형' : 'unni / from the Korean word 언니';
            } else {
                result.innerText = from_gender == 'm' ? 'noona / from the Korean word 누나' : 'oppa / from the Korean word 오빠';
            }
        } else {
            result.innerText = 'dongsaeng / from the Korean word 동생';
        }
    }    
}

check_button.addEventListener('click', check_how_call);
window.addEventListener('DOMContentLoaded', function() {

    let nums = document.getElementsByClassName('calc_button'),
        signs = document.getElementsByClassName('calc_button_gray'),
        disp = document.getElementsByClassName('calc_disp_top')[0],
        disp_answer = document.getElementsByClassName('calc_disp_bottom')[0],
        answer = 0,
        answer_for = ' ',
        fontSize = 0,
        font = document.getElementsByClassName('calc_disp_input')[1];

    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', function() {
            switch (nums[i].value) {
                case 'AC':
                    disp_answer.value = '';
                    disp.value = '';
                    answer_for = ' ';
                    break;
                case '--':
                    answer_for *= -1;
                    disp_answer.value = answer_for;
                    break;
                case '-':
                    disp_answer.value += '-';
                    answer_for += '-';
                    break;
                case '+':
                    disp_answer.value += '+';
                    answer_for += '+';
                    break;
                case '/':
                    disp_answer.value += '/';
                    answer_for += '/';
                    break;
                case '*':
                    disp_answer.value += '*';
                    answer_for += '*';
                    break;
                case '%':
                    disp_answer.value += '%';
                    answer_for += '%';
                    break;
                case '.':
                    disp_answer.value += '.';
                    answer_for += '.';
                    break;
                case '=':
                    answer = eval(answer_for);
                    disp_answer.value = answer;
                    disp.value = answer_for;
                    answer_for = '';

                    fontSize = Math.min(46, (25 / disp_answer.value.length) * 24);
                    console.log(disp_answer.value.length);
                    font.style.fontSize = fontSize + "px";
                    break;
                default:
                    disp_answer.value = '';
                    disp.value = '';
                    answer_for += Number(nums[i].value);
                    disp_answer.value += answer_for;

                    fontSize = Math.min(46, (25 / disp_answer.value.length) * 24);
                    console.log(disp_answer.value.length);
                    font.style.fontSize = fontSize + "px";
            }

        })
    }



})
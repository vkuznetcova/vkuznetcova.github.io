const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var data = {
  email: '',
  password: '',
  value: ''
};

//уменьшение-увеличение placeholder
document.querySelectorAll('.form__inp-wrp').forEach((item) => {
  item.addEventListener('focus', () => {
    item.children[2].classList.add('active');
  }, true);
  item.addEventListener('blur', () => {
    if (item.children[1].value === '')
      item.children[2].classList.remove('active');

    if (item.children[1].value !== '')
      item.children[1].classList.remove('err');
  }, true);
});

document.querySelector('.form__rules').addEventListener('focus', () => {
  document.querySelector('.form__rules-control').classList.remove('err');
}, true);

//section-err
document.querySelector('.form__btn').addEventListener('click', (event) => {
  event.preventDefault();
  let email = document.forms["form"]["form__inp1"],
    pswrd = document.forms["form"]["form__inp2"],
    rules = document.forms["form"]["form__rules"],
    value = document.forms["form"]["form-value"].value,
    err = document.querySelectorAll('.section-err'),
    bool = true;

  if (email.value === '' || !reg.test(String(email.value).toLowerCase())) {
    err[0].innerHTML = 'Некорректный e-mail';
    if (email.value === '')
      err[0].innerHTML = 'Обязательно поле';
    doWarning(email, err[0], err[0]);
    bool = false;
  } else {
    data.email = email.value;
  }

  if (pswrd.value != 'qwerty') {
    err[1].innerHTML = 'Неверный пароль';
    if (pswrd.value.length < 4)
      err[1].innerHTML = 'Минимальная длина 4 символа';
    if (pswrd.value === '')
      err[1].innerHTML = 'Обязательно поле';
    doWarning(pswrd, err[1], err[1]);
    bool = false;
  } else {
    data.password = pswrd.value;
  }

  if (!rules.checked) {
    err[2].innerHTML = 'Обязательно поле';
    doWarning(document.querySelector('.form__rules-control'), err[2], err[2]);
    bool = false;
  }

  data.value = value;

  if (bool) {
    doWarning(email, document.querySelector('.section-err-main'), document.querySelector('.section-err-main'));
    console.log(data); // сообщение для отправки
    // alert('send');
    // document.forms["form"].reset();
  }
})
function doWarning(x, y, z) {
  x.classList.add('err');
  y.classList.add('active');
  setTimeout(() => {
    z.classList.remove('active')
  },
    3000);
}
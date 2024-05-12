//각 input value
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const pwd = document.getElementById('pwd');
const rePwd = document.getElementById('rePwd');

//modal
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('button.closeBtn');

//유효성 검사 여부
let isName = false;
let isEmail = false;
let isAge = false;
let isPwd = false;
let isRePwd = false;

//에러 or 성공
const showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'showError';
  const small = formControl.querySelector('small');
  small.innerText = msg;
};

const showSuccess = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'showSuccess';
  const small = formControl.querySelector('small');
  small.innerText = msg;
};

//유효성 검사
const isRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() == '') {
      if (input == name) {
        showError(input, '이름을 입력해주세요!');
        isName = false;
      } else if (input.name == email) {
        showError(input, '이메일을 입력해주세요!');
        isEmail = false;
      } else if (input == age) {
        showError(input, '나이를 입력해주세요!');
        isAge = false;
      } else if (input.name == pwd) {
        showError(input, '비밀번호를 입력해주세요!');
        isPwd = false;
      }
    } else {
      if (input == name) {
        showSuccess(input, '멋진 이름이네요!');
        isName = true;
      } else if (input.name == email) {
        showSuccess(input, '올바른 이메일 형식입니다!');
        isEmail = true;
      } else if (input == age) {
        showSuccess(input, '올바른 나이 형식입니다!');
        isAge = true;
      } else if (input.name == pwd) {
        showSuccess(input, '올바른 비밀번호 형식입니다!');
        isPwd = true;
      }
    }
  });
};

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email, '올바른 이메일 형식입니다!');
    isEmail = true;
  } else {
    showError(email, '올바른 이메일 형식이 아닙니다!');
    isEmail = false;
  }
};

const isValidAge = age => {
  const re = /^[1-9]\d*$/;
  if (age.value >= 19 && re.test(age.value)) {
    showSuccess(age, '올바른 나이 형식입니다!');
    isAge = true;
  } else {
    if (age.value < 19) {
      showError(age, '19세 이상이어야 합니다!');
    } else showError(age, '올바른 나이 형식이 아닙니다!');
    isAge = false;
  }
};

const isValidPwd = pwd => {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
  if (re.test(pwd.value)) {
    showSuccess(pwd, '올바른 비밀번호입니다!');
    isPwd = true;
  } else {
    showError(pwd, '올바른 비밀번호가 아닙니다!');
    isPwd = false;
  }
};

const checkPwdMatch = (pwd, rePwd) => {
  if (pwd.value !== rePwd.value || pwd.value.trim() == '') {
    showError(rePwd, '비밀번호가 일치하지 않습니다.');
    isRePwd = false;
  } else {
    showSuccess(rePwd, '비밀번호가 일치합니다');
    isRePwd = true;
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();

  isRequired([name, email, age, pwd]);
  isValidEmail(email);
  isValidAge(age);
  isValidPwd(pwd);
  checkPwdMatch(pwd, rePwd);

  if (isName && isEmail && isAge && isPwd && isRePwd) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } else {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

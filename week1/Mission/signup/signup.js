const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const pw = document.getElementById('pw');
const pwConfirm = document.getElementById('pwConfirm');

//modal
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('button.closeBtn');

//유효성 검사 여부
let isName = false;
let isEmail = false;
let isAge = false;
let isPw = false;
let ispwConfirm = false;

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
      } else if (input.name == pw) {
        showError(input, '비밀번호를 입력해주세요!');
        isPw = false;
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
      } else if (input.name == pw) {
        showSuccess(input, '올바른 비밀번호 형식입니다!');
        isPw = true;
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
  } else if (isNaN(age.value)){
    showError(age, '나이는 숫자 형식이어야 합니다!');
    isAge = false;
    }else if (age.value < 0) {
        showError(age, '나이는 음수가 될 수 없습니다!');
        isAge = false;
      } else if (age.value % 1 != 0) {
        showError(age, '나이는 소수가 될 수 없습니다!');
        isAge = false;
      } else if (age.value > 0 && age.value < 19) {
        showError(age, '미성년자는 가입할 수 없습니다!');
        isAge = false;
      };
};

const isValidPw = pw => {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
  if (re.test(pw.value)) {
    showSuccess(pw, '올바른 비밀번호입니다!');
    isPw = true;
  } else if (pw.value.length < 4) {
    showError(pw, '비밀번호는 최소 4자리 이상이어야 합니다.');
    isPw = false;
    } else if (pw.value.length > 12) {
        showError(pw, '비밀번호는 최대 12자리까지 가능합니다.');
        isPw = false;
    } else {
        showError(pw, '비밀번호는 영어, 숫자, 특수문자를 모두 조합해서 작성해야 합니다.');
        isPw = false;
    }
};

const pwMatch = (pw, pwConfirm) => {
  if (pw.value !== pwConfirm.value || pw.value.trim() == '') {
    showError(pwConfirm, '비밀번호가 일치하지 않습니다.');
    ispwConfirm = false;
  } else {
    showSuccess(pwConfirm, '비밀번호가 일치합니다');
    ispwConfirm = true;
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();

  isRequired([name, email, age, pw]);
  isValidEmail(email);
  isValidAge(age);
  isValidPw(pw);
  pwMatch(pw, pwConfirm);

  if (isName && isEmail && isAge && isPw && ispwConfirm) {
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
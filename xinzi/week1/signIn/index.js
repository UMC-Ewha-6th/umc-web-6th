//modal
const modal = document.querySelector(".modalWrapper");
const closeBtn = document.querySelector(".closeBtn");

const showError = (inputId, errorMessage) => {
  const inputElement = document.getElementById(inputId);
  const errorElement = inputElement.nextElementSibling;
  errorElement.innerText = errorMessage;
  errorElement.classList.add("error");
  errorElement.classList.remove("success");
};

const showSuccess = (inputId, successMessage) => {
  const inputElement = document.getElementById(inputId);
  const errorElement = inputElement.nextElementSibling;
  errorElement.innerText = successMessage;
  errorElement.classList.remove("error");
  errorElement.classList.add("success");
};

const handleSubmit = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const pwd = document.getElementById("pwd").value;
  const confirmPwd = document.getElementById("confirmPwd").value;

  let isValid = true;

  //유효성 검사
  if (typeof name !== "string" || !name) {
    showError("name", "이름은 필수 입력 항목입니다!");
    isValid = false;
  } else {
    showSuccess("name", "멋진 이름이네요!");
  }

  if (typeof email !== "string" || !email.includes("@")) {
    showError("email", "올바른 이메일 형식이 아닙니다!");
    isValid = false;
  } else {
    showSuccess("email", "올바른 이메일 형식입니다!");
  }

  if (!age || isNaN(parseInt(age))) {
    showError("age", "나이는 숫자를 입력받아야 합니다.");
    isValid = false;
  } else if (parseInt(age) < 0) {
    showError("age", "나이는 음수가 될 수 없습니다.");
    isValid = false;
  } else if (age % 1 != 0) {
    showError("age", "나이는 소수가 될 수 없습니다!");
    isValid = false;
  } else if (parseInt(age) < 19) {
    showError("age", "우리 영화 사이트는 19세 이상만 가입 가능합니다.");
    isValid = false;
  } else {
    showSuccess("age", "올바른 나이 형식입니다!");
  }

  if (typeof pwd !== "string" || !pwd) {
    showError("pwd", "비밀번호를 입력하세요.");
    isValid = false;
  } else if (pwd.length < 4) {
    showError("pwd", "비밀번호는 4자리 이상이어야 합니다.");
    isValid = false;
  } else if (pwd.length > 12) {
    showError("pwd", "비밀번호는 12자리까지 가능합니다.");
    isValid = false;
  } else if (
    !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{4,12}$/.test(
      pwd
    )
  ) {
    showError("pwd", "비밀번호는 영어, 숫자, 특수문자를 조합하여야 합니다.");
    isValid = false;
  } else {
    showSuccess("pwd", "올바른 비밀번호입니다!");
  }

  if (!confirmPwd || pwd !== confirmPwd) {
    showError("confirmPwd", "비밀번호가 일치하지 않습니다.");
    isValid = false;
  } else {
    showSuccess("confirmPwd", "비밀번호가 일치합니다!");
  }

  if (isValid) {
    modal.style.display = "flex";
  }
};

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

import { isEmpty } from "lodash";

export const apiException = (res) => {
  const data = res.data;

  if (isEmpty(data)) {
    alert("다시 로그인 해주세요");
    localStorage.removeItem("token");
    window.location.replace("/login");
  }

  // switch (data.code) {
  //   case 4:
  //     localStorage.removeItem("token");
  //     break;
  //   case 8:
  //     alert(data.message);
  //     localStorage.removeItem("token");
  //     window.location.replace("/auth/login");
  //     break;
  //   default:
  //     break;
  // }

  return data;
};

export default {
  token: isLoggedIn() || null,
  progress: 0,
  headline: ''
}

function isLoggedIn() {
  let token = localStorage.getItem('jwt');
  if (token) {
    // window.atob() 来解码一个已经被base-64编码过的数据
    // window.btoa() 方法来编码一个可能在传输过程中出现问题的数据
    console.log(token);
    const payload = JSON.parse(window.atob(token.split('.')[1]));
    if (payload.exp > Date.now() / 1000) {
      return token;
    }
  } else {
    return false;
  }
}
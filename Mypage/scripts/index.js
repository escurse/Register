const $form = document.getElementById('form');
const $result = $form.querySelector(':scope > .result');

$form.onsubmit = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
            return;
        }
        const response = JSON.parse(xhr.responseText);
        if (response['result'] === 'signed') {
            $result.innerText = 'id님 반갑습니다.'
        } else {
            $result.innerText = '로그인 되어 있지 않습니다.'
        }
    }
    const url = new URL('http://192.168.4.252:24122/user/check');
    url.searchParams.set('token', localStorage.getItem('token'));
    url.searchParams.set('id', localStorage.getItem('id'));
    xhr.open('GET', url.toString());
    xhr.send();
}


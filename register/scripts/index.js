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
        if (response['result'] === 'success') {
            $result.innerText = '등록 성공'
        } else {
            $result.innerText = '등록 실패'
        }
    }
    const url = new URL('http://192.168.4.252:24122/user/register');
    const $id = $form['id'];
    const $pw = $form['pw'];
    url.searchParams.set('id', $id.value);
    url.searchParams.set('pw', $pw.value);
    xhr.open('POST', url.toString());
    xhr.send();
}


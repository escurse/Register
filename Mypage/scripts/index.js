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
        console.log(localStorage.getItem($id.value))
        if ($id.value === 'a1234') {
            $result.innerText = localStorage.getItem($id.value)
        } else {
            $result.innerText = '등록 실패'
        }
    }
    const url = new URL('http://192.168.4.252:24122/user/check');
    const $id = $form['id'];
    const $pw = $form['pw'];
    url.searchParams.set('id', $id.value);
    url.searchParams.set('pw', $pw.value);
    xhr.open('GET', url.toString());
    xhr.send();
}


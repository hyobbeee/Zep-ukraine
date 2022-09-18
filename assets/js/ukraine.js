// url 특정 값만 가져오기
const urlParams = new URL(location.href).searchParams;
// URL() 생성자 함수는 새로운 url 객체를 반환하고 
// searchParams을 통해 각각의 변수에 접근할 수 있도록 함
const name = urlParams.get('name');
const date = urlParams.get('date');
const no = urlParams.get('no');

window.onload = function () { // 화면이 로드될시에 쿼리 값을 갖고 와서 지정한 텍스트 부분을 변경
    document.querySelector(".name-value").textContent = name;
    document.querySelector(".date-value").textContent = date;
    document.querySelector(".no-value").textContent = no;
}

const submit = document.querySelector('.btnDownload');
const imgbox = document.querySelector('.imgbox');

submit.addEventListener('click', function () {
    // 서포트패스 발급 버튼을 누를 시에 동작
    // 1. 이름과 날짜와 번호가 들어간 파일을 화면에 렌더링
    // 2. html2canvas 라이브러리를 이용해 파일을 다운로드
    // 3. 다시 화면에서 안보이도록 하여 사용자 입장에서는 이미지만 다운로드 함
    document.querySelector('.imgbox').style.display = 'flex';
    html2canvas(imgbox)
        .then(canvas => { saveAs(canvas.toDataURL('image/png'), `${name}.png`); });
    // canvas 오브젝트를 받고 이미지 파일로 리턴한다.
    document.querySelector('.imgbox').style.display = 'none';
})

function saveAs(uri, filename) {
    var link = document.createElement('a'); // 값을 담을 빈그릇 만들기
    if (typeof link.download === 'string') {
        // typeof 연산자를 이용해 link.download(=이름.png)값이 string(문자)인지 확인
        link.href = uri;  // uri : 이미지데이터,
        link.download = filename;  //filename : 저장되는이름
        document.body.appendChild(link); // 문서에 link를 붙이고
        link.click(); //클릭하고
        document.body.removeChild(link); // 붙였던 link 삭제
    } else { window.open(uri); } // 이름이 문자가 아닐경우 경고창 생성
}
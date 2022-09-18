$(function () { // $(document).ready(function(){}) == document.onload()
    let _name = document.querySelector(".name");
    _name.innerText = getParam("name");

    const _mode = getParam("mode");
    if (_mode == "mobile") {
        downloadImage();
    }

    if (isMobile() && navigator.userAgent.match(/ZepApp|KAKAO|Instagram|NAVER/i)) {
        if (navigator.userAgent.match(/iPhone|iPad/i)) {
            $('#btnShare').show();
        } else {
            $('#btnLink').show();
        }
    } else {
        $('#btnDownload').show();
    }

    $('#btnDownload').on('click', function (event) {
        event.stopImmediatePropagation();
        downloadImage();
    });

    $('#btnShare').on('click', function (event) {
        event.stopImmediatePropagation();
        alert("크롬또는 사파리 브라우저에서 열어주세요.");
        urlShare(location.href + "&mode=mobile");
    });


    $('#btnRegist').on('click', function (event) {
        event.stopImmediatePropagation();
        //PC : 바로 다운로드
        //android : 링크로 대체
        //iphone : 이미지공유

        if (isMobile()) {
            if (navigator.userAgent.match(/iPhone|iPad/i) && navigator.userAgent.match(/ZepApp/i)) {
                createImage();
            } else {
                downloadImage();
                //alert("지원하지 않습니다. 다른 기기또는 PC를 이용해 주세요.");
            }
        } else {
            downloadImage();
        }


    });
});

$(document).ready(function () {
    $('#btnLink').attr('src', location.href + "&mode=mobile");
});

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function downloadImage() {
    html2canvas(document.querySelector(".imgbox"), {
        scale: 1,
        width: 400,
        height: 300
    }).then(canvas => {
        const _imageData = canvas.toDataURL('image/jpg');
        if (isMobile()) {
            $('.downloadbox .inbox').css('background-image', 'url(' + _imageData + ')');
        }

        saveAs(_imageData, 'fileDown.jpg');
    });
}

function saveAs(uri, fileName) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

function createImage() {
    const _imageUrl = window.location.protocol + "//" + window.location.host + "/dataFiles/zep/";

    html2canvas(document.querySelector(".imgbox"), {
        scale: 1,
        width: 400,
        height: 300
    }).then(canvas => {
        document.getElementById('imageCanvas').appendChild(canvas);
        let _image = document.querySelector('#imageCanvas canvas').toDataURL("image/png");
        _image = _image.replace("data:image/png;base64,", "");
        const _url = "/Zep/createFile";

        $.ajax({
            url: _url,
            type: 'POST',
            dataType: 'json',
            data: {
                image: _image
            },
            success: function (data) {
                if (isMobile() && navigator.userAgent.match(/iPhone|iPad/i)) {
                    urlShare(_imageUrl + data.RESULTMSG);
                } else {
                    alert("지원하지 않습니다. 다른기기 또는 PC를 이용해 주세요.");
                }
            },
            error: function () {
                alert("오류가 발생했습니다.");
            }
        });
    });
}

function urlShare(_shareUrl) {
    const _shareTitle = "[타이틀] 공유하기 기능 테스트 중입니다.";
    const _shareText = "[텍스트] 공유하기 기능 테스트 중입니다.";

    if (navigator.share) {
        navigator.share({
            title: _shareTitle,
            text: _shareText,
            url: _shareUrl
        }).catch((err) => {
            logElem.innerHTML = err;
        });
    } else {
        logElem.innerHTML = 'navigator.share not found';
    }
}

function getParam(key) {
    const _parammap = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
        const decode = function (s) {
            return decodeURIComponent(s.split("+").join(" "));
        }
        _parammap[decode(arguments[1])] = decode(arguments[2]);
    });
    return _parammap[key];
}
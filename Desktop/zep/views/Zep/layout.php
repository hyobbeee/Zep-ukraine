<!DOCTYPE html>
<html lang="ko">
<head>
    <meta name="google" content="notranslate">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <title>ZepTest</title>

    <link rel="stylesheet" href="/assets/css/zep.css?22090100934">
    <?php echo $this->managelayout->display_css(); ?>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <?php echo $this->managelayout->display_js_front(); ?>
</head>
<body>
<div class="wrap">
    <?php echo $yield; ?>
</div>

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.10/dist/clipboard.min.js"></script>
<script src="/assets/js/zepScript.js?22090101042"></script>
<?php echo $this->managelayout->display_js(); ?>
</body>
</html>
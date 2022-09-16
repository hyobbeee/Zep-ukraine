<!DOCTYPE html>
<html lang="ko">
<head>
    <meta name="google" content="notranslate">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <title>ZepTest</title>

    <link rel="stylesheet" href="/assets/css/ukraine.css">
    <?php echo $this->managelayout->display_css(); ?>

    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <?php echo $this->managelayout->display_js_front(); ?>
</head>
<body>

    <?php echo $yield; ?>

<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="/assets/js/ukraine.js"></script>
<?php echo $this->managelayout->display_js(); ?>
</body>
</html>
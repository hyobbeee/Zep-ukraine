<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Zep extends DEVWORKS_Controller {
    public function __construct(){
        parent::__construct();
    }

    public function index($mode="") {
        $request_uri = $_SERVER['REQUEST_URI'];
        $view['link'] = "https://".$_SERVER['HTTP_HOST'].$request_uri."&mode=mobile";

        $this->data = $view;
        $this->layout = "/Zep/layout";
		$this->view = "/Zep/main";
    }

    public function createFile() {
        $image = $this->input->post('image');
        $location = "dataFiles/zep/";

        $image_base64 = base64_decode($image);
        $filename = "zepimage_".uniqid().'.png';

        $file = $location . $filename;
        $imageData = file_put_contents($file, $image_base64);

        if ($imageData !== false) {
            $returnStr = '{"RESULTCD": "0", "RESULTMSG" : "'.$filename.'"}';
        } else {
            $returnStr = '{"RESULTCD": "9", "RESULTMSG" : "fail"}';
        }

        echo $returnStr;
    }

    public function ukraine() {
        $request_uri = $_SERVER['REQUEST_URI'];
        $view['link'] = "https://".$_SERVER['HTTP_HOST'].$request_uri."&mode=mobile";

        $skinNum = $this->input->get_post('sprite');
        $view['skin'] = "/assets/images/ukraine/sprite".$skinNum.".png";
        
        $this->data = $view;
        $this->layout = "/Zep/layout_ukraine";
		$this->view = "/Zep/ukraine";
    }
}
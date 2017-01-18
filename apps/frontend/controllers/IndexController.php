<?php

namespace Frontend\Controllers;

class IndexController extends ControllerBase
{
	public function base(){
		$this->tag->setTitle('主页');

		$this->prixPub = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].'/../';//声明静态资源public路径

		$this->assets//加载静态资源
			->addCss('css/base.css')
			->addJs('lib/jquery/jquery-2.1.4.min.js')
			->addCss('lib/bootstrap/bootstrap.min.css')
			->addJs('lib/bootstrap/bootstrap.min.js')
			->addJs('js/base.js');

		$this->view->imgs = (object)[ // 图片静态资源
			'back1' => 'img/1_0001.png'
		];
	}
    public function indexAction()
    {
    	$this->assets->addJs('js/index.js');
    	$this->view->fImgs = [
    		'img/1_01_1.png','img/1_01_2.png','img/1_01_3.png','img/1_01_4.png','img/1_01_text.png'
    	];
    }
}

<?php

namespace Frontend\Controllers;

class IndexController extends ControllerBase
{
	public function base(){
		$this->tag->setTitle('小妹的主页');
		$this->assets
			->addCss('css/base.css')
			->addJs('lib/jquery/jquery-2.1.4.min.js')
			->addCss('lib/bootstrap/bootstrap.min.css')
			->addJs('lib/bootstrap/bootstrap.min.js');
	}
    public function indexAction()
    {
    	
    }
}

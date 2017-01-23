<?php

namespace Frontend\Controllers;

use Phalcon\Mvc\Controller;

class ControllerBase extends Controller
{
	public function initialize(){
		$this->base();
	}
	/**
	 * 公共方法
	 * @return [type] [description]
	 */
	public function base(){}
}

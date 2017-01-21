<!DOCTYPE html>
<html>
    <head>
        <?= $this->tag->gettitle() ?>
        <link href="favicon.ico" type=image/x-icon rel="shortcut icon">
        <meta name="viewport" charset="utf8" content="width=device-width, initial-scale=1">
        <?= $this->assets->outputCss() ?>
    </head>
    <body>
    	<div id="all_main_full" class="all_main_full">
    		<div id="main_full" class="main_full">
	    		<?= $this->getContent() ?>
	    	</div>
    	</div>
        <script type="text/javascript">
			(function (doc, win) {
		        var docEl = doc.documentElement,
		        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		        recalc = function () {
		            var mfull = document.getElementById('main_full'),
		            	allfull = document.getElementById('all_main_full'),
		            	ratio = (allfull.offsetWidth/allfull.offsetHeight)>(1920/1080) ? 1 : 0;
		           	if (ratio){
		           		mfull.style.backgroundSize = allfull.offsetWidth+'px auto';
		           	}else{
		           		mfull.style.backgroundSize = 'auto '+allfull.offsetHeight+'px';
		           	}
		        };
		        if (!doc.addEventListener) {return};
		        win.addEventListener(resizeEvt, recalc, false);
		        doc.addEventListener('DOMContentLoaded', recalc, false);
		    })(document, window);
		</script>
		<?= $this->assets->outputJs() ?>
    </body>
</html>
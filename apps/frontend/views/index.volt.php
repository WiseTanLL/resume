<!DOCTYPE html>
<html>
    <head>
        <?= $this->tag->gettitle() ?>
        <link href="favicon.ico" type=image/x-icon rel="shortcut icon">
        <meta name="viewport" charset="utf8" content="width=device-width, initial-scale=1">
        <?= $this->assets->outputCss() ?>
    </head>
    <body>
        <?= $this->getContent() ?>
        <?= $this->assets->outputJs() ?>
    </body>
</html>
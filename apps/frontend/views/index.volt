<!DOCTYPE html>
<html>
    <head>
        {{ getTitle() }}
        <link href="favicon.ico" type=image/x-icon rel="shortcut icon">
        <meta name="viewport" charset="utf8" content="width=device-width, initial-scale=1">
        {{ assets.outputCss() }}
    </head>
    <body>
        {{ content() }}
        {{ assets.outputJs() }}
    </body>
</html>
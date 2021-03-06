<html ng-app="example366">
<head>
    <meta charset="utf-8" />
    <meta name="author" content="Script Tutorials" />
    <title>Photo Gallery with AngularJS and CSS3 | Script Tutorials</title>
    <meta name="description" content="Photo Gallery with AngularJS and CSS3 - demo page">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    <!-- add styles -->
    <link href="css/style.css" rel="stylesheet" type="text/css" />

    <!-- add javascripts -->
    <script src="js/jquery-2.0.3.min.js"></script>
    <script src="http://code.angularjs.org/1.2.0rc1/angular.js"></script>
    <script src="http://code.angularjs.org/1.2.0rc1/angular-animate.min.js"></script>
    <script src="http://code.angularjs.org/1.2.0rc1/angular-touch.min.js"></script>
    <script src="js/app.js"></script>
</head>
<body ng-controller="MainCtrl">
    <header>
        <a href="http://www.script-tutorials.com/demos/366/index.html" class="logo"><img src="images/logo.png" /></a>
    </header>

    <!-- slider container -->
    <div class="container slider">

        <!-- enumerate all photos -->
        <img ng-repeat="photo in photos" class="slide" ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-show="isActive($index)" ng-src="{{photo.src}}" />

        <!-- prev / next controls -->
        <a class="arrow prev" href="#" ng-click="showPrev()"></a>
        <a class="arrow next" href="#" ng-click="showNext()"></a>

        <!-- extra navigation controls -->
        <ul class="nav">
            <li ng-repeat="photo in photos" ng-class="{'active':isActive($index)}">
                <img src="{{photo.src}}" alt="{{photo.desc}}" title="{{photo.desc}}" ng-click="showPhoto($index);" />
            </li>
        </ul>

    </div>
<a href="servlet">Click here to see servlet</a>
    <footer>
        <h2>Photo Gallery with AngularJS and CSS3 (<a href="http://www.script-tutorials.com/photo-gallery-with-angularjs-and-css3/">Back to original tutorial</a>)</h2>
    </footer>
</body>
</html>
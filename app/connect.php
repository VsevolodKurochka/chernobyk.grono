<?php
	require_once 'vendor/autoload.php';
	require_once 'variables.php';

	$loader = new Twig_Loader_Filesystem('views');
	$twig = new Twig_Environment($loader);
	$twig->addGlobal('path', 'assets/build');
	$twig->addGlobal('social', $socials);
	$twig->addGlobal('platform_navigation', $platform_navigation);
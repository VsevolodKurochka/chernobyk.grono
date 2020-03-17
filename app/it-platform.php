<?php
  require_once 'connect.php';
  echo $twig->render('platform.twig', [
      "platform_navigation" => array(
          array(
              'href' => '/',
              'text' => 'Grono'
          ),
          array(
              'href' => '',
              'text' => 'IT-платформа'
          )
      )
  ]);
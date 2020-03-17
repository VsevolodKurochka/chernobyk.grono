<?php
  require_once 'connect.php';
  echo $twig->render('platform-coach.twig', [
      "platform_navigation" => array(
          array(
              'href' => '',
              'text' => 'IT-платформа'
          )
      )
  ]);
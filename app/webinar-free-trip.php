<?php
  require_once 'connect.php';
  echo $twig->render('webinar-free-trip.twig', [
      "navigation" => array(
          array(
              'href' => '',
              'text' => 'Программа'
          ),
          array(
              'href' => '',
              'text' => 'Кто ведет'
          ),
          array(
              'href' => '',
              'text' => 'Участвовать бесплатно'
          )
      )
  ]);
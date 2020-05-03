<?php
  require_once 'connect.php';
  echo $twig->render('webinar-free-trip.twig', [
      "navigation" => array(
          array(
              'href' => '#section-about',
              'text' => 'Программа'
          ),
          array(
              'href' => '#section-speaker',
              'text' => 'Кто ведет'
          ),
          array(
              'href' => '#section-registration',
              'text' => 'Участвовать бесплатно'
          )
      )
  ]);
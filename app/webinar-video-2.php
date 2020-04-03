<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Рынок круизных путешествий - самая<br>востребованная ниша для бизнеса!',
      'videoSubtitle' => 'Ежегодный рост на 22%',
      'videoURL' => 'https://player.vimeo.com/video/402182999'
  ]);
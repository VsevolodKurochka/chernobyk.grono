<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Личный кабинет',
      'videoSubtitle' => 'Как бронировать круизы',
      'videoURL' => 'https://player.vimeo.com/video/402573812'
  ]);
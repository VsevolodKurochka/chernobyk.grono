<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => '6 бонусов Круизного клуба',
      'videoSubtitle' => '',
      'videoURL' => 'https://player.vimeo.com/video/402181084'
  ]);
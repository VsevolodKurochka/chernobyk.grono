<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Круизный доллар',
      'videoSubtitle' => 'Размер скидок Круизного клуба',
      'videoURL' => 'https://player.vimeo.com/video/402187170'
  ]);
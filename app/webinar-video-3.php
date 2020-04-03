<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Круизный клуб',
      'videoSubtitle' => 'Условия круизных путешествий',
      'videoURL' => 'https://player.vimeo.com/video/402577442'
  ]);
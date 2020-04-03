<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Как путешествовать бесплатно',
      'videoSubtitle' => 'и зарабатывать на этом',
      'videoURL' => 'https://player.vimeo.com/video/402581170'
  ]);
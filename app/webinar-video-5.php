<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Юридические гарантии',
      'videoSubtitle' => 'Защита финансов и страхование',
      'videoURL' => 'https://player.vimeo.com/video/402568823'
  ]);
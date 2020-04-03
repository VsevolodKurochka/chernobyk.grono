<?php
  require_once 'connect.php';
  echo $twig->render('webinar-video.twig', [
      'videoTitle' => 'Что такое круизные путешествия на самом деле',
      'videoSubtitle' => 'Как отдохнуть дешевле чем в Турции',
      'videoURL' => 'https://player.vimeo.com/video/402184287'
  ]);
<?php

namespace App;

use Timber\Timber;
use Timber\Post;

$context = Timber::context();

$context['articulos'] = Timber::get_posts([
    'post_type' => 'articulo',
    'posts_per_page' => -1
]);

$context['about'] = Timber::get_post();


Timber::render('/views/pages/page-about.twig', $context);

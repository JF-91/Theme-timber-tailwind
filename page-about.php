<?php

namespace App;

use Timber\Timber;

$context = Timber::context();

Timber::render('/views/pages/page-about.twig', $context);

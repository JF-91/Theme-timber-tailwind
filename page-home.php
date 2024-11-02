<?php

namespace App;

use Timber\Timber;

$context = Timber::context();

Timber::render('/views/pages/page-home.twig', $context);
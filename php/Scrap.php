<?php
    header('Content-Type: text/csv');
    require __DIR__ . "/vendor/autoload.php";
    use Goutte\Client;

    $client = new Client();
    $crawler = $client->request('GET', 'https://www.lemonde.fr');
    $out = fopen('php://output', 'w');

    $crawler->filter('div.article > a')->each( function ($node) use ($out) {
    $url = $node->attr('href');
    $nom = trim($node->filter('.article__title')->text());
    fputcsv($out, [$nom,$url]);
        });
    fclose($out);
?>
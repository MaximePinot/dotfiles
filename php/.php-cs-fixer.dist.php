<?php

declare(strict_types=1);

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude('var');

return (new PhpCsFixer\Config())
    ->setRules([
        '@DoctrineAnnotation' => true,
        '@Symfony' => true,
        '@Symfony:risky' => true,
        'array_syntax' => [
            'syntax' => 'short',
        ],
        'combine_consecutive_issets' => true,
        'combine_consecutive_unsets' => true,
        'concat_space' => [
            'spacing' => 'one',
        ],
        'date_time_immutable' => true,
        'declare_strict_types' => true,
        'general_phpdoc_annotation_remove' => [
            'annotations' => [
                'package',
                'subpackage',
                'version',
            ],
        ],
        'multiline_comment_opening_closing' => true,
        'no_superfluous_elseif' => true,
        'no_useless_else' => true,
        'no_useless_return' => true,
        'not_operator_with_space' => false,
        'not_operator_with_successor_space' => false,
        'phpdoc_align' => [
            'align' => 'left',
        ],
        'return_assignment' => true,
        'simplified_if_return' => true,
        'simplified_null_return' => true,
        'strict_comparison' => true,
    ])
    ->setRiskyAllowed(true)
    ->setFinder($finder);

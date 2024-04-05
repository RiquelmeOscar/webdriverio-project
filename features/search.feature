@ebay
Feature: Buscar en eBay

  Scenario: Buscar Pilas en eBay

    Given I open eBay website
    When I search for <articulo>
    Then I should see search results and print results

    Examples:
    | articulo |
    | Pilas    |
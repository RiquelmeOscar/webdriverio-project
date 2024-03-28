@ebay
Feature: Buscar en eBay

  Scenario: Buscar pilas en eBay

    Given I open eBay website
    When I search for Pilas
    Then I should see search results and print results

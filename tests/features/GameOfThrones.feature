  @hbo @series @fantasy
  Feature: Game of Thrones
    As a Daenerys Targaryen
    I want to break the wheel
    So my subjects are not being crushed anymore
  
  @essos
  Scenario: I am the mother of the dragons
    Given I am the Khaleesi of the Great Grass Sea
    And I have 3 dragon eggs
    When I put eggs on funeral pyre
    And I set the fire
    And I wait some time
    Then I have 3 young dragons
  
  @vesteros
  Scenario Outline: I break the spokes one by one
    Given I am the queen of Vesteros
    When I hit the '<family name>' family
    Then The '<family name>' family breaks
  
    Examples:
      | family name |
      | Lannister   |
      | Baratheon   |
      | Stark       |
      | Tyrell      |
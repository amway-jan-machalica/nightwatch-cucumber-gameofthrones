  @hbo @series @fantasy
  Feature: Game of Thrones
    As a Daenerys Targaryen
    I want to break the wheel
    So my subjects are not being crushed anymore
  
  @essos
  Scenario: I am the mother of the dragons
    Given I am the Khaleesi of the Great Grass Sea
    And I have 3 dragon eggs
    When I put them on funeral pyre
    And I set the fire
    And I wait some time
    Then I have 3 young dragons
  
  @vesteros
  Scenario Outline: I break the spokes one by one
    Given I am the queen of Vesteros
    When I hit the <great family>s family
    Then it breaks
  
    Examples:
      | great family |
      | ‘Lannister’  |
      | ‘Baratheon’  |
      | ‘Stark’      |
      | ‘Tyrell’     |
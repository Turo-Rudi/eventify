Feature: Show/Hide an Event’s Details

  Scenario: An event element is collapsed by default
    Given the list of events has been loaded
    When user haven’t clicked on the “Show details” yet
    Then then event details are not shown

  Scenario: User can expand an event to see its details
    Given the list of events has been loaded
    When user clicks on “Show details” button for an event
    Then the event element will be expanded to show the event details

  Scenario: User can collapse an event to hide its details
    Given the list of events has been loaded and the user has already clicked on the “Show details” button
    When user clicks on “Hide details” button
    Then the event details should collapse
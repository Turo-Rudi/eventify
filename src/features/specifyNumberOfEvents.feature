Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the list of events has been loaded
    When user hasn’t set otherwise
    Then default number of events should be shown

  Scenario: User can change the number of events they want to see
    Given the list of events has been loaded
    When user set the number of events to be shown to their liking
    Then that number of events should be shown
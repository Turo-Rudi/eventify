<h1>Objective</h1>
<br>
<p>To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.</p>
<h1>Key Features</h1>
<br>
<ol>
  <li>Filter events by city.</li>
  <li>Show/hide event details.</li>
  <li>Specify number of events.</li>
  <li>Use the app when offline.</li>
  <li>Add an app shortcut to the home screen.</li>
  <li>View a chart showing the number of upcoming events by city.</li>
</ol>
<br>
<h1>User stories</h1>
<br>
<ul>
  <li>As a user I should be able to “filter events by city” so that I can see the list of events that take place in that city.</li>
  <li>As a user I should be able to click on “Hide/show more details” button so that I can see/unsee the event details.</li>
  <li>As a user I should be able to see a number of events of my choosing so that I can adjust the list-size to my liking.</li>
  <li>As a user I should be able to use the app also offline so that I don’t have to have an internet connection all the time.</li>
  <li>As a user I should be able to see a chart with the number of upcoming events in each city so that I can visualize it better.</li>
</ul>
<br>
<h1>Scenarios</h1>
<br>
<p>Scenario 2/1: An event element is collapsed by default
<strong>Given</strong> the list of events has been loaded
<strong>When</strong> user haven’t clicked on the “Show details” yet
<strong>Then</strong> then event details are not shown.

Scenario 2/2: User can expand an event to see its details
<strong>Given</strong> the list of events has been loaded
<strong>When</strong> user clicks on “Show details” button for an event
<strong>Then</strong> the event element will be expanded to show the event details

Scenario 2/3: User can collapse an event to hide its details
<strong>Given</strong> the list of events has been loaded and the user has already clicked on the “Show details” button
<strong>When</strong> user clicks on “Hide details” button
<strong>Then</strong> the event details should collapse 

Scenario 3/1: When user hasn’t specified a number, 32 is the default number
<strong>Given</strong> the list of events has been loaded
<strong>When</strong> user hasn’t set otherwise
<strong>Then</strong> 32 events should be shown

Scenario 3/2: User can change the number of events they want to see
<strong>Given</strong> the list of events has been loaded
<strong>When</strong> user set the number of events to be shown to their liking
<strong>Then</strong> that number of events should be shown

Scenario 4/1: Show cached data when there’s no internet connection
<strong>Given</strong> the user doesn’t have internet connection and they used the app before/data has been cached
<strong>When</strong> user wants to use the app
<strong>Then</strong> the previously cached data should be shown

Scenario 4/2: Show error when user changes the settings (city, time range)
<strong>Given</strong> the user doesn’t have internet connection and they used the app before/data has been cached
<strong>When</strong> user wants to change the settings related to uncached data
<strong>Then</strong> the app should show an error displaying that it’s unable to perform the change

Scenario 5/1: Show a chart with the number of upcoming events in each city
<strong>Given</strong> the list of events has been loaded
<strong>When</strong> user clicks on the name of the city
<strong>Then</strong> the app shows a chart with the number of upcoming events in that city</p>

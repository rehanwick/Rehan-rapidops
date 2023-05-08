Feature: Updating user name with the help of id 

  Scenario Outline: Try to upate user
    Given user details id: "<id>" , name : "<name>" to update name
    When try to update the name
    Then update the name 
    
    Examples:
        |   id   |   name      |                      
        |   1    |   Rehan     |


 Scenario Outline: Try to update user with invalid inputs
    Given user details id: "<id>"  and name : "<name>" to update name
    When try to update the name with invalid inputs
    Then it will throw an error: "<error>" with message: '<message>' while update user
    
    Examples:
        |   id   |   name      | error           |  message                     |
        |        |             | ValidationError |  "id" is required            |
        |   1    |             | ValidationError |  "name" is required          |
Feature: Finding user with the help of email 

  Scenario Outline: Try to Find the user
    Given user details gmail: "<email>" to find user 
    When try to find a new user
    Then it will return <result> 
    
    Examples:
        | email              |   result                                                                                |                        
        |rs0327884@gmail.com | "{\"id\": 12, \"name\": \"Rehan Shaikh\", \"email\": \"rs0327884@gmail.com\", \"password\": \"12345678\"}" |


  Scenario Outline: Try get a user with invalid inputs
    Given invalid user email : "<email>"  
    When try to find new user by invalid email 
    Then it will throw an error: "<error>" with message: '<message>' while finding user

    Examples:
      | email               | error             | message                                                   |
      |                     | ValidationError   | "email" is required                                       |
      | aman                | ValidationError   | "email" must be a valid email                             |

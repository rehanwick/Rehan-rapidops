Feature: Creating new folder

  Scenario Outline: Try to create a folder with invalid inputs
    Given user details name: "<name>" , email: "<id>" , to create a new folder
    When try to create a new folder
    Then it will throw an error: "<error>" with message: '<message>' while creating a new folder

    Examples:
      | name        | id | error             | message                   |                                            
      |             |    | ValidationError   | \"name\" is required      |                                    
      | folder45    |    | ValidationError   | \"id\" is required        |                                     
      

  Scenario Outline: Try to create a folder with valid inputs
    Given user details name: "<name>" , email: "<id>" , to create a new folder
    When try to create a new folder
    Then sucessfully created

    Examples:
      | name        | id | 
      | folder45    | 1  | 
    
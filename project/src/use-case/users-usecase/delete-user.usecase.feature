Feature: Delete user with the help of id  

  Scenario Outline: Try to delete usern with invalid user
    Given user details id: "<id>" to delete user with invalid id 
    When try to delete user 
    Then throw error : "<error>" and message : "<message>"  
    
    Examples:
        |   id   | error            |  message             |                  
        |        | ValidationError  | \"id\" is required |


 
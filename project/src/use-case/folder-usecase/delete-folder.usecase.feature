Feature: Deleteing folder

  Scenario Outline: Try to delete a folder with invalid inputs
    Given details id : "<id>" , of a folder
    When try to delete a folder
    Then it will throw an error: "<error>" with message: '<message>' while Deleteing a folder

    Examples:
      | id | error             | message                |                                                                           
      |    | ValidationError   | \"id\" is required     |
      |    | ValidationError   | \"id\" is required     |                                    
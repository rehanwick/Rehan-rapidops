Feature: Get folder by id

    Scenario Outline: Try to get folder with invalid inputs
        Given details id : "<id>" , of a folder to get folder
        When try to get a folder
        Then it will throw an error: "<error>" with message: '<message>' while geting a folder

        Examples:
            | id | error           | message            |
            |    | ValidationError | \"id\" is required |
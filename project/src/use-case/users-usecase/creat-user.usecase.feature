Feature: Creating new user

  Scenario Outline: Try to create a user with invalid inputs
    Given user details name: "<name>" , email: "<email>" , password:"<password>" to create a new user
    When try to create a new user
    Then it will throw an error: "<error>" with message: '<message>' while creating a user

    Examples:
      | name        | email               | password | findUserByEmailUsecase | creatUser | creatFolderUsecaseCount | error             | message                                                   |
      |             |                     |          | 0                      | 0         | 0                       | ValidationError   | "name" is required                                        |
      | Aman Gupta  |                     |          | 0                      | 0         | 0                       | ValidationError   | "email" is required                                       |
      | Aman Gupta  | aman                |          | 0                      | 0         | 0                       | ValidationError   | "email" must be a valid email                             |
      | Aman Gupta  | aman@rapidops.com   |          | 0                      | 0         | 0                       | ValidationError   | "password" is required                                    |
      | Aman Gupta  | aman@rapidops.com   | 1234     | 0                      | 0         | 0                       | ValidationError   | "password" length must be at least 8 characters long      |


  Scenario Outline: Try to create a user with invalid inputs
    Given user details name: "<name>" , email: "<email>" , password:"<password>" to create a new user
    When try to create a new user
    Then sucessfully created 

    Examples:
      | name         | email                      | password          | findUserByEmailUsecase | creatUser | creatFolderUsecaseCount | message                        |
      | Rehan Shaikh | rs0327884@gmail.com        | 123456789         | 0                      | 0         | 0                       | "name" is required             |
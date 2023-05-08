const express = require("express");
const router = express.Router();
const controller = require("./controller");

function init() { 
   initFolderRouter() ; 
   initUserRouter() ; 
   auth() ; 
}


function initUserRouter() { 
    router.get("/users", controller.showUsersController);
    router.post("/user" , controller.creatUserController) ; 
    router.delete("/user/:id" , controller.deleteUserController ) ; 
    router.put("/username/:id" , controller.updateUserNameController)
    router.get("/user/:email" , controller.getUserByEmailController) ; 
}

function initFolderRouter() {
    router.post('/folder' , controller.creatFolderController) ; 
    router.get('/folder/:id', controller.getFolderByIdController);
    router.delete('/folder/:id' , controller.deleteFolderById);
    router.put('/folder/:id' , controller.updateFolderNameController) ; 
}   

function auth() { 
    router.get("/auth/google/login" , controller.authAction.googleAuthLogin)
    router.get('/auth/google/callback' , controller.authAction.googleAuthCallback) ; 
}


init();




module.exports = router;

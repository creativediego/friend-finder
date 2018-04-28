// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let friendsData = require("../data/friends.js");
console.log(friendsData)


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    //////////////////////
    //API Get Requests
    /////////////////////

    //Display JSON data of friends when the user visits the specified URL
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    ///////////////////
    //API Post Requests
    ///////////////////

    app.post("/api/friends", function(req, res) {

        friendsData.push(req.body);
        res.json(friendsData);

    });


    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = []

        console.log("Array Cleared: " + friendsData);
    });


};
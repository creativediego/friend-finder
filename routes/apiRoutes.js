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


        currentUser = req.body
        friendsData.push(currentUser);

        //sort this array in descending order
        //map all users to this array with reduced score

        let userMatch;



        compareUsers();
        //loop through all scores and compare them with the current user array
        function compareUsers() {




            let usersWithReducedScores = []


            for (let i = 0; i < friendsData.length; i++) {



                //Map out a new user object whose score value is an array of difference between the two users
                let comparedScores = currentUser.scores.map(element => Math.abs(element - friendsData[i].scores[i]));
                let reducer = (accumulator, currentValue) => accumulator + currentValue;
                totalDifference = comparedScores.reduce(reducer);

                totalDifferenceUser = {

                    name: friendsData[i].name,
                    photo: friendsData[i].photo,
                    totalDifference: totalDifference

                }

                usersWithReducedScores.push(totalDifferenceUser);
            }


            let descendingTotalDifference = function(a, b) { return a.totalDifference - b.totalDifference }
            usersWithReducedScores.sort(descendingTotalDifference);

            userMatch = usersWithReducedScores[0]


        }


        console.log(friendsData);
        res.json(userMatch);


    });



    //Now resuce the array to a single number

    //push the object to the BIG array, and sort the BIG array by this value



    //REDUCE


    //SORT



    //Compare the current indexes score with the current user

    //reduce to a single value

    //push the single value to the all scores array





    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = []

        console.log("Array Cleared: " + friendsData);
    });


};
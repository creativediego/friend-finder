/////////////////////////////////
// DATA PERSISTENCE WITH AN ARRAY
/////////////////////////////////

let friendsData = [

    {
        "name": "Bob",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5

        ]
    }


];

//export array so that it can be used in other files using require.
module.exports = friendsData;
// QUESTION 2
var user_ids = [];      // an array for storing user ids
// generate user ids from 1,2,...100 and store in user_ids
for (let id = 1; id<= 100; id++) {
    user_ids.push(id)
}

// a function to segment user ids into odd and even ids
email_sender = () => {
    let odd_user_ids = [];
    let even_user_ids = [];

    // loop through user_ids array
    for (id of user_ids){
        // generate even ids
        if (id % 2 === 0){
            even_user_ids.push(id)
        }
        // generate odd ids
        else if (id % 2 !== 0){
            odd_user_ids.push(id)
        }
    }
    
    console.log("Odd User Ids = " + odd_user_ids)
    console.log("Even User Ids = " + even_user_ids)
}

email_sender()

            // object person
            let person = {
                talk: true,
                Canfly() {
                    return "Sorry, Can't fly";
                },
            };
            // Object user
            let user = {
                CanCode: true,
                CanCook() {
                    return "Can't say";
                },
                
              //  Inheriting the properties and methods of person
                __proto__: person, 
            };
  
            console.log("Can a  User talk: " + user.talk); 
            
            console.log("Can a  User fly: " + user.Canfly()); 
            
            console.log("Can a  User code: " + user.CanCode); 
            
            console.log("Can a GFG User cook: " + user.CanCook()); 
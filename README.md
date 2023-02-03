# Linns server
---

This is a RESTful API
 **CRUD** server that can be tested with services such as [Insomnia](https://insomnia.rest/)

 ### Designed purpose  
---
My server was designed to save users in DATABASE. Users can be 

C - created
R - viewed
U - updated
D - deleted



Manipulate these (with the help of [uuid](https://www.npmjs.com/package/uuid)) in ways that a CRUD server is supposed to.


### How to get started:
---
- Clone repo.
- Type: ``` npm start ```
- The server should now start and print a message that it's listening on port 4000.
- Open Insomnia and use the links and methods posted below to test the CRUD functionality.  

```json  

{  
    "firstName": "Mr Poopy",
    "lastName": "Butthole",
    "age": 35
}  

```

```  
[GET]       http://localhost:4000/users        // Get the entire list of users
[GET]       http://localhost:4000/users/id      // Get a specific user based off of the unique ID.
[POST]      http://localhost:4000/users        // Add a user to the database (array) using the code snippet above.
[DELETE]    http://localhost:4000/users/id      // Delete a user based off of the ID.
[PATCH]     http://localhost:4000/users/id      // Update a user based off of the ID. Use part of the code snippet
                                                   For example:
                                                   {
                                                        "firstName": "Megatron"
                                                   }
```


Thank you for viewing my project
Hope you don't get disappointed like my mom

Kind regards
Linn
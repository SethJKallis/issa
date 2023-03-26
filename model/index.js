// Database configuration
const db = require('../config/index');

// bcrypt module
const {hash, compare, hashSync } = require('bcrypt');

// Middleware for creating a token
const {createToken} = require('../middleware/AuthenticatedUser');

// User
class User {
    login(req, res) {
        const {email, userPass} = req.body;
        const Qry =
        `
        SELECT userID, 
        firstName, 
        lastName, 
        email, 
        userPass, 
        userRole 
        FROM users 
        WHERE email = ?`;
        db.query(Qry, [email], async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err:
                    "You provide a wrong email address"});
            } else {
                await compare(userPass,
                    data[0].userPass,
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;
                        // Create a token
                        const jwToken =
                        createToken(
                            {
                                email, userPass
                            }
                        );
                        // Saving
                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You entered an invalid password or did not register. '
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res) {
        const Qry =
        `
        SELECT userID, firstName, lastName, email, userRole, userPass
        FROM users;
        `;

        // Results db
        db.query(Qry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json(
                {results: data} );
        })
    }
    fetchUser(req, res) {
        const Qry =
        `
        SELECT userID, firstName, lastName, email, userRole, userPass
        FROM users
        WHERE userID = ?;
        `;

        // Results db
        db.query(Qry,[req.params.id],
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json(
                {results: data} );
        })
    }
    async createUser(req, res) {
        // Payload
        let detail = req.body;
        // Hashing user password
        detail.userPass = await
        hash(detail.userPass, 10);
        // This information will be used for authentication.
        let user = {
            emailAdd: detail.emailAdd,
            userPass: detail.userPass
        }
        // How to insert a sql query
        const Qry =
        `INSERT INTO users
        SET ?;`;
        db.query(Qry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err}), console.log(err);
            }else {
                // How to create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "A user record was saved."})
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null ||
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const Qry =
        `
        UPDATE users
        SET ?
        WHERE userID = ?;
        `;
        // Update db
        db.query(Qry,[data, req.params.id],
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg:
                "A row was affected"} );
        })
    }
    deleteUser(req, res) {
        const Qry =
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        //Remove Database (db)
        db.query(Qry,[req.params.id],
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg:
                "A record was removed from a database"} );
        })
    }
}
// Product
class Product {
    fetchProducts(req, res) {
        const Qry = `SELECT * FROM AirBnB`
        db.query(Qry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const Qry = `SELECT * FROM AirBnB
        WHERE airbnbID = ?`;
        db.query(Qry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        let data = req.body;
        const Qry =
        `INSERT INTO AirBnB SET ?;`;
        db.query(Qry,[data],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record."});
                }else {
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );
    }
    updateProduct(req, res) {
        const Qry =
        `
        UPDATE AirBnB
        SET ?
        WHERE airbnbID = ?
        `;
        db.query(Qry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record."});
                }else {
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );
    }
    deleteProduct(req, res) {
        const Qry =
        `
        DELETE FROM AirBnB
        WHERE airbnbID = ?;
        `;
        db.query(Qry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found."});
            res.status(200).json({msg: "A product was deleted."});
        })
    }

}
// Export User class
module.exports = {
    User,
    Product
}
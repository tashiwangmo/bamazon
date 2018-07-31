var mysql = require("mysql");
var inquirer = require("inquirer")
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "bamazonDB"
})
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    console.log("\n WELCOME TO MY  =^._.^= STORE!! SHOP AWAY ᕕ( ᐛ )ᕗ \n");
    start();
});
// displaying the table of inventory
function start() {
    connection.query("SELECT * FROM products", 
        function (err, res) {
            console.log("\n---------------------------------------------------------------------\n");
            console.table(res);
            console.log("\n---------------------------------------------------------------------\n");
            purchase();
        });
};
// inquiry to check what items and number of units are wanted to make purchase
function purchase() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Please enter the ID of the product you would like to buy:"
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the number of units you would like to buy today:"
        }
    ]).then(function (ans) {

        let id = ans.id;
        let quantity = ans.quantity;

        connection.query("SELECT * FROM products WHERE item_id = ?", [id], function (err, res) {
            if (err) throw err;
            if (quantity > res[0].stock_quantity) {
                console.log("INSUFFICIENT QUANTITY");
                shopping();
            } else {
                var stock = (res[0].stock_quantity - quantity);
                // updating the MYSQL database with the changes
                let price =res[0].price;
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [stock, id], function (err, res) {
                    if (err) throw err;
                    else {
                        console.log("\nCongratulations on your purchase!\nYour total today is $" + quantity * price + " (^._.^)ﾉ☆ \n");
                        shopping();
                    }
                });
            };
        });
    });
};

// option to either continue shopping or quit
function shopping() {
    inquirer.prompt([
        {
            name: "command",
            type: "list",
            message: "Continue shopping??",
            choices: ["YES", "NO"]
        }
    ]).then(function (ans) {
        
        if (ans.command === "YES") {
            start();
        } else {
            console.log("\nTHANK YOU FOR SHOPPING [^._.^]ﾉ彡\n")
            connection.end();
        }
    });
}
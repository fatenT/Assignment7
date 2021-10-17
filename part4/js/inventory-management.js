/*eslint-env browser*/

function display_menu() {
    "use strict";

    window.console.log("Welcome to The Product Inventory Management System");
    window.console.log("\n");
    window.console.log("Command Menu:");
    window.console.log("view - view all products");
    window.console.log("update - update an existing product");
    window.console.log("exit - exit the program");
    window.console.log("\n");
}

function view_products(inventory_arr) { 
    "use strict"

    for (var i = 0; i < inventory_arr.length; i++){
        window.console.log(inventory_arr[i][0] + " " + inventory_arr[i][1] + " (" + inventory_arr[i][2] + ") " + " $" + inventory_arr[i][3] );
    }

    window.console.log("");
}

function update_product(inventory_arr) {
    "use strict";

    var sku_no, qty_no;
    var found = 0;

    sku_no = window.prompt("Enter the product SKU NO:");

    if ( (!isNaN(sku_no)) && (sku_no !== "") ){
        qty_no = window.prompt("Enter the new stock quantity:");
            if ( (!isNaN(qty_no)) && (qty_no !== "") ){           
                
                inventory_arr.filter(function(item) { 
                    
                    if (item[0] == sku_no){           
                        item[2] = qty_no; 
                        found++; 
                    }

                });    
                
                if (found == 0) {
                    alert("Update not complete. Please check the SKU number you entered.");
                }
            }
            else {
                alert("Quantity number is required to complete the update. Please enter a valid quantity number.");
            }
    }
    else {
        alert("SKU number is required to complete the update. Please enter a valid SKU number.");
    }

    window.console.log("");
}

function main() {
    "use strict";
    var command;

    display_menu();

    var inventory = [[4824,"Shirt",10,15.99],[6343,"Jeans",22,39.99],[3223,"Socks",36,9.99],
    [2233,"Hat",12,14.99],[9382,"Jacket",5,49.99], [1213,"Mike",15,11.99],[9999,"Sara",5,89.01]];

    while (true){
        command = window.prompt("Enter command:");
        if (command !== null){
            if (command === "view"){  
                view_products(inventory);
            }
            else if (command === "update"){
                update_product(inventory);
            }
            else if (command === "exit"){
                break;
            }
            else {
                window.prompt("That is not a valid command");
            }
        }
    }
}

main();
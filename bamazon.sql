DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

Create Table products (
item_id INT NOT NULL PRIMARY KEY Auto_increment,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price FLoat (20) Null,
stock_quantity FLOAT(20) Null

);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("boots", "Shoes", 120, 30);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("blouse", "Clothes", 55, 20);
INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Yeezy Boost 350", "Shoes", 600, 5);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Chanel Boy bag", "Bags", 5600, 2);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Birkenstock", "Shoes", 120, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Blue Jeans", "Clothes", 100, 15);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("black Socks", "Miscellaneous", 10, 60);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Sunglasses", "Miscellaneous", 100, 10);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Shirts", "Clothes", 66,  25);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("LV tote", "Bags", 2700, 4);


Select * from  products;
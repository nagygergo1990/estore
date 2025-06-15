USE estore;

CREATE TABLE IF NOT EXISTS categories (
    id INT NOT NULL,
    category VARCHAR(45) DEFAULT NULL,
    parent_category_id INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 1 as id, 'Men' as category, NULL as parent_category_id) AS tmp
WHERE NOT EXISTS (
    SELECT id FROM categories WHERE id = 1
) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 2, 'Women', NULL) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 2) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 3, 'Kids', NULL) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 3) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 4, 'Casual Wear', 1) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 4) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 5, 'Party Wear', 2) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 5) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 6, 'Foot Wear', 2) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 6) LIMIT 1;

INSERT INTO categories (id, category, parent_category_id) 
SELECT * FROM (SELECT 7, 'Accessories', 3) AS tmp
WHERE NOT EXISTS (SELECT id FROM categories WHERE id = 7) LIMIT 1;

CREATE TABLE IF NOT EXISTS products(
    id INT NOT NULL,
    product_name VARCHAR(45) DEFAULT NULL,
    product_description VARCHAR(45) DEFAULT NULL,
    price DECIMAL(10,0) DEFAULT NULL,
    ratings INT DEFAULT NULL,
    category_id INT DEFAULT NULL,
    product_img VARCHAR(45),
    keywords VARCHAR(200) NULL,
    PRIMARY KEY(id),
    KEY FK_Products_Categories_id(category_id),
    CONSTRAINT FK_Products_Categories
    FOREIGN KEY (category_id) REFERENCES categories(id)
    ON UPDATE CASCADE ON DELETE CASCADE 
);

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 1 AS id, 'Jacket' AS product_name, 'Leather Jacket' AS product_description, 
           20000 AS price, 5 AS ratings, 5 AS category_id, 'shop-1.jpg' AS product_img, 
           'jacket,woolen,black' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 1) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 2 AS id, 'Purse' AS product_name, 'Nice Purse' AS product_description, 
           6000 AS price, 3 AS ratings, 7 AS category_id, 'shop-2.jpg' AS product_img, 
           'bag,purse,leather,black' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 2) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 3 AS id, 'Dress' AS product_name, 'Nice Party Dress' AS product_description, 
           8000 AS price, 4 AS ratings, 5 AS category_id, 'shop-3.jpg' AS product_img, 
           'dress,party,frock' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 3) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 4 AS id, 'Denim Jeans' AS product_name, 'Nice Denim Jeans' AS product_description, 
           12000 AS price, 4 AS ratings, 4 AS category_id, 'shop-4.jpg' AS product_img, 
           'denim,jeans,casual,pant' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 4) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 5 AS id, 'Laced Boots' AS product_name, 'Nice Laced Leather Boots' AS product_description, 
           24000 AS price, 4 AS ratings, 6 AS category_id, 'shop-5.jpg' AS product_img, 
           'boots,laced,yellow' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 5) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 6 AS id, 'Backpack' AS product_name, 'Nice Backpack' AS product_description, 
           31500 AS price, 5 AS ratings, 7 AS category_id, 'shop-6.jpg' AS product_img, 
           'leather,black,bag' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 6) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 7 AS id, 'Earrings' AS product_name, 'Nice Earrings' AS product_description, 
           5000 AS price, 4 AS ratings, 7 AS category_id, 'shop-7.jpg' AS product_img, 
           'ear,rings,blue,golden' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 7) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 8 AS id, 'Scarf' AS product_name, 'Nice Scarf' AS product_description, 
           3000 AS price, 4 AS ratings, 7 AS category_id, 'shop-8.jpg' AS product_img, 
           'scarf,chocolate,party' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 8) LIMIT 1;

INSERT INTO products (id, product_name, product_description, price, ratings, category_id, product_img, keywords)
SELECT * FROM (
    SELECT 9 AS id, 'Boots' AS product_name, 'Nice Leather Boots' AS product_description, 
           25000 AS price, 4 AS ratings, 6 AS category_id, 'shop-9.jpg' AS product_img, 
           'leather,black,boots' AS keywords
) AS tmp
WHERE NOT EXISTS (SELECT id FROM products WHERE id = 9) LIMIT 1;

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(45) NOT NULL UNIQUE,
    firstName VARCHAR(45) DEFAULT NULL,
    lastName VARCHAR(45) DEFAULT NULL,
    address VARCHAR(200) DEFAULT NULL,
    city VARCHAR(45) DEFAULT NULL,
    password VARCHAR(500) DEFAULT NULL,
    PRIMARY KEY (id)
);

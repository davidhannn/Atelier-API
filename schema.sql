CREATE TABLE products (
  id serial PRIMARY KEY,
  name VARCHAR(200),
  slogan VARCHAR(300),
  description VARCHAR(500),
  category VARCHAR(100),
  default_price INT
);

CREATE TABLE productStyles (
  id serial PRIMARY KEY,
  productId INT,
  FOREIGN KEY (productId) REFERENCES products(id),
  name VARCHAR(200),
  sale_price INT,
  original_price INT,
  default_style INT,
  CHECK (default_style <= 1)
);

CREATE TABLE cart (
  id serial PRIMARY KEY,
  user_session INT,
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  active INT,
  CHECK (active = 1)
);

CREATE TABLE features (
  id serial PRIMARY KEY,
  product_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  feature VARCHAR(200),
  value VARCHAR(200)
);

CREATE TABLE photos (
  id serial PRIMARY KEY,
  styleId INT,
  FOREIGN KEY (styleId) REFERENCES productStyles(id),
  url text,
  thumbnail_url text
);

CREATE TABLE skus (
  id serial PRIMARY KEY,
  styleId INT,
  FOREIGN KEY (styleId) REFERENCES productStyles(id),
  size VARCHAR(10),
  quantity INT
);

CREATE TABLE related (
  id serial PRIMARY KEY,
  current_product_id INT,
  related_product_id INT,
  FOREIGN KEY (current_product_id) REFERENCES products(id)
);

/* COPY from CSV and delimit
COPY characters
FROM 'C:\a\characters.csv'
DELIMITER ','
CSV HEADER;
*/

-- SELECT
--   id AS product_id,
--   name,
--   slogan,
--   description,
--   category,
--   default_price,
--   ARRAY_AGG (features.feature, features.value) features
-- FROM
--   products
-- LEFT JOIN features USING (product_id)

SELECT
  products.id,
  name,
  slogan,
  description,
  category,
  default_price,
  ARRAY_AGG (feature || '' || value) features
FROM
  products
LEFT JOIN
  features
ON
  products.id = features.product_id
GROUP BY
  products.id
ORDER BY
  products.id;
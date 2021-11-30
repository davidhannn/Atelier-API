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

/* For aggregating for product */
-- SELECT
--   products.id,
--   name,
--   slogan,
--   description,
--   category,
--   default_price,
--   json_agg(json_build_object('feature', feature, 'value', value)) features
-- FROM
--   products
-- INNER JOIN
--   features
-- ON
--   products.id = features.product_id
-- AND
--   products.id = 1
-- GROUP BY
--   products.id
-- ORDER BY
--   products.id;

-- /* For aggregating for product styles*/
-- SELECT
-- 	productId,
-- 	json_build_object('results',
-- 						json_agg(json_build_object(
-- 							'style_id', id,
-- 							'name', name,
-- 							'original_price', original_price,
-- 							'sale_price', sale_price,
-- 							'default?', default_style
-- 						))
-- 					 ) productstyles
-- FROM
-- 	productstyles
-- WHERE
-- 	productId = 1
-- GROUP BY
-- 	productId
-- ORDER BY
-- 	productId

--   /* aggregating product styles with photos */
--   SELECT
-- 	productId,
-- 	json_build_object('results',
-- 						json_agg(json_build_object(
-- 							'style_id', id,
-- 							'name', name,
-- 							'original_price', original_price,
-- 							'sale_price', sale_price,
-- 							'default?', default_style,
-- 							'photos', (
-- 								SELECT json_agg(
-- 									json_build_object(
-- 										'thumbnail_url', thumbnail_url,
-- 										'url', url
-- 									)
-- 								)
-- 								FROM photos
-- 								WHERE photos.styleId = productstyles.id
-- 								GROUP BY productstyles.id
-- 							)
-- 						))
-- 					 ) productstyles
-- FROM
-- 	productstyles
-- WHERE
-- 	productId = 1
-- GROUP BY
-- 	productId
-- ORDER BY
-- 	productId

--   /* aggregating product styles with photos and skus*/
--   SELECT
-- 	productId,
-- 	json_build_object('results',
-- 						json_agg(json_build_object(
-- 							'style_id', id,
-- 							'name', name,
-- 							'original_price', original_price,
-- 							'sale_price', sale_price,
-- 							'default?', default_style,
-- 							'photos', (
-- 								SELECT json_agg(
-- 									json_build_object(
-- 										'thumbnail_url', thumbnail_url,
-- 										'url', url
-- 									)
-- 								)
-- 								FROM photos
-- 								WHERE photos.styleId = productstyles.id
-- 								GROUP BY productstyles.id
-- 							),
-- 							'skus', (
-- 								SELECT json_object_agg(skus.id, json_build_object(
-- 									'quantity', quantity,
-- 									'size', size
-- 								)
-- 								)
-- 								FROM skus
-- 								WHERE skus.styleId = productstyles.id
-- 								GROUP BY productstyles.id
-- 						  )
-- 						 )
-- 					   )
-- 					 ) productstyles
-- FROM
-- 	productstyles
-- WHERE
-- 	productId = $1
-- GROUP BY
-- 	productId
-- ORDER BY
-- 	productId

--   /* sending styles in correct format*/
--    SELECT
-- 	json_build_object(
-- 		'productId', productId,
-- 		'results', json_agg(json_build_object(
-- 							'style_id', id,
-- 							'name', name,
-- 							'original_price', original_price,
-- 							'sale_price', sale_price,
-- 							'default?', default_style,
-- 							'photos', (
-- 								SELECT json_agg(
-- 									json_build_object(
-- 										'thumbnail_url', thumbnail_url,
-- 										'url', url
-- 									)
-- 								)
-- 								FROM photos
-- 								WHERE photos.styleId = productstyles.id
-- 								GROUP BY productstyles.id
-- 							),
-- 							'skus', (
-- 								SELECT json_object_agg(skus.id, json_build_object(
-- 									'quantity', quantity,
-- 									'size', size
-- 								)
-- 								)
-- 								FROM skus
-- 								WHERE skus.styleId = productstyles.id
-- 								GROUP BY productstyles.id
-- 						  )
-- 						 )
-- 	)
-- )
-- FROM
-- 	productstyles
-- WHERE
-- 	productId = $1
-- GROUP BY
-- 	productId
-- ORDER BY
-- 	productId

-- /* Query Photos */
-- SELECT * FROM photos WHERE photos.styleId = $1

-- ALTER TABLE productStyles
--   ALTER default_style DROP DEFAULT
--  ,ALTER default_style TYPE boolean USING (default_style::int::boolean)
--  ,ALTER default_style SET NOT NULL
--  ,ALTER default_style SET DEFAULT false;
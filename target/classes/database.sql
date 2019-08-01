
drop database spring_security_hibernate;

CREATE DATABASE spring_security_hibernate;

use spring_security_hibernate;


create table categories(
            category_id int auto_increment primary key ,
            category_name VARCHAR(255) not null
)DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

create table product (
            product_id int AUTO_INCREMENT,
            product_name VARCHAR(255) not null,
            price DECIMAL (10, 2) NOT NULL,
            category_id int not null,
            primary key (product_id),
            FOREIGN KEY (category_id)
                REFERENCES categories (category_id)
                ON DELETE CASCADE ON UPDATE CASCADE
)DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

CREATE TABLE orders (
    id int not null AUTO_INCREMENT,
                        order_date varchar(255) not null,
                        user_name varchar(255) NOT NULL,
                        last_price varchar(255) NOT NULL,
                        products varchar(255) NOT NULL,
                        primary key (id)
) DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;



/*Навпонюємо категорії товарів*/
INSERT INTO categories(category_id,category_name) VALUES(1,'Безалкогольні напої');
INSERT INTO categories(category_id,category_name) VALUES(2,'Алкогольні напої');
INSERT INTO categories(category_id,category_name) VALUES(3,'Перша страва');
INSERT INTO categories(category_id,category_name) VALUES(4,'Друга страва');
INSERT INTO categories(category_id,category_name) VALUES(5,'Десерт');
INSERT INTO categories(category_id,category_name) VALUES(6,'Гарнір');
INSERT INTO categories(category_id,category_name) VALUES(7,'Салат');
INSERT INTO categories(category_id,category_name) VALUES(8,'Додаток');

/*Наповнюємо Список товарів*/

INSERT INTO product(category_id,product_name,price) VALUES(6,'Пюрешка',20.0);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Рис',18.50);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Гречана крупа',22.0);
INSERT INTO product(category_id,product_name,price) VALUES(8,'Хліб',2.50);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Каша',17.0);
INSERT INTO product(category_id,product_name,price) VALUES(4,'Сосиска',5.0);
INSERT INTO product(category_id,product_name,price) VALUES(4,'Риба',32.0);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Макарошки',20.0);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Картопля',27.0);
INSERT INTO product(category_id,product_name,price) VALUES(4,'Котлета',15.0);
INSERT INTO product(category_id,product_name,price) VALUES(6,'Макарошки з котлеткою',25.0);
INSERT INTO product(category_id,product_name,price) VALUES(5,'Десерт 1',22.0);
INSERT INTO product(category_id,product_name,price) VALUES(5,'Десерт 2',32.0);
INSERT INTO product(category_id,product_name,price) VALUES(4,'Вареники',28.0);
INSERT INTO product(category_id,product_name,price) VALUES(7,'Салат',28.0);
INSERT INTO product(category_id,product_name,price) VALUES(7,'Салат2',40.0);
INSERT INTO product(category_id,product_name,price) VALUES(4,'Вареники зі сметаною',34.0);
INSERT INTO product(category_id,product_name,price) VALUES(8,'Соус 1',8.0);
INSERT INTO product(category_id,product_name,price) VALUES(8,'Соус 2',8.0);
INSERT INTO product(category_id,product_name,price) VALUES(1,'Компот',8.0);



create table if not exists hotel (id int auto_increment primary key,
nome varchar(255), rua varchar(255), numero varchar(255), cidade varchar(255), estado varchar(255), e5estrelas boolean not null);
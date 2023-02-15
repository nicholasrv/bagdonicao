CREATE DATABASE dhtube;

USE dhtube;

CREATE TABLE avatar (
	id_avatar INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    urlimagem VARCHAR(250)
);

CREATE TABLE pais (
	id_pais INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE usuario (
idUsuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR (45),
 email VARCHAR (45),
 senha VARCHAR (45),
 dataNacimento DATETIME,
 cep VARCHAR (45),
 Pais_idPais INT,
	CONSTRAINT FK_Pais_idPais
	FOREIGN KEY (Pais_idPais)
	REFERENCES pais (id_pais),
 Avatar_idAvatar INT,
	CONSTRAINT FK_Avatar_idAvatar
	FOREIGN KEY (Avatar_idAvatar)
	REFERENCES avatar (id_avatar)
);

CREATE TABLE video (
idvideo INT (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
usuario_idusuario INT (11),
	CONSTRAINT FK_usuario_idusuario
    FOREIGN KEY (usuario_idusuario)
    REFERENCES usuario (idUsuario),
titulo VARCHAR (100),
descricao TEXT,
tamanho DOUBLE,
nomearquivo VARCHAR (100),
duracao DOUBLE,
imagem VARCHAR (100),
qtdreproducoes INT(11),
qtdlikes INT(11),
qtddislikes INT(11),
privado SMALLINT(6),
datapublicacao DATETIME
);

CREATE TABLE playlist(
idplaylist INT (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
datacriacao DATETIME,
privado SMALLINT (6),
usuario_idusuario INT (11),
	CONSTRAINT FK_usuario_idusuarios
    FOREIGN KEY (usuario_idusuario)
    REFERENCES usuario (idUsuario)
);

CREATE TABLE playlist_video(
video_idvideo INT(11),
	CONSTRAINT FK_video_idvideo
    FOREIGN KEY (video_idvideo)
    REFERENCES video (idvideo),
playlist_idplaylist INT (11),
	CONSTRAINT FK_playlist_idplaylist
    FOREIGN KEY (playlist_idplaylist)
    REFERENCES playlist (idplaylist)
);

CREATE TABLE canal(
idcanal INT (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (45),
descricao TEXT,
datacriacao DATETIME,
usuario_idusuario INT (11),
	CONSTRAINT FK_usuario_idusuarioss
    FOREIGN KEY (usuario_idusuario)
    REFERENCES usuario (idUsuario)
);

INSERT INTO playlist (nome, datacriacao, privado)
	VALUES 	('clipes_de_musica', '20210828', '1'),
			('podcasts', '20210825', '0'),
            ('gameplays', '20210715', '0'),
            ('cursos', '20210623', '1');
            
SELECT nome, datacriacao, privado
FROM playlist;

UPDATE playlist 
SET nome = 'rap e hip hop', datacriacao = '20200911', privado = '0' 
WHERE idplaylist = 1;

DELETE FROM playlist WHERE id = 4;

INSERT INTO usuario (nome, email, senha, datanacimento)
	VALUES 	('Nicholas', 'nicholasrv@live.com', '123456', '19951126'),
			('Gabriela Nakasone', 'gabriela@gmail.com', '1234567', '19940824'),
            ('Guilherme Carvalho', 'guilhermecarvalho@gmail.com', '9861324', '19971007'),
            ('Glauber Santos', 'glaubersantos@gmail.com', '7251983', '19930519');
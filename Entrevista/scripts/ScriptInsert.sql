INSERT INTO evaluacion.candidato (nombre,apellido) VALUES
	 ('Zaray','Rey'),
	 ('Jeyson','Vega'),
	 ('Lizeth','Lopez'),
	 ('Erik','Bernal');
	
INSERT INTO evaluacion.estadoevaluacion (descripcion) VALUES
	 ('En curso'),
	 ('Finalizada');

INSERT INTO evaluacion.pregunta (pregunta,nivel) VALUES
	 ('Cuanto es 2 + 2','1'),
	 ('Cual es el numero primo mas pequeño','1'),
	 ('Raiz cuadrada de 64','3'),
	 ('Cuanto es 2 al cubo','3'),
	 ('Cual es el tercer item de la seria de fibonacci','4'),
	 ('Cuanto es 2/3 + 5/3','4'),
	 ('Cuanto es -2*7','2'),
	 ('Cual es el valor de pi','2'),
	 ('Cuanto es 5 factorial','5'),
	 ('Como se puede hallar el area bajo la curva de una funcion','5');

INSERT INTO evaluacion.respuesta (idpregunta,respuesta,escorrecta) VALUES
	 (1,'2',true),
	 (1,'3',false),
	 (2,'2',true),
	 (2,'5',false),
	 (3,'12',false),
	 (3,'8',true),
	 (4,'8',true),
	 (4,'6',false),
	 (5,'3',false),
	 (5,'2',true);
INSERT INTO evaluacion.respuesta (idpregunta,respuesta,escorrecta) VALUES
	 (6,'5/3',false),
	 (6,'7/3',true),
	 (7,'-14',true),
	 (7,'14',false),
	 (8,'3,1416',true),
	 (8,'4,1316',false),
	 (9,'64',false),
	 (9,'120',true),
	 (10,'Con la derivada de la funcion',false),
	 (10,'Con la integral de la funcion',true);



-- DROP SCHEMA evaluacion;

CREATE SCHEMA evaluacion AUTHORIZATION postgres;

-- evaluacion.estado_evaluacion definition

-- Drop table

-- DROP TABLE evaluacion.estado_evaluacion;

CREATE TABLE evaluacion.estado_evaluacion (
	id serial4 NOT NULL,
	descripcion varchar NULL,
	CONSTRAINT estadoevaluacion_pk PRIMARY KEY (id)
);


-- evaluacion.pregunta definition

-- Drop table

-- DROP TABLE evaluacion.pregunta;

CREATE TABLE evaluacion.pregunta (
	id serial4 NOT NULL,
	pregunta varchar NOT NULL,
	nivel varchar NOT NULL,
	CONSTRAINT pregunta_pk PRIMARY KEY (id)
);


-- evaluacion.evaluacion definition

-- Drop table

-- DROP TABLE evaluacion.evaluacion;

CREATE TABLE evaluacion.evaluacion (
	id serial4 NOT NULL,
	id_estado_evaluacion int4 NOT NULL,
	id_candidato int4 NOT NULL,
	calificacion numeric NULL,
	ultimo_nivel int4 NULL DEFAULT 0,
	fecha_inicio timestamp NULL,
	tiempo_limite int4 NULL,
	descripcion varchar NULL,
	CONSTRAINT evaluacion_pk PRIMARY KEY (id),
	CONSTRAINT estado_evaluacion_fk FOREIGN KEY (id_estado_evaluacion) REFERENCES evaluacion.estado_evaluacion(id)
);


-- evaluacion.respuesta definition

-- Drop table

-- DROP TABLE evaluacion.respuesta;

CREATE TABLE evaluacion.respuesta (
	id serial4 NOT NULL,
	id_pregunta int4 NOT NULL,
	respuesta varchar NOT NULL,
	escorrecta bool NOT NULL,
	CONSTRAINT respuest_pk PRIMARY KEY (id),
	CONSTRAINT respuesta_fk FOREIGN KEY (id_pregunta) REFERENCES evaluacion.pregunta(id)
);


-- evaluacion.pregunta_respondida definition

-- Drop table

-- DROP TABLE evaluacion.pregunta_respondida;

CREATE TABLE evaluacion.pregunta_respondida (
	id serial4 NOT NULL,
	id_pregunta int4 NOT NULL,
	id_evaluacion int4 NOT NULL,
	id_respuesta int4 NOT NULL,
	CONSTRAINT preguntarespondida_pk PRIMARY KEY (id),
	CONSTRAINT preguntarespondida_fk FOREIGN KEY (id_pregunta) REFERENCES evaluacion.pregunta(id),
	CONSTRAINT preguntarespondida_fk_1 FOREIGN KEY (id_evaluacion) REFERENCES evaluacion.evaluacion(id),
	CONSTRAINT preguntarespondida_fk_2 FOREIGN KEY (id_respuesta) REFERENCES evaluacion.respuesta(id)
);
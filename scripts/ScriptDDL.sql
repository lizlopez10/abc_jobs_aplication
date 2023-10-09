-- DROP SCHEMA evaluacion;

CREATE SCHEMA evaluacion AUTHORIZATION postgres;


-- evaluacion.candidato definition

-- Drop table

-- DROP TABLE evaluacion.candidato;

CREATE TABLE evaluacion.candidato (
	id serial4 NOT NULL,
	nombre varchar NULL,
	apellido varchar NULL,
	CONSTRAINT candidato_pk PRIMARY KEY (id)
);

-- evaluacion.estadoevaluacion definition

-- Drop table

-- DROP TABLE evaluacion.estadoevaluacion;

CREATE TABLE evaluacion.estadoevaluacion (
	id serial4 NOT NULL,
	descripcion varchar NULL,
	CONSTRAINT estadoevaluacion_pk PRIMARY KEY (id)
);-- evaluacion.evaluacion definition

-- Drop table

-- DROP TABLE evaluacion.evaluacion;

CREATE TABLE evaluacion.evaluacion (
	id serial4 NOT NULL,
	idestadoevaluacion int4 NOT NULL,
	idcandidato int4 NOT NULL,
	calificacion numeric NULL,
	ultimonivel int4 NULL DEFAULT 0,
	CONSTRAINT evaluacion_pk PRIMARY KEY (id)
);


-- evaluacion.evaluacion foreign keys

ALTER TABLE evaluacion.evaluacion ADD CONSTRAINT evaluacion_fk FOREIGN KEY (idcandidato) REFERENCES evaluacion.candidato(id);
ALTER TABLE evaluacion.evaluacion ADD CONSTRAINT evaluacion_fk_1 FOREIGN KEY (idestadoevaluacion) REFERENCES evaluacion.estadoevaluacion(id);

-- evaluacion.pregunta definition

-- Drop table

-- DROP TABLE evaluacion.pregunta;

CREATE TABLE evaluacion.pregunta (
	id serial4 NOT NULL,
	pregunta varchar NOT NULL,
	nivel varchar NOT NULL,
	CONSTRAINT pregunta_pk PRIMARY KEY (id)
);

-- evaluacion.respuesta definition

-- Drop table

-- DROP TABLE evaluacion.respuesta;

CREATE TABLE evaluacion.respuesta (
	id serial4 NOT NULL,
	idpregunta int4 NOT NULL,
	respuesta varchar NOT NULL,
	escorrecta bool NOT NULL,
	CONSTRAINT respuest_pk PRIMARY KEY (id)
);


-- evaluacion.respuesta foreign keys

ALTER TABLE evaluacion.respuesta ADD CONSTRAINT respuesta_fk FOREIGN KEY (idpregunta) REFERENCES evaluacion.pregunta(id);


-- evaluacion.preguntarespondida definition

-- Drop table

-- DROP TABLE evaluacion.preguntarespondida;

CREATE TABLE evaluacion.preguntarespondida (
	id serial4 NOT NULL,
	idpregunta int4 NOT NULL,
	idevaluacion int4 NOT NULL,
	idrespuesta int4 NOT NULL,
	CONSTRAINT preguntarespondida_pk PRIMARY KEY (id)
);


-- evaluacion.preguntarespondida foreign keys

ALTER TABLE evaluacion.preguntarespondida ADD CONSTRAINT preguntarespondida_fk FOREIGN KEY (idpregunta) REFERENCES evaluacion.pregunta(id);
ALTER TABLE evaluacion.preguntarespondida ADD CONSTRAINT preguntarespondida_fk_1 FOREIGN KEY (idevaluacion) REFERENCES evaluacion.evaluacion(id);
ALTER TABLE evaluacion.preguntarespondida ADD CONSTRAINT preguntarespondida_fk_2 FOREIGN KEY (idrespuesta) REFERENCES evaluacion.respuesta(id);
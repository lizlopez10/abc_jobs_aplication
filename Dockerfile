# Empezar corriendo una imagen de node 
FROM node:18.17.1

# Copiar el contenido del directorio actual en la imagen de docker
COPY . /app

# Cambiar de directorio de trabajo a donde esta el ejecutable del API
WORKDIR /app

# Instalar requerimientos de la app
RUN npm install

# Agregar variable de entorno con el nombre del estudiante
# ENV user_name Estudiante
ENV USER_DB postgres
ENV HOST_DB 192.168.0.2
ENV NAME_DB postgres
ENV PASSWORD_DB admin
ENV PORT_DB 5432

# Configurar el contenedor para correr en una manera ejecutable
ENTRYPOINT [ "npm", "start" ]

# Archivo principal donde corre el API
CMD ["app.js" ]

EXPOSE 3000
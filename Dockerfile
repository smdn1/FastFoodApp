# Utiliser Nginx comme image de base légère
FROM nginx:alpine

# Copier tous les fichiers de ton projet dans le dossier de publication de Nginx
COPY . /usr/share/nginx/html

# Exposer le port par lequel Nginx sert le site
EXPOSE 80

# Nginx démarre automatiquement, aucun besoin d'ajouter de CMD ici
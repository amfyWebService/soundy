#bin/sh
cd ../soundy_rest/
git pull
cd ../soundy_service/
git pull
cd ../soundy
docker-compose up --force-recreate
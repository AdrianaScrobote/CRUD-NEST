#! / bin / bash
set -e

SERVER = "postgres" ;
PW = "postgres" ;
DB = "postgres" ;

echo  " echo parar e remover docker antigo [ $ SERVER ] e iniciar uma nova instância de [ $ SERVER ] "
(docker kill  $ SERVER  || :) && \
  (docker rm $ SERVER  || :) && \
  docker run --name $ SERVER -e POSTGRES_PASSWORD = $ PW \
  -e PGPASSWORD = $ PW \
  -p 5432: 5432 \
  -d postgres

# aguarde a pg começar
echo  " sleep aguarde o pg-server [ $ SERVER ] iniciar " ;
SLEEP 3 ;

# criar o banco de dados
echo  " CREATE DATABASE $ DB ENCODING 'UTF-8'; "  | docker exec -i $ SERVER psql -U postgres
echo  " \ l "  | docker exec -i $ SERVER psql -U postgres

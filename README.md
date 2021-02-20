# Brainfree Test Task

This project contains CRUD operation of Horse using `Node.js` and `Express.js` for backend API, `Angular` for frontend and `PostgreSQL` for database.

To run this project via docker compose run following command:

    docker-compose up -d

And to run this project via docker compose in development mode run following command:

    docker-compose -f 'docker-compose.dev.yml' up -d

Both docker configurations includes `pgAdmin` as well to verify data directly on database.

Here, the port of each service is mentioned:

| Service          | Development | Production |
| ---------------- | ----------- | ---------- |
| API/Backend      | 3000        | 3000       |
| Angular/Frontend | 4200        | 80         |
| pgAdmin          | 8081        | 8081       |
| Database         | 49153       | 49153      |

Here are the database connection configurations for `pgAdmin`:

    DB_USERNAME=root
    DB_PASSWORD=password
    DB_HOST=db
    DB_PORT=5432
    DB_DATABASE=test_db

## Real Time Monitoring

For real time monitoring we can use `websocker` as data transmission medium. On `angular` we can listen to the emitted data from `node.js` server via websocker. Suppose we allow user to monitor heart rate for multiple horses, so when start monitor button click (let's say on index / listing page), it sends `horse id` to server via the same connected socker and on server we manage an array contains all active monitoring horse ids. Also when user stop monitoring of any horse, it sends `horse id` to server and on server we remove the horse id from the array.

Every five seconds (via `setInterval`), the server emit an object which contains all horse ids available in array as objects and their values will be randomly generated number.

For Example: (1, 3, 6, 7 as horse ids)

    {
        1: 25,
        3: 32
        6: 50
        7: 67
    }

Also for "Possible Birth" warnings, we can have an object of array contains last three heart rate records and everytime new records received, we can add new record on array and remove an element with the help of `shift()` only if the array length is grater than three.

Object of array example with the same horse ids:

    {
        1: [33, 37, 40],
        3: [45, 44, 50],
        6: [51, 54, 55],
        7: [41, 41, 46]
    }

And after that, we can find the average and warn the user for "Possible Birth" if average hart rate calculated grater than 40.

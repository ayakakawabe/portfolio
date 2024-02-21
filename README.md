# portfolio

## Quick start 👻
1. Start a container
    ```
    docker compose up -d
    ```
2. Enter the container
    ```
    docker container exec front sh
    ```
3. Install package and start server
    ```
    npm install && npm run dev
    ```

## Usage 📚
* Build at the first time

    Run the following command after entering the container.
    ```
    npm run build
    ```
* Build from the second time onwards

    Run the following command after entering the container.
    ```
    npm run rebuild
    ```
* Stop the container
    ```
    docker compose down
    ```
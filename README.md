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
* Stop the container
    ```
    docker compose down
    ```

<div align="center">
    <h1>👻 My Portfolio Site</h1>  
    <p align="center">
      <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=typescript,tailwind,docker,vite,githubactions" />
      </a>
    </p>
    <p>This site contains my profile, skill set, certifications, activities, Github repositories, and Qiita articles.</p>

## 👾 Architecture Overview
<div align="center" width="100%"><img width="70%" src="https://github.com/ayakakawabe/portfolio/assets/103473179/e6096742-6253-4bb9-8127-ad75d5ead6d1" /></div>
</div>

## 🚀 Quick start
1. Start a container
    ```
    docker compose up -d
    ```
2. Enter the container
    ```
    docker compose exec front sh
    ```
3. Install package and start server
    ```
    npm install && npm run dev
    ```

## 📚 Usage
* Build
    Run the following command after entering the container.
    ```
    npm run build
    ```
* Stop the container
    ```
    docker compose down
    ```
* Change portfolio data
  
  Change values of the following file.
  ```
  ./front/src/Controller.tsx
  ``` 

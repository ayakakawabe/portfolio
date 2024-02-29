<div align="center">
    <h1>👻 My Portfolio Site</h1>  
    <p align="center">
      <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=typescript,tailwind,docker,vite,githubactions" />
      </a>
    </p>
    <p>This site contains my profile, skill set, certifications, activities, Github repositories, and Qiita articles.</p>


<h2>💻 PC display</h2>
<div align="center" width="100%">
<img width="80%" alt="portfolio_PC_screenshot" src="https://github.com/ayakakawabe/portfolio/assets/103473179/bfb0531b-c5c0-4b05-8eff-1fec6d44c1c9">
</div>

<h2>📱 iphone display</h2>
<div align="center" width="100%">
<img width="30%" src="https://github.com/ayakakawabe/portfolio/assets/103473179/02b17f78-933e-466a-ae68-aff014ad6834">
</div>

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

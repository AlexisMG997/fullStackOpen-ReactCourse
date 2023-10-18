::: mermaid

sequenceDiagram
  participant client
  participant browser
  participant server

  client->>browser: Access to single-page-app

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server -->> browser: HTML Document
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server -->> browser: CSS File
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server -->> browser: JS File
  deactivate server

  browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server -->> browser: JSON Data
  deactivate server

  browser -->> client: Display single-page-app
:::
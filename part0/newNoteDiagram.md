:::mermaid
sequenceDiagram
  participant client
  participant browser
  participant server

  client->>browser: Inserts value on the input
  
  client->>browser: Clicks on submit button
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server -->> browser: HTML Document
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  activate server
  server -->> browser: JS File
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server -->> browser: CSS File
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server -->> browser: JSON Data
  deactivate server

  browser-->>client: Displays new list with value added
:::
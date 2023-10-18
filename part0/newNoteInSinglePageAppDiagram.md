::: mermaid

sequenceDiagram
  participant client
  participant browser
  participant server

  client ->> browser: Inserts new value on the input

  client ->> browser: Clicks on Save button

  browser ->> server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  server -->> browser: JSON Response
  deactivate server

  browser -->> client: Displays new value 
:::
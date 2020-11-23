# Angular

- Instal angular

  ```
  npm i -g @angular/cli
  ```

- Create new project

  ```
  ng new name-project
  ```

- Run server
  ```
  ng server
  ```

## Aplication Project Structure

- e2e
- node-modules
- src
- .browserlistrc ( descripe supported browsers for our project)
- .editorconfig ( file with default editors configuration)
- .gitignore
- angular.json (main configuration file for our project)
- karma.config (file for testing configuration)
- packacke.lock.json
- package.json
- tsconfig.app.json (TypeScript configuration for our application)
- tsconfig.json (global TypeSript configuration for our Workspace)
- tsconfig.spec.json ( TypeScript configuration for test)
- tslint.json (configuration file for code validation)

### Angular.json

- "projects" (descripe our all project )
- "projectType" (kind of project: "application", "library")
- "sourceRoot" (path to our application)
- "architect" (configuration for: build, serve, test our application)
  - build:
    - "outputPath" (path where our application will be generate after ng b / ng build)
    - "assets" (path to our static files: img, svg, favicon, fonts)
    - "styles" (global css files)
    - "scripts" (global js files)

### Src

- app (our code)
- assets (static files)
- environments (configuration for application run mode )

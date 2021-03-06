# Angular

### Table of Content

- [Angular](#angular)
    - [Table of Content](#table-of-content)
  - [Instalation](#instalation)
  - [Aplication Project Structure](#aplication-project-structure)
    - [Angular.json](#angularjson)
    - [Src](#src)
  - [Application Architecture](#application-architecture)
  - [\*ngFor](#ngfor)
  - [Concepts](#concepts)
  - [Data Binding](#data-binding)
  - [Deploy Angular Apps to GitHub Pages](#deploy-angular-apps-to-github-pages)
-

## Instalation

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
  ng serve
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

## Application Architecture

1. Modules (min 1 in app)
   1. @NgModule - dekorator - wszytsko co w nim skąłda się na apliakcję angularową
      - declaration ( deklaracja komponentów, dyrektyw i pipe)
      - imports ( deklaracja importowanych modułów; mogą być z zew. bibliotek)
      - providers ( deklaracja o serwisach, dostępny będzie dla całego serwisu, albo komponentu, jeżeli tam będzie zadeklarowany)
      - bootstrap ( koponent startowy aplikacji)

\* Feature Modules

2.  Services - klasa z dekoratorem Injectable
    - wykonują zadania dla komponentów i innych części aplikacji
    - dostarcza dane i pomaga w ich analizie i przetwarzaniu danych
    - wykonuje zapytania HTTP,
    - sprawdza uprawienia
    - komonikacja między komponentami
    - DEKLAROWAĆ w tablicy "providers" ( w dekoratorze aplikacji lub componentu)
    ```
    @Injectable({})
    ```
3.  Components

    - to klasa zawierająca dekorator komponent
    - służy do wyświetlania danych
    - komunikuje się z użytkownikiem, w tym miejscu powstaje to co widać na ekranie

    ```
    @Component({})
    ```

4.  Directives
5.  Pipe

- operatory pipe służa do modyfikowania, filtrowania danych przed ich wyświetleniem
- pipe przed wyświetleniem danych filtruje, modyfikuje lub zmienia wartość
- Angular posiada wiele wbudowanych i przydatnych pipes
- pipe może mieć dodatkowe parametry, które mogą określić sposób działania
- pipes możemy łączyć ze sobą, trzeba jednak uważać aby typy przesyłane między nimi zgadzały się
- w Internecie jest mnóstwo gotowych bibliotek z różnymi gotowymi pipes
- prawdopodobnie jeśli potrzebujesz użyć pipe, ktoś już ją napisał i udostępnił
- przy interpolacji: `{{title | uppercase}}`
- parametry:
- [DatePipe](https://angular.io/api/common/DatePipe)
- [DecimalPipe](https://angular.io/api/common/DecimalPipe)
  - | number
  - | number: 1.0-0
- UppercasePipe, LowerCasePipe, TitlePipe
- I18nSelectPipe
  ```js
  translate: {
      zima: 'winter',
      wiosna: 'spring',
      jesien: 'autumn',
      lato: 'summer'
  }
  ```
  ```js
  {{'zima' |i18nSelect: translate}} // winter
  ```
- CurrencyPipe

  ```js
  price = 12.88;
  ```

  ```js
  {{ price | currency: "PLN" }} //12.88 zł
  ```

- JsonPipe
  ```js
  translate: {
      zima: 'winter',
      wiosna: 'spring',
      jesien: 'autumn',
      lato: 'summer'
  }
  ```
  ```js
  {
    {
      translate | json;
    }
  }
  /* {zima: 'winter', wiosna: 'spring',jesien: 'autumn',lato: 'summer'} */
  ```
- KeyValuePipe - iterowanie obiektu po jego kluczach
- SlicePipe
- PercentPipe
- NGX PIPE

## \*ngFor

- za pomocą `*ngFor` możemy iterować po listach i obiektach
- do wyświetlania kluczy i wartości obiektów istnieje specjalny pipe keyvalue
- `*ngFor` powiela element HTML, na którym jest wstawiony
- `*ngFor` może powielać także komponenty
- zmienna wytworzona z `*ngFor` jest dostępna tylko w tym elemencie, na którym jest użyty `*ngFor`
- `*ngFor` dostarcza nam prosty dostęp do indexu, pierwszego, ostatniego, parzystego i nieparzystego elementu
- jeśli próbujesz użyć `*ngFor` i nie działa sprawdź czy na pewno iterujesz po obiekcie, który jest iterowalny

```html
<li *ngFor="let item of weeks; let i = index">{{i}}. {{item}}</li>
```

```html
<ng-container *ngFor="let item of weeks; let even = even; let odd= odd">
  <!-- dalej warunki *ngIf -->
</ng-container>
```

```html
<li *ngFor="let item of weeks | keyvalue">{{item.key}} - {{item.value}}</li>
```

## Concepts

1. Interpolacja

   - wyświetla tylko typy proste (prymitywne) jak `boolean, number, string` w formie tekstu
   - wyświetla dane za pomocą podwójnych nawiasów klamrowych – `{‌{}}`
   - nie wyświetlimy za pomocą interpolacji tak złożonych typów jak obiekt
   - możemy używać dodatkowych wyrażeń w interpolacji np. `{‌{(2 + 2 - 1) \* 4}}`
   - interpolacja przede wszystkim powinna służyć do wyświetlania danych, nie do rozwiązywania skomplikowanych wyrażeń

2. Change Detection
   - uruchamiane przy jakiejkolwiek zmianie komponentu
   - renderowanie komponentu przy każdym wywołaniu setTimout, setInterval
   - widok HTML jest odświeżany tylko po operacjach asynchronicznych (zdarzenia na stronie, HTTP) i wtedy pokazuje zmienione dane

## Data Binding

- synchrnizacja danych między klasą konponentu i HTML
- One-way Binding

  1. Event Binding

     - HTML -> Klasa Komponentu

       ```html
       <button (click)="cleartList()"></button>
       ```

  2. Property Binding

     - Klasa Komponentu -> HTML

     ```html
     <p>Witaj {{title}}</p>
     <input type="text" [value]="task.name" />
     <button [disabled]="true">Wyślij</button>
     ```

- Two-way Binding

  - HTML <-> Klasa Komponentu

    ```html
    <input type="text" [(value)]="task.name" />
    ```

## Deploy Angular Apps to GitHub Pages

[source page](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4)

1. Run Build

   Before you can deploy an Angular App, you need to build your angular app for use in production.

   This simply means configuring your app to be useable on a remote server like gh-pages.

   Usually, while creating your App, you had it running on your local server, but unfortunately the configuration for the local server will not serve the application when it is deployed on the gh-pages remote server, which is why you need to build your app.

   Run this command on your terminal to build the application:

   ```
   $ ng build --prod --base-href "https://GithubUserName.github.io/GithubRepoName/"
   ```

   Note: Make sure you put in your Github username in “GithubUserName” and the repository name you created in “GithubRepoName” sections of the URL.

2. Deploy to gh-pages

   After building the App, you can now deploy it to Github Pages using the angular-cli-ghpages tool.

   Run the command below in your terminal to deploy the App:

   ```
   $ npx angular-cli-ghpages --dir=dist/Project-name
   ```

   Note: Make sure you put the name of the project in the place of “Project-name” in the command above.

   You can find this in the angular.json file under defaultProject which is at the bottom of the file. If the project name is wrong, your App will not work; so if you are seeing any errors, check the angular.json to confirm if you used the correct project name.

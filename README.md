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

# OnefootballAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## PreRequisites to ru nthe project

Node version v14.16.0 (npm v6.14.11) minimum

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run cypress:open` to execute the end-to-end tests via [Cypress]. Then go to integrations folder and run the `player-search-journey.spec.ts`.

## Architecture Choices

1. Framework Used: Angular built with Angular CLI version 11.0.3
2. The architecture of the app is kept pretty simple. Currently, there is only Root Module, which has all the components. This was done in order to keep the app simple, due to it's simple UX and requirements.
3. Ofcourse, we can further scale the archuitecture, by having different feature and common components module under the root module.
4. There seemed no requirement for routing, so routing is not included in the project.
5. For styling, CSS is used.
6. ng-bootstrap component library is used for styling, fonts and UI components.
7. Karma and Jasmine, are used for Unit testing
8. Cypress is used for e2e testing

## Also, here are some improvements that I feel can be done to the code are:

1. Feature and Common UI Modules under the Root Module,
    to promote lazy loading and make the app more scalable and optimized.
2. Add accessibility in the project.

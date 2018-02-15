// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    baseUrl:'https://jegybazar-66d0b.firebaseio.com',
    registrationUrl:'https://www.googleapis.com/identitytoolkit/v3/relyingparty/singupNewUser',
    loginUrl:'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
    apiKey:'AIzaSyCHzqJu2b-jycYfrxsMB6EChQvjV9JfwAk'
  }
};

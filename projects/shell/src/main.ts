import('./bootstrap').catch((err) => console.error(err));

/* 
  
    & create Monorepo
    $ ng new microfrontend-demo --create-application=false

    & crate shell and mfe1
    $ ng g application shell
    $ ng g application mfe1

    & add @angular-architects/module-federation
    $ ng add @angular-architects/module-federation --project shell --type host --port 4200
    $ ng add @angular-architects/module-federation --project mfe1 --type remote --port 4201
    
  */

# React App with Drupal Backend
Resources:

[Drupalize.me create fully decoupled react app](https://drupalize.me/tutorial/create-fully-decoupled-react-application?p=3253)
[What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)
[OAuth 2.0](https://youtu.be/CPbvxxslDTU)

Uses [Simple OAuth module]('https://www.drupal.org/project/simple_oauth') to decouple drupal for use as a backend to authenticate users 

## CORS
CORS policy needs to be correctly configured for both the host and the client.
```
# enable CORS
Header add Access-Control-Allow-Origin: "*"
Header add Access-Control-Allow-Methods: "GET,POST,OPTIONS,DELETE,PUT"
Header add Access-Control-Allow-Headers: "Content-Type"
```

Added the following to the .htaccess file under the domain root of the CMS:
```
parameters:
  cors.config:
    enabled: false
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: ['x-csrf-token','authorization','content-type','accept','origin','x-requested-with', '*']
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['*']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: true
    # Sets the Access-Control-Max-Age header.
    maxAge: 1000
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
```
Under the /sites/default directory, added a settings.yml file with the following:
# auth-graphql-starter
Starter project from a GraphQL course on Udemy.com - Section 3!

In order to modify the claims in the JWT for testing you most perform the following steps:

1. Generate a new certificate/private key pair: `openssl req -x509 -sha256 -newkey rsa:2048 -keyout certificate.key -out certificate.crt -days 1024 -nodes`
2. Get the public key `openssl x509 -in certificate.key -pubkey -noout`
3. Generate a new JWK using the public key: https://russelldavies.github.io/jwk-creator/
4. Paste the generated JWK into the `test/resources/jwks.json` file
5. Create a new JWT: https://jwt.io/
    1. Paste the existing JWT in the "Encoded" field to decode
    2. Modify the payload as needed
    3. Add the private key (result of `cat certificate.key`) to the Private Key field.
        * This will generate a new token in the "Encoded" field that can be used for testing.
        * The signature can be verified using the certificate (.crt) or public key in the appropriate field.

const { ApolloServer, gql } = require('apollo-server');

const tipoUsuarios = gql`
    type Usuario{
        usuario: String
        nombre: String
        apellido_paterno: String
        apellido_materno: String
        correo: String
        password: String
    }

    type Query {
        getUsuarios: [Usuario]
    }
`;

const resolvers = {
    Query: {
        getUsuarios: () => [
            {
                usuario: 'kevsito',
                nombre: 'Kevin',
                apellido_paterno: 'Arcos',
                apellido_materno: 'Gonzalez',
                correo: 'kevsito@gmail.com',
                contraseña: '123'
            },
            {
                usuario: 'majo',
                nombre: 'Mayte',
                apellido_paterno: 'Aguilar',
                apellido_materno: 'ND',
                correo: 'majo@gmail.com',
                password: '123'
            }
        ],
    },
};

const server = new ApolloServer({ typeDefs: tipoUsuarios, resolvers });

// Inicia el servidor en el puerto 4000
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL listo en ${url}`);
});

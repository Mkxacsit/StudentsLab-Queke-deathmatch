const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});


const doc = {
  info: {
    title: 'Swagger API',
    description: 'My swagger API',
    version : "1.0.0"
  },
  host: '127.0.0.1:3033',
  schemes : ['http'],
  consumes: [],
  produces: [],
  components: {},
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }, 
  tags: [        
    {
        name: 'Users',         
        description: 'Users API',  
    },
    {
        name: 'Sessions',         
        description: 'Sessions API',  
    },
    {
        name: 'Locations',         
        description: 'Locations API', 
    },
    {
        name: 'Auth',        
        description: 'Auth API',  
    },
  ],
}


const outputFile = './src/swagger/output.json';
const endpointsFiles = ["main.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(
  ({ success }) => {
    console.log(`Generated: ${success}`)
  }
)
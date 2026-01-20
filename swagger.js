const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 Course Work API',
    version: '1.0.0',
    description: 'API for managing professional profile data',
  },
  host: process.env.PUBLISHED_URL ? new URL(process.env.PUBLISHED_URL).host : 'localhost:8080',
  schemes: process.env.PUBLISHED_URL ? ['https'] : ['http'],
  servers: process.env.PUBLISHED_URL ? [
    {
      url: process.env.PUBLISHED_URL,
      description: 'Production server'
    },
    {
      url: 'http://localhost:8080',
      description: 'Development server'
    }
  ] : [
    {
      url: 'http://localhost:8080',
      description: 'Development server'
    }
  ]
};

const outputFile = './swagger.json';
const routesFiles = ['./routes/professional.js'];

swaggerAutogen(outputFile, routesFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully');
}).catch((err) => {
  console.error('Error generating Swagger documentation:', err);
});

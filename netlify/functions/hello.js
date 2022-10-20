
exports.handler = async (event, context) => {
  const {
    name = "World"
  } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};

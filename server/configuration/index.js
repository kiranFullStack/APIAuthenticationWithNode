if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "codeworkrauthentication",
    oauth: {
      google: {
        clientID: "number",
        clientSecret: "string",
      },
      facebook: {
        clientID: 1781631228735689,
        clientSecret: "4308a36a364817a13963d0c811497c1c",
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: "codeworkrauthentication",
    oauth: {
      google: {
        clientID: "number",
        clientSecret: "string",
      },
      facebook: {
        clientID: 1781631228735689,
        clientSecret: "4308a36a364817a13963d0c811497c1c",
      },
    },
  };
}


const convict = require("convict");

const apolloSchema = convict({
  introspection: {
    doc: "apollo instropection",
    format: "Boolean",
    default: false,
    env: "APOLLO_INTROSPECTION",
  },
  playground: {
    doc: "apollo playground",
    format: "Boolean",
    default: false,
    env: "APOLLO_PLAYGROUND",
  }

});

const getIntrospection = () => {
  try {
    const result = apolloSchema.get("introspection");
    return result;
  } catch (error) {
    throw Error("Missing introspection");
  }
};

const getPlayground = () => {
  try {
    const result = apolloSchema.get("playground");
    return result;
  } catch (error) {
    throw Error("Missing playground");
  }
};

module.exports = {
  ...apolloSchema,
  getIntrospection,
  getPlayground
};

var Config = {
    LIMIT: "APP_LIMIT",
    PERSIST_SECRET_KEY: "APP_REDUX_PERSIST_STORE_KEY",
    APP_STORE_URL: "APP_STORE_URL",
    PLAY_STORE_URL: "PLAY_STORE_URL",
    ENVIRONMENT: "APP_ENV",
    ENVIRONMENTS: {
      LOCAL: {
        API_URL: "APP_API_URL",
      },
      DEVELOPMENT: {
        API_URL: "APP_API_URL",
      },
      STAGING: {
        API_URL: "APP_API_URL",
      },
      PRODUCTION: {
        API_URL: "APP_API_URL",
      },
    },
  };
  
  Config.env = () => {
    return Config.ENVIRONMENTS[Config.ENVIRONMENT];
  };
  
  export default Config;
  
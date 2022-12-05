var Config = {
    LIMIT: "APP_LIMIT",
    ENVIRONMENT: "LOCAL",
    WEB_SIGNUP_URL: "https://dev-app.swiftchat.io/signup",
    WEB_LOGIN_URL: "https://dev-app.swiftchat.io/login",
    APP_STORE_URL: "https://apps.apple.com/us/app/swiftchat-sales-support-chat/id1576348489",
    PLAY_STORE_URL: "https://play.google.com/store/apps/details?id=io.swiftchat.app",
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
  
const { RESTDataSource } = require("apollo-datasource-rest");

class NewsAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://saurav.tech/NewsAPI/";
  }

  getTopHeadLines() {
    return this.get("top-headlines/category/general.us.json");
  }
}

module.exports = NewsAPI;

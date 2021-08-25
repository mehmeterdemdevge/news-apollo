const { RESTDataSource } = require("apollo-datasource-rest");

class NewsAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://saurav.tech/NewsAPI/";
  }

  async getTopHeadLines() {
    const response = await this.get("top-headlines/category/general/us.json");
    return Array.isArray(response.articles) ? response.articles : [];
  }
}

module.exports = NewsAPI;

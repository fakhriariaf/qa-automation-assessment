export class PostsApi {

  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getPosts() {
    return await this.request.get(`${this.baseUrl}/posts`);
  }

  async getSinglePost(id) {
    return await this.request.get(`${this.baseUrl}/posts/${id}`);
  }

  async createPost(payload) {
    return await this.request.post(`${this.baseUrl}/posts`, {
      data: payload
    });
  }

  async getComments() {
    return await this.request.get(`${this.baseUrl}/posts/1/comments`);
  }

  async invalidEndpoint() {
    return await this.request.get(`${this.baseUrl}/postsss`);
  }
}

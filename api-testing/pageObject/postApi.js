export class PostsApi {

    constructor(request) {
        this.request = request;
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    // ================= GET =================

    async getPosts() {
        return await this.request.get(`${this.baseUrl}/posts`);
    }

    async getSinglePost(id) {
        return await this.request.get(`${this.baseUrl}/posts/${id}`);
    }

    async getPostComments(postId = 1) {
        return await this.request.get(`${this.baseUrl}/posts/${postId}/comments`);
    }

    async getCommentsByPost(postId) {
      return await this.request.get(`${this.baseUrl}/comments?postId=${postId}`);
    }


    async getCommentsByQuery(postId = 1) {
        return await this.request.get(`${this.baseUrl}/comments?postId=${postId}`);
    }

    async getUsers() {
        return await this.request.get(`${this.baseUrl}/users`);
    }

    async getTodos() {
        return await this.request.get(`${this.baseUrl}/todos`);
    }

    // ================= POST =================

    async createPost(payload) {
        return await this.request.post(`${this.baseUrl}/posts`, {
            data: payload
        });
    }

    async createPostWithoutBody() {
        return await this.request.post(`${this.baseUrl}/posts`);
    }

    // ================= PUT =================

    async updatePost(id, payload) {
        return await this.request.put(`${this.baseUrl}/posts/${id}`, {
            data: payload
        });
    }

    // ================= PATCH =================

    async patchPost(id, payload) {
        return await this.request.patch(`${this.baseUrl}/posts/${id}`, {
            data: payload
        });
    }

    // ================= DELETE =================

    async deletePost(id) {
        return await this.request.delete(`${this.baseUrl}/posts/${id}`);
    }

    // ================= NEGATIVE / EDGE =================

    async getInvalidPost() {
        return await this.request.get(`${this.baseUrl}/posts/999999`);
    }

    async invalidEndpoint() {
        return await this.request.get(`${this.baseUrl}/postsss`);
    }

    async sendInvalidPayload() {
        return await this.request.post(`${this.baseUrl}/posts`, {
            data: "invalid-body"
        });
    }

    async timeoutSimulation() {
        return await this.request.get(`${this.baseUrl}/posts`, {
            timeout: 1
        });
    }
}

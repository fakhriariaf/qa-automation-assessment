import { test, expect } from '@playwright/test';
import { PostsApi } from '../pageObject/postApi.js';
import { ApiResults } from '../utils/apiResults.js';

test.describe('JSONPlaceholder API Automation', () => {

    async function measure(apiCall) {
        const start = Date.now();
        const res = await apiCall();
        const duration = Date.now() - start;
        return { res, duration };
    }

    test('API01 - GET /posts', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getPosts());
        const body = await res.json();

        ApiResults.log('API01 - GET /posts', res.status(), duration);
        ApiResults.saveJson('API01', body);

        expect(res.status()).toBe(200);
    });

    test('API02 - GET /posts/1', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getSinglePost(1));
        const body = await res.json();

        ApiResults.log('API02 - GET /posts/1', res.status(), duration);
        ApiResults.saveJson('API02', body);

        expect(body.id).toBe(1);
    });

    test('API03 - POST create post', async ({ request }) => {
        const api = new PostsApi(request);

        const payload = {
            title: 'automation',
            body: 'playwright api',
            userId: 1
        };

        const { res, duration } = await measure(() => api.createPost(payload));
        const body = await res.json();

        ApiResults.log('API03 - POST /posts', res.status(), duration);
        ApiResults.saveJson('API03', body);

        expect(res.status()).toBe(201);
    });

    test('API04 - GET post comments', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getPostComments(1));
        const body = await res.json();

        ApiResults.log('API04 - GET comments', res.status(), duration);
        ApiResults.saveJson('API04', body);

        expect(body.length).toBeGreaterThan(0);
    });

    test('API05 - PUT update post', async ({ request }) => {
        const api = new PostsApi(request);

        const payload = { title: 'updated', body: 'updated', userId: 1 };

        const { res, duration } = await measure(() => api.updatePost(1, payload));
        const body = await res.json();

        ApiResults.log('API05 - PUT /posts/1', res.status(), duration);
        ApiResults.saveJson('API05', body);

        expect(body.title).toBe(payload.title);
    });

    test('API06 - PATCH post', async ({ request }) => {
        const api = new PostsApi(request);

        const payload = { title: 'patched title' };

        const { res, duration } = await measure(() => api.patchPost(1, payload));
        const body = await res.json();

        ApiResults.log('API06 - PATCH /posts/1', res.status(), duration);
        ApiResults.saveJson('API06', body);

        expect(body.title).toBe(payload.title);
    });

    test('API07 - DELETE post', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.deletePost(1));

        ApiResults.log('API07 - DELETE /posts/1', res.status(), duration);
        ApiResults.saveJson('API07', { status: res.status() });

        expect(res.status()).toBe(200);
    });

    test('API08 - Invalid endpoint', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.invalidEndpoint());

        ApiResults.log('API08 - Invalid endpoint', res.status(), duration);
        ApiResults.saveJson('API08', { status: res.status() });

        expect(res.status()).toBe(404);
    });

    test('API09 - Invalid ID', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getSinglePost(999999));

        ApiResults.log('API09 - Invalid ID', res.status(), duration);
        ApiResults.saveJson('API09', { status: res.status() });

        expect(res.status()).toBe(404);
    });

    test('API10 - Empty POST payload', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.createPost({}));
        const body = await res.json();

        ApiResults.log('API10 - Empty payload', res.status(), duration);
        ApiResults.saveJson('API10', body);

        expect(res.status()).toBe(201);
    });

    test('API11 - Validate headers', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getPosts());
        const body = await res.json();

        ApiResults.log('API11 - Header validation', res.status(), duration);
        ApiResults.saveJson('API11', body);

        expect(res.headers()['content-type']).toContain('application/json');
    });

    test('API12 - Response time < 2s', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getPosts());
        const body = await res.json();

        ApiResults.log('API12 - Response time', res.status(), duration);
        ApiResults.saveJson('API12', body);

        expect(duration).toBeLessThan(2000);
    });

    test('API13 - Get Users', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getUsers());
        const body = await res.json();

        ApiResults.log('API13 - GET users', res.status(), duration);
        ApiResults.saveJson('API13', body);

        expect(body.length).toBeGreaterThan(0);
    });

    test('API14 - Get Todos', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getTodos());
        const body = await res.json();

        ApiResults.log('API14 - GET todos', res.status(), duration);
        ApiResults.saveJson('API14', body);

        expect(res.status()).toBe(200);
    });

    test('API15 - Query params comments', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getCommentsByPost(1));
        const body = await res.json();

        ApiResults.log('API15 - Query comments', res.status(), duration);
        ApiResults.saveJson('API15', body);

        expect(body[0].postId).toBe(1);
    });

    test('API16 - Validate response schema', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getSinglePost(1));
        const body = await res.json();

        ApiResults.log('API16 - Schema validation', res.status(), duration);
        ApiResults.saveJson('API16', body);

        expect(body).toHaveProperty('userId');
    });

    test('API17 - Bulk posts validation', async ({ request }) => {
        const api = new PostsApi(request);

        const { res, duration } = await measure(() => api.getPosts());
        const body = await res.json();

        ApiResults.log('API17 - Bulk validation', res.status(), duration);
        ApiResults.saveJson('API17', body);

        expect(body.every(p => p.id)).toBeTruthy();
    });

    test('API18 - Negative payload types', async ({ request }) => {
        const api = new PostsApi(request);

        const payload = { title: 123, body: true, userId: "abc" };

        const { res, duration } = await measure(() => api.createPost(payload));
        const body = await res.json();

        ApiResults.log('API18 - Negative payload', res.status(), duration);
        ApiResults.saveJson('API18', body);

        expect(res.status()).toBe(201);
    });

    test('API19 - OPTIONS method', async ({ request }) => {
        const start = Date.now();
        const res = await request.fetch('https://jsonplaceholder.typicode.com/posts', { method: 'OPTIONS' });
        const duration = Date.now() - start;

        ApiResults.log('API19 - OPTIONS', res.status(), duration);
        ApiResults.saveJson('API19', { status: res.status() });

        expect(res.status()).toBeLessThan(500);
    });

    test('API20 - Multiple sequential calls', async ({ request }) => {
        const api = new PostsApi(request);
        const results = [];

        for (let i = 0; i < 3; i++) {
            const { res } = await measure(() => api.getPosts());
            results.push(res.status());
        }

        ApiResults.log('API20 - Sequential calls', results.join(','));
        ApiResults.saveJson('API20', results);

        expect(results.every(s => s === 200)).toBeTruthy();
    });

});

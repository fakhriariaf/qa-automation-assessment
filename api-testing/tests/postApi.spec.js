import { test, expect } from '@playwright/test';
import { PostsApi } from '../pageObject/postApi.js';
import { ApiResults } from '../utils/apiResults.js';

test.describe('JSONPlaceholder API', () => {

  test('API01 - GET /posts', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getPosts();
    const body = await res.json();

    expect(res.status()).toBe(200);

    ApiResults.log('API01 - GET /posts', res.status());
    ApiResults.saveJson('API01', body);
  });

  test('API02 - GET /posts/1', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getSinglePost(1);
    const body = await res.json();

    expect(res.status()).toBe(200);
    expect(body.id).toBe(1);

    ApiResults.log('API02 - GET /posts/1', res.status());
    ApiResults.saveJson('API02', body);
  });

  test('API03 - POST /posts', async ({ request }) => {

    const api = new PostsApi(request);

    const payload = {
      title: 'automation',
      body: 'playwright api',
      userId: 1
    };

    const res = await api.createPost(payload);
    const body = await res.json();

    expect(res.status()).toBe(201);

    ApiResults.log('API03 - POST /posts', res.status());
    ApiResults.saveJson('API03', body);
  });

  test('API04 - GET /posts/1/comments', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getComments();
    const body = await res.json();

    expect(res.status()).toBe(200);

    ApiResults.log('API04 - GET comments', res.status());
    ApiResults.saveJson('API04', body);
  });

  test('API05 - Invalid endpoint', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.invalidEndpoint();
    const body = await res.text();

    expect(res.status()).toBe(404);

    ApiResults.log('API05 - Invalid endpoint', res.status());
    ApiResults.saveJson('API05', { error: body });
  });

  test('API06 - Invalid ID', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getSinglePost('abc');
    const body = await res.text();

    expect(res.status()).toBe(404);

    ApiResults.log('API06 - Invalid ID', res.status());
    ApiResults.saveJson('API06', { error: body });
  });

  test('API07 - Empty POST payload', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.createPost({});
    const body = await res.json();

    expect(res.status()).toBe(201);

    ApiResults.log('API07 - Empty payload', res.status());
    ApiResults.saveJson('API07', body);
  });

  test('API08 - Large ID', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getSinglePost(99999);
    const body = await res.text();

    expect(res.status()).toBe(404);

    ApiResults.log('API08 - Large ID', res.status());
    ApiResults.saveJson('API08', { error: body });
  });

  test('API09 - Validate headers', async ({ request }) => {

    const api = new PostsApi(request);
    const res = await api.getPosts();
    const body = await res.json();

    expect(res.headers()['content-type']).toContain('application/json');

    ApiResults.log('API09 - Header validation', res.status());
    ApiResults.saveJson('API09', body);
  });

  test('API10 - Response time', async ({ request }) => {

    const api = new PostsApi(request);

    const start = Date.now();
    const res = await api.getPosts();
    const duration = Date.now() - start;

    const body = await res.json();

    expect(duration).toBeLessThan(2000);

    ApiResults.log('API10 - Response time', res.status());
    ApiResults.saveJson('API10', body);
  });

});

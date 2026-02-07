import fs from 'fs';

export class ApiResults {

  static ensureFolder() {
    if (!fs.existsSync('api-testing/results')) {
      fs.mkdirSync('api-testing/results', { recursive: true });
    }
  }

  static log(testName, status, responseTime = '-') {

    this.ensureFolder();

    const content = `
========================
TEST: ${testName}
STATUS: ${status}
RESPONSE TIME: ${responseTime} ms
TIME: ${new Date().toISOString()}
========================
`;

    fs.appendFileSync('api-testing/results/api-results.txt', content);
  }

  static saveJson(testId, body) {

    this.ensureFolder();

    fs.writeFileSync(
      `api-testing/results/${testId}.json`,
      JSON.stringify(body, null, 2)
    );
  }
}

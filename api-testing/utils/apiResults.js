import fs from 'fs';

export class ApiResults {

  static log(testName, status) {

    const content = `
========================
TEST: ${testName}
STATUS: ${status}
TIME: ${new Date().toISOString()}
========================
`;

    fs.appendFileSync('api-testing/results/api-results.txt', content);
  }

  static saveJson(testId, body) {
    fs.writeFileSync(
      `api-testing/results/${testId}.json`,
      JSON.stringify(body, null, 2)
    );
  }
}

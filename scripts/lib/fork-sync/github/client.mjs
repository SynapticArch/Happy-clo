import { Octokit } from "@octokit/rest";

/**
 * @param {string} token
 */
export function createOctokit(token) {
  return new Octokit({
    auth: token,
    userAgent: "synapticarch-fork-sync/1.0",
    request: { timeout: 60_000 },
  });
}

import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  /**
   * Plug-ins
   *
   * In this example we have chosen to use a publication preset for Jekyll,
   * save posts and media files to a GitHub repository, and added a syndicator
   * to share posts on a Mastodon server.
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
  ],

  /**
   * Publication options
   *
   * These values are used to configure application behaviour.
   *
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    me: process.env.PUBLICATION_URL,
    postTypes: {
      article: {
        post: {
          path: "src/posts/{slug}.md",
          url: "{slug}"
        }
      }
    }
  },

  /**
   * GitHub content store options
   *
   * Other content stores are available.
   *
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USERNAME,
    repo: process.env.GITHUB_REPOSITORY,
    branch: process.env.GITHUB_BRANCH,
  },
};

export default config;



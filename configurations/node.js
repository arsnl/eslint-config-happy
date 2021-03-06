module.exports = {
  plugins: ["node"],
  rules: {
    "node/callback-return": "error",
    "node/exports-style": ["error", "module.exports"],
    "node/global-require": "error",
    "node/handle-callback-err": "error",
    "node/no-callback-literal": "error",
    "node/no-deprecated-api": "error",
    "node/no-exports-assign": "error",
    "node/no-extraneous-import": "error",
    "node/no-extraneous-require": "error",
    "node/no-missing-import": "error",
    "node/no-missing-require": "error",
    "node/no-new-require": "error",
    "node/no-path-concat": "error",
    "node/no-process-env": "error",
    "node/no-process-exit": "error",
    "node/no-sync": [
      "error",
      {
        allowAtRootLevel: true,
      },
    ],
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    "node/prefer-global/buffer": "error",
    "node/prefer-global/console": "error",
    "node/prefer-global/process": "error",
    "node/prefer-global/text-decoder": "error",
    "node/prefer-global/text-encoder": "error",
    "node/prefer-global/url": "error",
    "node/prefer-global/url-search-params": "error",
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
    "node/process-exit-as-throw": "error",
  },
};

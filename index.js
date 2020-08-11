const visit = require("unist-util-visit");

const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*:/i;

const defaultPluginOptions = {
  prefix: "",
  suffix: "",
};

module.exports = ({ markdownAST }, pluginOptions = defaultPluginOptions) => {
  visit(markdownAST, "link", (node) => {
    if (node.url && ABSOLUTE_URL_REGEX.test(node.url)) {
      node.url = `${pluginOptions.prefix}${node.url}${pluginOptions.suffix}`;
    }
  });

  return markdownAST;
};

const plugin: Deno.lint.Plugin = {
  name: "no-alert",
  rules: {
    "no-alert": {
      create(context) {
        return {
          CallExpression(node) {
            const callee = node.callee;
            if (
              callee.type === "Identifier" &&
              ["alert", "confirm", "prompt"].includes(callee.name)
            ) {
              context.report({
                node,
                message: `Unexpected call to \`${callee.name}\``,
              });
            }
          },
        };
      },
    },
  },
};

export default plugin;

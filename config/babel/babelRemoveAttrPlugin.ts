import { PluginItem } from '@babel/core';

export default (): PluginItem => ({
  visitor: {
    Program(path, state) {
      const forbiddenAttrs: string[] = state.opts.props || []; // babelPlugin(['data-testid'])

      path.traverse({
        JSXIdentifier(current) {
          const nodeName = current.node.name;

          if (forbiddenAttrs.includes(nodeName)) {
            current.parentPath.remove();
          }
        },
      });
    },
  },
});

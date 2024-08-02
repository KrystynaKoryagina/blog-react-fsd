import { Project, SyntaxKind } from 'ts-morph';
import { isToggleFeature, replaceToggleFeature } from './toggleFeatures';
import {
  isToggleFeatureComponent,
  replaceToggleFeatureComponent,
} from './toggleFeatureComponent';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.ts');

const files = project.getSourceFiles();

function removeFeatureFlag(): void {
  files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
      if (node.isKind(SyntaxKind.CallExpression) && isToggleFeature(node)) {
        return replaceToggleFeature(node);
      }

      if (
        node.isKind(SyntaxKind.JsxSelfClosingElement) &&
        isToggleFeatureComponent(node)
      ) {
        return replaceToggleFeatureComponent(node);
      }
    });
  });
}

project.save();

export { removeFeatureFlag };

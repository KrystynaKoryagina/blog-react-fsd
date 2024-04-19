import { CallExpression, Node, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFeatureName = 'toggleFeature';

function isToggleFeature(node: Node): boolean {
  let isToggleFeatures = false;

  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === toggleFeatureName
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

function replaceToggleFeature(node: CallExpression): void {
  const objectOptions = node.getFirstDescendantByKind(
    SyntaxKind.ObjectLiteralExpression,
  );

  if (!objectOptions) return;

  const offFunctionProperty = objectOptions.getProperty('off');
  const onFunctionProperty = objectOptions.getProperty('on');
  const featureNameProperty = objectOptions.getProperty('featureName');

  const onFunction = onFunctionProperty
    ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
    ?.getBody()
    .getText();

  const offFunction = offFunctionProperty
    ?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
    ?.getBody()
    .getText();

  const featureName = featureNameProperty
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralText();

  if (featureName !== removedFeatureName) return;

  if (featureState === 'on') {
    node.replaceWithText(onFunction ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFunction ?? '');
  }
}

export { isToggleFeature, replaceToggleFeature };

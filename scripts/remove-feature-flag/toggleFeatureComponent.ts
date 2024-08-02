import {
  JsxSelfClosingElement,
  Node,
  SyntaxKind,
  JsxAttribute,
} from 'ts-morph';

const removedFeatureName = process.argv[2];
const featureState = process.argv[3];

const toggleFeatureComponentName = 'ToggleFeatureComponent';

function isToggleFeatureComponent(node: Node): boolean {
  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleFeatureComponentName;
}

function replaceToggleFeatureComponent(node: JsxSelfClosingElement): void {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const offAttribute = getAttributeNodeByName(attributes, 'off');
  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const featureNameAttribute = getAttributeNodeByName(
    attributes,
    'featureName',
  );

  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getLiteralText();

  if (featureName !== removedFeatureName) return;

  const offValue = getReplacedComponent(offAttribute);
  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
}

function getAttributeNodeByName(
  jsxAttributes: JsxAttribute[],
  name: string,
): JsxAttribute | undefined {
  return jsxAttributes.find((node) => node.getNameNode().getText() === name);
}

function getReplacedComponent(attribute?: JsxAttribute): string | undefined {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
}

export { isToggleFeatureComponent, replaceToggleFeatureComponent };

export interface NavigationLink {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

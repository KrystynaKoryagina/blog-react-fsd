import { RoutePath } from 'shared/config/routes/routes';

export interface NavigationLink {
  path: RoutePath,
  text: string,
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean
}

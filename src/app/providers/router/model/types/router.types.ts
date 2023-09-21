import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User'; // TODO ?????

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
};

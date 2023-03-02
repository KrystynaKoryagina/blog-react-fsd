import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { Error } from 'widgets/Error';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
    console.log(error);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        // NOTE обернули в Suspense тк в компоненте используются переводы
        <Suspense fallback=''>
          <Error />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

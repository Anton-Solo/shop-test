import React, { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Щось пішло не так.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

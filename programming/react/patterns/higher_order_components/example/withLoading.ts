interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props  } = this.props as WithLoadingProps;
      return loading ? <LoadingSpinner /> : <Component {...props} />
    }
  };


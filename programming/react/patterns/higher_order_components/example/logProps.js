function logProps(WrapperComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props:', this.props);
      consoole.log('Next props', nextProps);
    }

    render() {
      // Wraps the input component in a container, without mutating, it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}


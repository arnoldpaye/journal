class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPost = DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}

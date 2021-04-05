constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: []
  };
}

componentDidMount() {
  fetch("https://api.open.fec.gov/v1/legal/search/?api_key=ZVb0NaNazaeqIe7kkk9HrTchN2KQy6SS2zmq2IJ9")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      console.log(items);
      // <ul>
      //   {items.map(item => (
      //     <li key={item.id}>
      //       {item.name} {item.price}
      //     </li>
      //   ))}
      // </ul>
    );
  }
}
}

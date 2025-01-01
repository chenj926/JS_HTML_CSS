function DessertsList(props) {
    // Implement the component here.

    const lowCalorieDesserts = props.data.filter((dessert) => dessert.calories < 500);

    const sortedDesserts = lowCalorieDesserts.sort((a, b) => a.calories - b.calories);

    const dessertItems = sortedDesserts.map(dessert => (
        <li key={dessert.name}>{`${dessert.name} - ${dessert.calories} cal`}</li>
    ));

    return (
        <ul>{dessertItems}</ul>
    );
    // return null;
  }
  
  export default DessertsList;
  
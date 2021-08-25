import React from "react";


export default function AddProduct(props) {
  const [price, setPrice] = React.useState(0);
  const [name, setName] = React.useState("");
  const [categoryId, setCategoryId] = 
      React.useState(props.categories[0]?props.categories[0].id:"");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProduct({ name, price, categoryId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <p>
          <select value={categoryId} onChange={(e) => 
            {var categoryId = e.target.value; 
              console.log(categoryId);
             setCategoryId(categoryId)}}>
            {props.categories.map((c) =>(
                <option value={c.id}>{c.name}</option>))}
          </select>
          </p>
      </div>
      <div>
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Добавить" />
      </div>
    </form>
  );
}

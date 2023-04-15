import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";

const ProductTable = () => {
  const [name, setName] = useState();
  const { products, setProduct, setIsEdit } = useContext(ProductContext);

  const handleEdit = (product, i) => {
    setProduct({ ...product, index: i });
    setIsEdit(true);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <p className="text-xl">Products</p>
        <div className="w-3/5 form-group mb-10">
          <input
            value={name}
            className="px-5 border border-black"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for keywords"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products
            ?.filter((product) =>
              name
                ? product?.name?.toLowerCase().match(name?.toLowerCase())
                : product
            )
            ?.map((product, i) => (
              <tr key={i}>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <td>
                  <button
                    onClick={() => handleEdit(product, i)}
                    className="btn btn-primary me-3 py-2"
                  >
                    Edit
                  </button>
                  <button className="btn btn-secondary py-2">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

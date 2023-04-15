import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";

const ProductForm = () => {
  const [formValues, setFormValues] = useState({});

  const { product, isEdit, setProducts, products, setIsEdit, setProduct } =
    useContext(ProductContext);

  useEffect(() => {
    setFormValues(product);
  }, [product]);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues?.name && formValues?.price) {
      if (isEdit) {
        const newProducts = [...products];
        newProducts[formValues?.index] = {
          name: formValues?.name,
          price: formValues?.price,
        };
        setProducts(newProducts);
        setProduct({});
        setIsEdit(false);
        setFormValues({ name: "", price: "" });
        return;
      }

      setProducts((prev) => [
        ...prev,
        { name: formValues?.name, price: formValues?.price },
      ]);
      setFormValues({ name: "", price: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center mb-10">
        <p className="font-bold text-xl">Header Text</p>
        <p className="text-center text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          cupiditate amet consequatur minus, enim vitae temporibus similique
        </p>
      </div>
      <div className="form-group mb-10">
        <input
          value={formValues?.name}
          className="px-5"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div className="form-group mb-10">
        <input
          value={formValues?.price}
          className="px-5"
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          onWheel={(e) => e.currentTarget.blur()}
          step="any"
        />
      </div>
      <button type="submit" className="btn btn-primary w-full">
        {isEdit ? "Save" : "Create"}
      </button>
    </form>
  );
};

export default ProductForm;

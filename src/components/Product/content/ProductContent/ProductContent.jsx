import { useMemo, useState } from "react";
import { ProductContext } from "../../context";
import ProductForm from "../../forms/ProductForm/ProductForm";
import ProductTable from "../../table/ProductTable/ProductTable";

const ProductContent = () => {
  const [products, setProducts] = useState([{ name: "Ball", price: 2000 }]);
  const [product, setProduct] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      isEdit,
      setIsEdit,
      product,
      setProduct,
    }),
    [product, products, isEdit]
  );

  return (
    <div className="mt-2">
      <div className="content-row grid grid-cols-2 mb-48 gap-[100px]">
        <ProductContext.Provider value={value}>
          <div className="col-span-1">
            <ProductTable />
          </div>
          <div className="col-span-1 bg-gray p-10">
            <ProductForm />
          </div>
        </ProductContext.Provider>
      </div>
      <div className="content-row grid grid-cols-7 gap-[50px] bg-gray pb-24">
        <div className="col-span-3">
          <div className="image-1 h-[500px] w-full -mt-24"></div>
        </div>
        <div className="col-span-4">
          <div className="flex h-full flex-col justify-center w-2/3">
            <h1 className="text-5xl font-bold mb-4">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="text-primary mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              sapiente at molestias nostrum totam! Explicabo quaerat expedita
              vitae enim necessitatibus
            </p>
            <div className="mb-12">
              <button className="btn btn-primary me-3">Call to Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;

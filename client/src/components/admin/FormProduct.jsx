import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { createProduct, deleteProduct } from "../../api/product";
import { toast } from "react-toastify";
import Uploadfile from "./Uploadfile";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const FormProduct = () => {
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  // console.log(products);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    categoryId: "",
    images: [],
  });

  useEffect(() => {
    // code
    getCategory(token);
    getProduct(token, 100);
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      console.log(res);
      setForm(initialState);
      getProduct(token);
      toast.success(`เพิ่มข้อมูล ${res.data.title} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        // code
        const res = await deleteProduct(token, id);
        console.log(res);
        toast.success("Deleted สินค้าเรียบร้อยแล้ว");
        getProduct(token);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      <form onSubmit={handleSubmit}>
        <h1>เพิ่มข้อมูลสินค้า</h1>
        <input
          className="border"
          value={form.title}
          onChange={handleOnChange}
          placeholder="Title"
          name="title"
        />
        <input
          className="border"
          value={form.description}
          onChange={handleOnChange}
          placeholder="Description"
          name="description"
        />
        <input
          type="number"
          className="border"
          value={form.price}
          onChange={handleOnChange}
          placeholder="Price"
          name="price"
        />
        <input
          type="number"
          className="border"
          value={form.quantity}
          onChange={handleOnChange}
          placeholder="Quantity"
          name="quantity"
        />
        <select
          className="border"
          name="categoryId"
          onChange={handleOnChange}
          required
          value={form.categoryId}
        >
          <option value="" disabled>
            Please Select
          </option>
          {categories.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <hr />
        {/* Upload file */}
        <Uploadfile form={form} setForm={setForm} />

        <button className="bg-blue-500 p-2 rounded-md shadow-md hover:scale-105 hover:-translate-y-1 hover:duration-200">
          เพิ่มสินค้า
        </button>
        <hr />
        <br />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-gray-900 dark:text-slate-950">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  รูปภาพ
                </th>
                <th scope="col" className="px-6 py-3">
                  ชื่อสินค้า
                </th>
                <th scope="col" className="px-6 py-3">
                  รายละเอียด
                </th>
                <th scope="col" className="px-6 py-3">
                  ราคา
                </th>
                <th scope="col" className="px-6 py-3">
                  จำนวน
                </th>
                <th scope="col" className="px-6 py-3">
                  จำนวนที่ขายได้
                </th>
                <th scope="col" className="px-6 py-3">
                  วันที่อัปเดต
                </th>
                <th scope="col" className="px-6 py-3">
                  จัดการ
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                // console.log(item);
                return (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-slate-950"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {item.images.length > 0 ? (
                        <img
                          className="w-24 h-24 rounded-lg shadow-md"
                          src={item.images[0].url}
                        />
                      ) : (
                        <div
                          className="w-24 h-24 bg-slate-200 rounded-md 
                      flex items-center justify-center shadow-sm"
                        >
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.sold}</td>
                    <td className="px-6 py-4">{item.updatedAt}</td>
                    <td className="flex gap-4 mt-10 gap-x-5 gap-y-5">
                      <p className="font-medium text-blue-600 rounded-md p-2 dark:text-blue-500 hover:underline hover:scale-105 hover:-translate-y-1 hover:duration-200 shadow-md">
                        <Link to={"/admin/product/" + item.id}>
                          {" "}
                          <Pencil />{" "}
                        </Link>
                      </p>
                      <p
                        className="font-medium text-blue-600 rounded-md p-2 dark:text-blue-500 hover:underline hover:scale-105 hover:-translate-y-1 hover:duration-200 shadow-md"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash />
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;

import "./newProduct.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewProduct(props) {
  const { addProductRequest, brandList } = props;
  const [imgSrc, setImgSrc] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    price: "",
    tag: "",
    brandId: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const resetData = () => {
    setProductData({
      name: "",
      desc: "",
      price: "",
      tag: "Men",
      brandId: "",
    });
    setImgSrc([]);
    setSelectedFile([]);
    document.getElementById("file").value = null;
  };

  const changeValue = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidation = () => {
    const { name, desc, price, tag, brandId } = productData;
    if (!name || !desc || !price || !selectedFile || !tag || !brandId) {
      toast.error("Không được bỏ trống ô nào cả nha!", toastOptions);
      return false;
    } else if (!selectedFile) {
      toast.error("Chưa có ảnh", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { name, desc, price, tag, brandId } = productData;
      const filesArray = selectedFile;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", desc);
      formData.append("tag", tag);
      formData.append("brandId", brandId);
      for (let i = 0; i < filesArray.length; i++) {
        formData.append("file", filesArray[i]);
      }
      formData.append("file", filesArray);
      addProductRequest(formData);
      resetData();
    }
  };

  const handleChangeFile = (selectFile) => {
    setSelectedFile(selectFile);
    const imgArr = [];
    for (let i = 0; i < selectFile.length; i++) {
      const file = selectFile[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        imgArr.push(reader.result);
        setImgSrc(imgArr);
      };
    }
  };

  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <div className="imgContainer">
              {imgSrc.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  height="100"
                  width="100"
                  alt={"upload"}
                />
              ))}
            </div>
            <input
              type="file"
              id="file"
              multiple
              onChange={(e) => handleChangeFile(e.target.files)}
            />
          </div>
          <div className="addProductItem">
            <label>Name</label>
            <input
              value={productData.name}
              type="text"
              name="name"
              placeholder="Product..."
              onChange={changeValue}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              type="text"
              name="desc"
              value={productData.desc}
              placeholder="Lorem..."
              onChange={changeValue}
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              type="number"
              name="price"
              placeholder="..."
              value={productData.price}
              onChange={changeValue}
            />
          </div>
          <div className="addProductItem">
            <label>Brand</label>
            <select
              value={productData.brandId}
              name="brandId"
              id="brand"
              onChange={changeValue}
            >
              <option value="">Select</option>
              {brandList.map((brand, index) => (
                <option key={index} value={brand.brandId}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div className="addProductItem">
            <label>Tag</label>
            <select
              value={productData.tag}
              name="tag"
              id="tag"
              onChange={changeValue}
            >
              <option value="">Tag</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>
            Tạo
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

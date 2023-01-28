import "./newProduct.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewProduct(props) {
  const { addProductRequest } = props;
  const [imgSrc, setImgSrc] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    price: "",
    tag: "Men",
    brand: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const changeValue = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidation = () => {
    const { name, desc, price, tag, brand } = productData;
    if (!name || !desc || !price || !selectedFile || !tag || !brand) {
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
      const { name, desc, price, tag, brand } = productData;
      const filesArray = selectedFile;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", desc);
      formData.append("tag", tag);
      formData.append("brand", brand);
      for (let i = 0; i < filesArray.length; i++) {
        formData.append("images", filesArray[i]);
      }
      addProductRequest(formData);
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
              type="text"
              name="name"
              value={productData.name}
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
            <label>Tag</label>
            <select name="brand" id="brand" onChange={changeValue}>
              <option value="">Brand</option>
              <option value="Nike">Nike</option>
              <option value="Jordan">Jordan</option>
              <option value="Adidas">Adidas</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Tag</label>
            <select name="tag" id="tag" onChange={changeValue}>
              <option value="Men">Tag</option>
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

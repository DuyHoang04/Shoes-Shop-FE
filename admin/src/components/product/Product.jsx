import { useState } from "react";
import "./product.css";
import { Publish } from "@mui/icons-material";
import { getHostName } from "../../util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product(props) {
  const { data, brandList, updateProductRequest, productId } = props;
  console.log(data);
  const [imgSrc, setImgSrc] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    desc: "",
    price: "",
    tag: "",
    brandId: "",
    status: "",
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
      tag: "",
      brandId: "",
      status: "",
    });
    setImgSrc([]);
    setSelectedFile([]);
    document.getElementById("file").value = null;
  };

  const changeValue = (e) => {
    setProductData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidation = () => {
    const { name, desc, price, tag, brandId, status } = productData;
    if (
      !name ||
      !desc ||
      !price ||
      !selectedFile ||
      !tag ||
      !brandId ||
      !status
    ) {
      toast.error("Không được bỏ trống ô nào", toastOptions);
      return false;
    } else if (!selectedFile) {
      toast.error("Chưa có ảnh", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  const handleSubmitUpdate = async (e) => {
    console.log("VO");
    e.preventDefault();
    if (handleValidation()) {
      const { name, desc, price, tag, brandId, status } = productData;
      const filesArray = selectedFile;
      const formDataProduct = new FormData();
      formDataProduct.append("name", name);
      formDataProduct.append("price", price);
      formDataProduct.append("description", desc);
      formDataProduct.append("tag", tag);
      formDataProduct.append("brandId", brandId);
      formDataProduct.append("status", status);
      for (let i = 0; i < filesArray.length; i++) {
        formDataProduct.append("file", filesArray[i]);
      }
      formDataProduct.append("file", filesArray);
      updateProductRequest({ formDataProduct, productId });
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
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={`${getHostName()}/images/${data.image[0].name}`}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{data.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{data.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Brand:</span>
              <span className="productInfoValue">{data.brand}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Tag:</span>
              <span className="productInfoValue">{data.tag}</span>
            </div>
            <div className="productInfoItem decs">
              <span className="productInfoKey">Description:</span>
              <span className="productInfoValue">{data.description}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Status</span>
              <span className="productInfoValue">{data.status}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              value={productData.name}
              name="name"
              type="text"
              placeholder={data.name}
              onChange={changeValue}
            />
            <label>Description</label>
            <input
              value={productData.desc}
              name="desc"
              type="text"
              placeholder={data.description}
              onChange={changeValue}
            />
            <label>Price</label>
            <input
              value={productData.price}
              name="price"
              type="number"
              placeholder={data.price}
              onChange={changeValue}
            />
            <label>Brand</label>

            <select
              value={productData.brandId}
              name="brandId"
              onChange={changeValue}
            >
              <option value="">Select</option>
              {brandList.map((brand, index) => (
                <option key={index} value={brand.brandId}>
                  {brand.name}
                </option>
              ))}
            </select>
            <label>Tag</label>
            <select value={productData.tag} name="tag" onChange={changeValue}>
              <option value="">Select</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
            <label>Status</label>
            <select
              value={productData.status}
              name="status"
              onChange={changeValue}
            >
              <option value="">Select</option>
              <option value="Còn Hàng">Còn Hàng</option>
              <option value="Hết Hàng">Hết Hàng</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {imgSrc && imgSrc.length > 0 ? (
                <>
                  <div className="imageList">
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
                </>
              ) : (
                <>
                  <div className="imageList">
                    {data.image.map((img, index) => (
                      <img
                        key={index}
                        src={`${getHostName()}/images/${img.name}`}
                        height="100"
                        width="100"
                        alt={"upload"}
                      />
                    ))}
                  </div>
                </>
              )}
              <label for="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => handleChangeFile(e.target.files)}
              />
            </div>
            <button className="productButton" onClick={handleSubmitUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

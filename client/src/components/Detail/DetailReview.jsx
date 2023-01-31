import React, { useState } from "react";
import { detailTabs } from "../../myData";
import { Rating } from "@mui/material";
import { format } from "timeago.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DetailReview = (props) => {
  const { data, addCommentRequest, userToken, userId } = props;
  const [indexTab, setIndexTab] = useState(0);
  const [changeContent, setChangeContent] = useState(false);
  const [newComment, setNewComment] = useState({
    username: null,
    rating: null,
    comment: null,
    userId,
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  console.log(newComment);

  const handleChange = (index, title) => {
    setIndexTab(index);
    title === "Description" ? setChangeContent(false) : setChangeContent(true);
  };

  const changeValue = (e) => {
    setNewComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { username, rating, comment, userId } = newComment;
    if (!username || !rating || !comment || !userId) {
      toast.error("Đừng để trống ô nào", toastOptions);
    } else {
      addCommentRequest({ idProduct: data._id, newComment, userToken });
    }
  };

  return (
    <>
      <div className="detailTabs">
        <div className="detailTabs_nav">
          {detailTabs.map((item, index) => (
            <div
              className={`detailTabs_nav-item ${
                indexTab === index ? "active" : ""
              } `}
              onClick={(e) => handleChange(index, item)}
            >
              {item}
            </div>
          ))}
        </div>
        {!changeContent ? (
          <div className="detailTabs_decs">{data?.description}</div>
        ) : (
          <div className="detailTabs_review">
            {/* CMT */}
            {data?.reviews.length > 0 ? (
              <div className="detailTabs_reviewCmtContainer">
                {data?.reviews?.map((item, index) => (
                  <div className="detailTabs_reviewCmt">
                    <div className="detailTabs_reviewCmt-name">
                      {item?.name}
                    </div>
                    <div className="detailTabs_reviewCmt-rating">
                      <Rating
                        name="half-rating-read"
                        defaultValue={item?.rating}
                        readOnly
                      />
                    </div>
                    <div className="detailTabs_reviewCmt-time">
                      {format(item?.createdAt)}
                    </div>
                    <div className="detailTabs_reviewCmt-decs">
                      <p>{item?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h1 className="empty">Empty</h1>
            )}

            {/* CREATE CMT */}
            <div className="detailTabs_reviewCreate">
              <div className="detailTabs_reviewCreate-title">
                <p>WRITE A CUSTOMER REVIEW</p>
              </div>
              <div className="detailTabs_reviewCreate-rating">
                <div className="detailTabs_reviewCreate-decs">
                  <h1>Name</h1>
                  <input name="username" type="text" onChange={changeValue} />
                </div>
                <h1>Rating</h1>
                <select name="rating" onChange={changeValue}>
                  <option value="">Select...</option>
                  <option value="1">1-Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="detailTabs_reviewCreate-decs">
                <h1>Comment</h1>
                <textarea name="comment" onChange={changeValue}></textarea>
              </div>
              {userId ? (
                <div className="detailTabs_reviewCreate-btn">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              ) : (
                <h1>Login, PLEASE</h1>
              )}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

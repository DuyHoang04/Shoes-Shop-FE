import Product from "../model/Product.js";

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 byte";
  }
  const dm = decimal || 2;
  const size = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + size[index];
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, tag, description, brand } = req.body;
    let imgArray = [];
    req.files.forEach((item) => {
      const file = {
        fileName: item.originalname,
        filePath: item.path,
        fileType: item.mimetype,
        fileSize: fileSizeFormatter(item.size, 2),
      };
      console.log(file);
      imgArray.push(file);
    });
    console.log(brand);
    const newProduct = Product.create({
      name,
      description,
      brand,
      price,
      tag,
      image: imgArray,
    });
    console.log(newProduct);
    // const saveProduct = await product.save();
    res.status(200).json("Thanh cong");
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).send("DELETE THANH CONG");
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateProduct);
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findById(id);
    res.status(200).json(getProduct);
  } catch (err) {
    next(err);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const queryNew = req.query.new;
    const queryRandom = req.query.random;
    let totalProducts = await Product.countDocuments();
    const page = +req.query.page - 1 || 0;
    const tag = req.query.tag || "";
    const brand = req.query.brand || "";
    const limit = +req.query.limit || 5;
    const lowPrice = req.query.low || "";
    const highPrice = req.query.high || "";
    const activePage = page + 1;
    let queryName = req.query.q;
    // console.log(tag, brand, lowPrice, highPrice);

    console.log(activePage, queryName);

    let products;
    // NEW PRODUCTS
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(8);
      res.status(200).json(products);
    }
    // RANDOM PRODUCTS
    if (queryRandom) {
      products = await Product.aggregate([{ $sample: { size: 4 } }]);
      res.status(200).json(products);
    }

    //SEARCH PRODUCT
    if (activePage && queryName && limit) {
      queryName = queryName[0].toUpperCase() + queryName.slice(1);
      const totalRecord = await Product.find({
        $or: [{ name: { $regex: queryName } }],
      }).countDocuments();
      console.log("Vao day ne");
      const totalPage = Math.ceil(totalRecord / limit);
      const startIndex = (activePage - 1) * limit;
      const endIndex = activePage * limit;

      const productList = {};
      productList.totalProduct = totalRecord;
      productList.totalPage = totalPage;
      productList.activePage = activePage;

      productList.products = await Product.find({
        $or: [{ name: { $regex: queryName } }],
      })
        .limit(limit)
        .skip(startIndex)
        .exec();

      return res.status(200).json(productList);
    }

    // GET AND FILTER
    if (tag && brand && lowPrice && highPrice) {
      console.log("1");
      totalProducts = await Product.countDocuments({ tag, brand });
      products = await Product.find({ tag, brand })
        .where("price")
        .gte(+lowPrice)
        .lte(+highPrice)
        .skip(page * limit)
        .limit(limit);
      res.status(200).json({
        activePage,
        totalPage: Math.ceil(+(totalProducts / limit)),
        products,
      });
    } else {
      if (tag && lowPrice && highPrice) {
        console.log("2");
        totalProducts = await Product.countDocuments({ tag });
        products = await Product.find({ tag })
          .where("price")
          .gte(+lowPrice)
          .lte(+highPrice)
          .skip(page * limit)
          .limit(limit);
        res.status(200).json({
          activePage,
          totalPage: Math.ceil(+(totalProducts / limit)),
          products,
        });
      } else {
        if (tag && brand) {
          console.log("3");
          totalProducts = await Product.countDocuments({ tag, brand });
          products = await Product.find({ tag, brand })
            .skip(page * limit)
            .limit(limit)
            .exec();
          res.status(200).json({
            activePage,
            totalPage: Math.ceil(+(totalProducts / limit)),
            products,
          });
        } else {
          if (tag) {
            console.log("4");
            totalProducts = await Product.countDocuments({ tag });
            products = await Product.find({ tag })
              .skip(page * limit)
              .limit(limit)
              .exec();
            console.log(totalProducts);
            res.status(200).json({
              activePage,
              totalPage: Math.ceil(+(totalProducts / limit)),
              products,
            });
          } else {
            products = await Product.find();
            res.status(200).json(products);
          }
        }
      }
    }
  } catch (err) {
    next(err);
  }
};

export const reviewProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, rating, comment, userId } = req.body;
    const product = await Product.findById(id);

    if (product) {
      // const alreadyReview = product.reviews.find(
      //   (review) => review.user.toString() === req.user._id.toString()
      // );
      // if (alreadyReview) {
      //   res.status(400).json("Loi");
      // }
      console.log(req.user);
      const review = {
        name: username,
        rating: Number(rating),
        comment,
        user: userId,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => acc + item.rating, 0) /
        product.reviews.length;
    }

    await product.save();
    res.status(200).json({ error: false, msg: "Comment Success" });
  } catch (err) {
    next(err);
  }
};

const db = require("../models");
const slugify = require("slugify");
let postServices = {
  createSlug: async (title) => {
    let slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    let randomString = crypto.randomBytes(4).toString("hex");
    let fullSlug = `${randomString}-${slug}`;

    // Kiểm tra xem slug đã tồn tại chưa
    let existingProduct = await db.Tour.findOne({
      where: { slug: fullSlug },
    });
    while (existingProduct) {
      // Nếu slug đã tồn tại, tiếp tục tạo slug mới và kiểm tra lại
      randomString = crypto.randomBytes(4).toString("hex");
      fullSlug = `${slug}-${randomString}`;
      existingProduct = await db.Tour.findOne({
        where: { slug: fullSlug },
      });
    }
    return fullSlug;
  },
  getAllPostService: async () => {
    try {
      const posts = await db.Post.findAll();
      return { posts: posts, message: "Get all posts successfully" };
    } catch (e) {
      throw e;
    }
  },
  getPostByIdService: async (id) => {
    try {
      const post = await db.Post.findOne({
        where: { id: id },
      });
      return { post: post, message: "Get post by id successfully" };
    } catch (e) {
      throw e;
    }
  },
  updatePostService: async (data, id) => {
    try {
      let post = await db.Post.findByPk(id);
      if (!post) {
        throw { message: "Post not found" };
      }
      const { slug, ...other } = data;
      // console.log(data);
      post.update(
        {
          ...other,
        },
        { where: { id: id } }
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  createPostService: async (post) => {
    try {
      const { title, content, image } = post;
      if ((!title || !content, image)) {
        throw { statusCode: 400, message: "Title and content are required" };
      }
      let slug = await postServices.createSlug(title);
      const newPost = await db.Post.create({
        title: title,
        content: content,
        author: post?.author || "Anonymous",
        category: post?.category || "Other",
        trending: post?.trending || false,
        image: post?.image || null,
        slug: slug,
      });
      return { post: newPost, message: "Create post successfully" };
    } catch (e) {
      throw e;
    }
  },
};

module.exports = postServices;

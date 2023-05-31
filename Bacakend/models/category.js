const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        title: {
            type: string,
            required: true,
        },
        slug: {
            type: string,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);


const Category = mongoose.model("Category", categorySchema)

exports.module.Category = Category;

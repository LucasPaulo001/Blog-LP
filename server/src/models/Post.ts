import mongoose, { model, Schema, Document, Types } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    author: Types.ObjectId;
    slug: string;
    tags: string[];
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: [String],
        default: []
    },
    published: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export const Post = model<IPost>("Post", PostSchema);


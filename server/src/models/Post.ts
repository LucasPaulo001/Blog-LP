import mongoose, { model, Schema, Document, Types } from "mongoose";

export interface IPost extends Document {
    title: string;
    banner: string;
    content: string;
    author: Types.ObjectId;
    slug: string;
    utilsLinks: URL[];
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
    banner: {
        type: String
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
    utilsLinks: {
        type: [String],
        default: []
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


import { model, Schema, Document } from "mongoose";

export interface IPost extends Document {
    title: string;
    content: string;
    slug: string;
    tags: string[];
    published: boolean;
    createdAt: Date;
    updated: Date;
}

const PostSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
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


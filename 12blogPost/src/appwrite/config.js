import conf from "../conf/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite";

class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, content, userId, slug, featuredImage, status }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }
  async updatePost(slug, { title, content, userId, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          userId,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      );
      return true; //we could returned whole deleted info but that info is not imp so just need to confirm that particular post is deleted
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false; //if not deleted successfully
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
    }
  }
  //upload file service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
    }
  }
  getFileView(fileId) {
    try {
      const file = this.bucket.getFileView(conf.appwriteBucketID, fileId);
      console.log("filePreview", file);
      return file;
    } catch (error) {
      console.log("Appwrite service :: getFileView :: error", error);
    }
  }
}

const service = new Service();

export default service;

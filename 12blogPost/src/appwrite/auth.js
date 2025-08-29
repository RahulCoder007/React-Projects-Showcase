import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
    console.log("authjs", this.account);
  }
  async createAccount({ email, password, name }) {
    //account creation can be failed so try/catch to handle failure
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("userAccount::creatAccount", userAccount);
      if (userAccount) {
        //route to login
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount :: error", error);
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
      // console.log("user::getCurrentUser()::auth", user);
      // return user;
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService; //exporting obj instead of class so that there is no need to make obj again and again. Instead directly usee all the services

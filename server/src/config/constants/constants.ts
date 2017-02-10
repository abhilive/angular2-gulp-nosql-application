/**
 * Modified by Abhishek.Srivastava on 05-12-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/projectmanagement"
}
Object.seal(Constants);
export = Constants;
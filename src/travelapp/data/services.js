import axios from "axios";
import { baseURL } from "./data";
export const API_URL = baseURL;

class AuthService {
  login(data) {
    console.log(data);
    return axios.postForm(API_URL + "/auth/login/", data);
  }

  addPackage(data) {
    // axios.defaults.headers.common = null;
    // console.log(JSON.stringify(axios.defaults.headers.common))
    return axios.post(API_URL + "/api/packageadmin/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  getPackage() {
    return axios.get(API_URL + "/api/packageadmin/");
  }

  
  getOnePackage({queryKey}) {
    const [_,pkid] = queryKey;
    return axios.get(API_URL + "/api/package/",{
      params:{
        pkid:pkid,
      }
    });
  }

  putPackage(data) {
    return axios.put(API_URL + "/api/packageadmin/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  putPackageDescription(data) {
    return axios.put(API_URL + "/api/packagedescription/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  deletePackage(data) {
    return axios.delete(API_URL + "/api/packageadmin/", {
      params: data,
    });
  }

  getIncludePlace({ queryKey }) {
    const [_, packageid] = queryKey;

    return axios.get(API_URL + "/api/includeplaces/", {
      headers: {
        params: {
          packageid,
        },
      },
    });
  }

  postFeedBack(data){
    return axios.post(API_URL + "/api/feedbacks/",data);
  }

  postIncludePlace(data) {
    return axios.post(API_URL + "/api/includeplaces/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  deleteIncludePlace(data) {
    return axios.delete(API_URL + "/api/includeplaces/", {
      params: {
        includeplaceid: data.id,
      },
    });
  }

  getTraveler({ queryKey }) {
    const [_, travelerid] = queryKey;
    if(travelerid !== 0){
    return axios.get(API_URL + "/api/traveler/", {
      params: {
        travelerid: travelerid,
      },
    });
  }
  }

  getBookings({ queryKey }) {
    const [_, type] = queryKey;
    console.log(type,'Bookingss.....')
    return axios.get(API_URL + "/api/adminbooking/", {
      params: {
        type: type,
      },
    });
  } 

  putBooking(data) {
    return axios.put(API_URL + "/api/adminbooking/", data);
  }

  getFeedBack() {
    return axios.get(API_URL + "/api/feedbacks/");
  }

  deleteFeedBack(data) {
    return axios.delete(API_URL + "/api/feedbacks/", {
      params: data,
    });
  }

  getCompanyInfo() {
    return axios.get(API_URL + "/api/companyinfo/");
  }

  postCompanyInfo(data) {
    return axios.post(API_URL + "/api/companyinfo/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  RegisterBooking(data){
    return axios.post(API_URL+"/api/clientbooking/",data);
  }

  getBooked({queryKey}){
    const [_,travelcode] = queryKey;
   
    return axios.get(API_URL+"/api/checkcode/",{
      params:{
        travelcode:JSON.stringify(travelcode),
      }
    })
  }

  deleteBooking(data){
    return axios.delete(API_URL+"/api/adminbooking/",{
      params:{
        bookingid:data.bookingid
      }
    })
  }

  getClientUser({queryKey}){
    const [_,type] = queryKey;

    return axios.get(API_URL+"/api/user/",{
      params:{
        type:type
      }
    })
  }

  editUser(data){
    
    return axios.put(API_URL+"/api/user/",data);
  }

  deleteUser(data){
    
    return axios.delete(API_URL+"/api/user/",{
      params:{
        id:data.id
      }
    });
  }
  resetPassword(data){
    return axios.post(API_URL+"/auth/forgotpassword/",data)
  }

  admin() {
    axios.get(API_URL + "/login").then((res) => console.log(res));
  }

  logout() {
    localStorage.removeItem("user_token");
  }

  register(data) {
    return axios.post(API_URL + "/auth/register/", data);
  }

  changepassword(data){
    return axios.put(API_URL+"/auth/changepassword/",data);
  }

  getCurrentUserToken() {
    return localStorage.getItem("user_token");
  }


}

export default new AuthService();

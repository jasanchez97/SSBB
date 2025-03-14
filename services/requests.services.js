import db from "../firebase";
import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/requests");

const getAllRequests = () => {
  return get(dbRef);
};

const addRequest = (brand, model) => {
  return push(dbRef, {
    brand: brand,
    model: model
  });
};

const removeRequest = (key) => {
  const dbRefRequest = ref(db, `/requests/${key}`);
  return remove(dbRefRequest);
};

export default {
  getAllRequests,
  addRequest,
  removeRequest,
};
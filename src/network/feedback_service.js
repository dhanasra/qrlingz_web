import { addDoc, collection, doc, getDoc} from "firebase/firestore";
import { db } from "./firebase";
import responseHandler from "../utils/response-handler";

export const getFeedbackData = async ({ id }) => {
  
  const docRef = doc(db, "FEEDBACK", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return responseHandler(true, 'Document fetched successfully!', docSnap.data());
  } else {
    return responseHandler(false, 'Document not found', null);
  }
}

export const saveReview = async ({ id, review }) => {
  try{
    
    const docRef = doc(db, "FEEDBACK", id);
    const reviewsRef = collection(docRef, "Reviews"); 
  
    await addDoc(reviewsRef, review);

    return responseHandler(true, 'Review added successfully!');
  }catch(e){
    return responseHandler(false, 'Something went wrong!', null);
  }
}
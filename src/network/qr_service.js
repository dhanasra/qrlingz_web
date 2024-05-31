

import { getDocs, query, collection, where, increment, getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import responseHandler from "../utils/response-handler";

export const getQRCodeData = async ({ linkId }) => {
  
  const condition = query(collection(db, "HISTORY"), where("linkId", "==", linkId));
  const snapshots = await getDocs(condition);

  if(snapshots.docs.length>0){
    const qrdata = snapshots.docs[0].data();
    return responseHandler(true, 'Data fetched successfully !', qrdata);
  }else{
    return responseHandler(false, 'Document not found', null);
  }
}

export const updateScanLimit = async ({ docId }) => {

  const docRef = doc(db, "HISTORY", docId);

  console.log(docRef)

  const docSnap = await getDoc(docRef);

  console.log(docSnap)
  
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      scans: increment(1) 
    });
    
    return responseHandler(true, 'Document updated successfully!');
  } else {
    return responseHandler(false, 'Document not found', null);
  }
}
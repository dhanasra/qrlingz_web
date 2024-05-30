

import { getDocs, query, collection, where } from "firebase/firestore";
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
import firebaseConfigs from "../../firebase_configs";
import dbs from "../../services/firebase_init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OfferViewModel() {
  const getData = async (dbCol, selectedIndex) => {
    let arrayData = [];
    await dbCol
      .get()
      .then((data) => {
        if (!data.empty) {
          arrayData.push({
            id: data.docs[0].id,
            brand: firebaseConfigs[selectedIndex].name,
            ...data.docs[0].data(),
          });
        } else {
          console.log(data);
        }
      });

    return arrayData;
  };

  const updateData = async (updatedData, originalData, setData) => {
    let index = firebaseConfigs.findIndex(
      (item) => item.name === updatedData.brand
    );
    let banner = {
      background_image: updatedData.background_image,
      coupon_code: updatedData.coupon_code,
      offer_details: updatedData.offer_details,
      offer_name: updatedData.offer_name,
      offer_placement: updatedData.offer_placement,
      visibility: updatedData.visibility,
    };
    try {
      await dbs[index]
        .collection(firebaseConfigs[index].collection)
        .doc(updatedData.id)
        .update(banner);

      var array = [...originalData]; // make a separate copy of the array
      // find the index of the item to be updated
      var indexOfData = array.findIndex((item) => item.id === updatedData.id);
      console.log("indexOfData: ", indexOfData);
      if (indexOfData !== -1) {
        array[indexOfData] = {
          id: updatedData.id,
          brand: updatedData.brand,
          ...banner,
        };
        setData(array);
        toast.success("Successfully Updated !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.log("Some error occured");
      console.log(error);
    }
  };

  return {
    getData,
    updateData,
  };
}

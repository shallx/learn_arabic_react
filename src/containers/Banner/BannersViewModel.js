import firebaseConfigs from "../../firebase_configs";

export default function BannersViewModel() {
  const getData = async (dbCol, selectedIndex) => {
    let arrayData = [];
    await dbCol.get().then((data) => {
      if (!data.empty) {
        arrayData = data.docs.map((doc) => ({
            id: doc.id,
            brand: firebaseConfigs[selectedIndex].name,
            ...doc.data(),
            }));
      } else {
        console.log(data);
      }
    });

    return arrayData;
  };

  return {
    getData,
  }
}

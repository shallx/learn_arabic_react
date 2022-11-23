import firebaseConfigs from "../../firebase_configs";
import dbs from '../../services/firebase_init'

export default function BannerViewModel() {

  const getData = async () => {
    let arrayData = [];
    let promises = [];
    for(let i = 0; i < firebaseConfigs.length; i++) {
      promises.push(new Promise((resolve, reject) => {
        dbs[i].collection(firebaseConfigs[i].collection).limit(1).get().then(data => {
          if(!data.empty){
            arrayData.push({id:data.docs[0].id, brand:firebaseConfigs[i].name,  ...data.docs[0].data()});
            resolve();
          } else {
            console.log(data);
            reject();
          }
        });
      }));
    }

    await Promise.all(promises);

    return arrayData;
  } 


  return {
    getData,
  };
}

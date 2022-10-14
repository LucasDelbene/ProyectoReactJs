import React from 'react'
import "./ItemDetailContainer.css";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../utils/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

    const [botin, setBotin] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
      async function asyncProblem(){
        try {
          const docRef = doc(db, "productos", idItem);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setBotin({
              id: idItem,
              ...docSnap.data(),
            });     
          } else {
            console.log("NO HAY DOCUMENTO!")
          }
        } catch (error) {
          console.log(error)
        }
      }
      asyncProblem();
    }, [idItem]);

    return(
      <>
        <ItemDetail item={botin} />
      </>
    );
}

export default ItemDetailContainer;


//CODIGO ItemDetailContainer CON FIREBASE.
/*
import React from 'react'
import "./ItemDetailContainer.css";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../utils/firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

    const [botin, setBotin] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
      async function asyncProblem(){
        try {
          const docRef = doc(db, "productos", "SF");
          const docSnap = await getDoc(docRef);
    
          if(docSnap.exists()){
            return{
              id: idItem,
              ...docSnap.data()
            }
          } else{
            console.log("NO SUCH DOCUMENT!");
          }
        } catch (error) {
          console.error(error)
        }
        setBotin(idItem)
      };
      asyncProblem();
    }, [idItem]);

    return(
      <>
        <ItemDetail item={botin} />
      </>
    );
}

export default ItemDetailContainer;
*/



//CODIGO ItemDetailContainer SIN FIREBASE.
/*
import React from 'react'
import "./ItemDetailContainer.css";
import ItemDetail from '../ItemDetail/ItemDetail';
import promise from '../../utils/promise';
import productos from '../../utils/productos';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

    const [botin, setBotin] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
      promise(200, productos.find(item => item.id === parseInt(idItem)))
        
      .then((result) => {setBotin(result);})
      .catch((error) => console.log(error));
    }, [idItem]);

    return(
      <>
        <ItemDetail item={botin} />
      </>
    );
}

export default ItemDetailContainer;
*/


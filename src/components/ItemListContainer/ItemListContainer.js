import React from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebaseConfig'
import { collection, getDocs} from "firebase/firestore";

function ItemListContainer() {
  const [botines, setBotines] = useState([])
  const {idCategory} = useParams();

  useEffect(() => {
    async function asyncProblem() {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setBotines(dataFromFirestore)

        if (idCategory) {
          setBotines(
            dataFromFirestore.filter((botin) => botin.categoryId === idCategory)
          );
        } else {
          setBotines(dataFromFirestore);
        }
      } catch (error) {
        console.error(error) 
      }
    };
    asyncProblem();
  }, [idCategory])

  return( 
    <>
    <ItemList items={botines} />
    </>
  );
}

export default ItemListContainer;


//CODIGO ItemListContainer CON FIREBASE.
/*
import React from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../utils/firebaseConfig'
import { collection, getDocs} from "firebase/firestore";

function ItemListContainer() {
  const [botines, setBotines] = useState([])
  const {idCategory} = useParams();

  useEffect(() => {
    async function asyncProblem() {
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setBotines(dataFromFirestore)
      } catch (error) {
        console.error(error) 
      }
    };
    asyncProblem();
  }, [idCategory])

  return( 
    <>
    <ItemList items={botines} />
    </>
  );
}

export default ItemListContainer;

*/


//CODIGO ItemListContainer SIN FIREBASE.
/*
import React from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import promise from '../../utils/promise';
import productos from '../../utils/productos';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [botines, setBotines] = useState([])
  const {idCategory} = useParams();

  useEffect(() => {
    if (idCategory){
      promise(200, productos.filter(item => item.categoryId === idCategory))
        .then(result => setBotines(result))
        .catch(err => console.log(err))
    } else{
      promise(0, productos)
       .then(result => setBotines(result))
       .catch(err => console.log(err))
    }
  }, [idCategory])

  return( 
    <>
    <ItemList items={botines} />
    </>
  );
}

export default ItemListContainer;
*/





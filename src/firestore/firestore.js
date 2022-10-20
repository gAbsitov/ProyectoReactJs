import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "coder-react-15f48.firebaseapp.com",
  projectId: "coder-react-15f48",
  storageBucket: "coder-react-15f48.appspot.com",
  messagingSenderId: "691546924996",
  appId: "1:691546924996:web:6fd8b7e5a2502ca08de691",
  measurementId: "G-RGVJPYSEEY"
};

export async function cargarBaseDeDatos  () {
  const promise = await fetch('./json/Books.json')
  const productos = await promise.json()
  productos.forEach(async (producto) => {
      await addDoc(collection(db, "Books"), {
          name: producto.name,
          autor: producto.autor,
          genre: producto.genre,
          editorial: producto.editorial,
          price: producto.price,
          stock: producto.stock,
          synopsis: producto.synopsis,
          img: producto.img
        });
  })
  
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
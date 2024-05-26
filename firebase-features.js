import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


let ediney = { nome: "Ediney" };

let aluGabriel = {
  nome: "Gabriel",
  idade: "17 anos",
  datanasc: "15/06/2006",
  ra: "23117"
};
let aluRibamara = {
  nome: "Ribamara",
  idade: "33 anos",
  datanasc: "15/03/1991",
  ra: "26519"
};

let curso1 = {
  nome: "DS",
  coordenador: "Ediney",
  alunos: { aluGabriel, aluRibamara }
};

let fbAddDocCbFn = (docRef) => {
  console.log("Document written with ID: ", docRef.id);
}

let fbAddDoc = async (fbDb, jsObj, strCollectionName, fbAddDocCbFn) => {
  try {
    const docRef = await addDoc(collection(fbDb, strCollectionName), jsObj);
    fbAddDocCbFn(docRef);
  } catch (error) {
    console.log("Erro ao adicionar documento", error);
  }
}

fbAddDoc(fbDb, ediney, "professores", fbAddDocCbFn);
fbAddDoc(fbDb, aluGabriel, "alunos", fbAddDocCbFn);
fbAddDoc(fbDb, curso1, "cursos", fbAddDocCbFn);

let fbListDocsCbFn = (doc) => {
  console.log("Document ID:", doc.id);
  console.log("Document data:", doc.data());
}

// Função para listar documentos de uma coleção
let fbListDocs = async (fbDb, collectionName, fbListDocsCbFn) => {
  const querySnapshot = await getDocs(collection(fbDb, collectionName));
  querySnapshot.forEach((doc) => {
    fbListDocsCbFn(doc);
  });
}

// Listando documentos das coleções
fbListDocs(fbDb, "professores", fbListDocsCbFn);
fbListDocs(fbDb, "alunos", fbListDocsCbFn);
fbListDocs(fbDb, "cursos", fbListDocsCbFn);

// Função de callback para listar coleções
let fbListCollectionsCbFn = (collection) => {
  console.log("Collection ID:", collection.id);
  console.log("Collection data:", collection.data());
}

// Função para listar coleções
let fbListCollections = async (fbDb, fbListCollectionsCbFn) => {
  const querySnapshot = await getDocs(fbDb);
  querySnapshot.forEach((collection) => {
    fbListCollectionsCbFn(collection);
  });
}

// Listando coleções
fbListCollections(fbDb, fbListCollectionsCbFn);
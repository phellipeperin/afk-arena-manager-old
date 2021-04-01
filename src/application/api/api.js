import Firebase from 'firebase';

const getCollection = (collectionName) => Firebase.firestore().collection(collectionName);
const getSubCollection = (doc, collectionName) => doc.collection(collectionName);
const getDocument = (collection, docID) => collection.doc(docID);

const getCollectionData = async (collectionName) => {
    const { docs } = await getCollection(collectionName).get();
    return docs.map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getCollectionDataFiltered = async (collectionName, field, operator, value) => {
    const { docs } = await getCollection(collectionName).where(field, operator, value).get();
    return docs.filter((elem) => value.includes(elem[field])).map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getCollectionDataFilteredById = async (collectionName, valueArray) => {
    const { docs } = await getCollection(collectionName).get();
    return docs.filter((elem) => valueArray.includes(elem.id)).map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getDocumentData = async (collectionName, docID) => {
    const doc = await getDocument(getCollection(collectionName), docID).get();
    if (!doc.exists) return null;
    return doc.data();
};

const addDocumentData = async (collectionName, data) => {
    const collection = await getCollection(collectionName);
    return collection.add(data);
};

const setDocumentData = async (collectionName, docID, data) => {
    const doc = await getDocument(getCollection(collectionName), docID);
    return doc.set(data, { merge: true });
};

const updateDocumentData = async (collectionName, docID, data) => {
    const doc = await getDocument(getCollection(collectionName), docID);
    return doc.update(data, { merge: true });
};

const incrementDocumentData = async (collectionName, docID, field, incrementValue) => {
    const increment = Firebase.firestore.FieldValue.increment(incrementValue);
    const doc = await getDocument(getCollection(collectionName), docID);
    return doc.update({ [field]: increment });
};

const getSubCollectionData = async (collectionName, docID, subCollectionName) => {
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const { docs } = await getSubCollection(baseDoc, subCollectionName).get();
    return docs.map((elem) => ({ id: elem.id, ...elem.data() }));
};

const getSubCollectionDocumentData = async (collectionName, docID, subCollectionName, subDocID) => {
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const baseDocCollection = await getSubCollection(baseDoc, subCollectionName);
    const doc = await getDocument(baseDocCollection, subDocID).get();
    return doc.data();
};

const setSubCollectionDocumentData = async (collectionName, docID, subCollectionName, subDocID, data) => {
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const baseDocCollection = await getSubCollection(baseDoc, subCollectionName);
    const doc = await getDocument(baseDocCollection, subDocID);
    return doc.set(data, { merge: true });
};

const updateSubCollectionDocumentData = async (collectionName, docID, subCollectionName, subDocID, data) => {
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const baseDocCollection = await getSubCollection(baseDoc, subCollectionName);
    const doc = await getDocument(baseDocCollection, subDocID);
    return doc.update(data, { merge: true });
};

const incrementSubCollectionDocumentData = async (collectionName, docID, subCollectionName, subDocID, field, incrementValue) => {
    const increment = Firebase.firestore.FieldValue.increment(incrementValue);
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const baseDocCollection = await getSubCollection(baseDoc, subCollectionName);
    const doc = await getDocument(baseDocCollection, subDocID);
    return doc.update({ [field]: increment }, { merge: true });
};

const addBatchData = async (collectionName, data = []) => {
    const batch = Firebase.firestore().batch();
    const collection = await getCollection(collectionName);

    data.forEach((item) => {
        const { id, ...restItem } = item;
        batch.set(collection.doc(id), restItem);
    });

    return batch.commit();
};

const addBatchSubData = async (collectionName, docID, subCollectionName, data = []) => {
    const batch = Firebase.firestore().batch();
    const baseDoc = await getDocument(getCollection(collectionName), docID);
    const baseDocCollection = await getSubCollection(baseDoc, subCollectionName);

    data.forEach((item) => {
        const { id, ...restItem } = item;
        batch.set(baseDocCollection.doc(id), restItem);
    });

    return batch.commit();
};

export {
    getCollectionData,
    getCollectionDataFiltered,
    getCollectionDataFilteredById,
    getDocumentData,
    addDocumentData,
    setDocumentData,
    updateDocumentData,
    incrementDocumentData,
    getSubCollectionData,
    getSubCollectionDocumentData,
    setSubCollectionDocumentData,
    updateSubCollectionDocumentData,
    incrementSubCollectionDocumentData,
    addBatchData,
    addBatchSubData,
};


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// apiKey: "AIzaSyAeeaMh879hW93p5F-URmK4dbv0H6qLIdo",
// authDomain: "cars-doctor-ee93c.firebaseapp.com",
// projectId: "cars-doctor-ee93c",
// storageBucket: "cars-doctor-ee93c.appspot.com",
// messagingSenderId: "367985149554",
// appId: "1:367985149554:web:dd9e34b97585221c69a4eb"

const app = initializeApp(firebaseConfig);

export default app;
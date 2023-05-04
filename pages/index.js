import Head from 'next/head';
import axios from "axios"
import Image from "next/image";
import { Inter } from 'next/font/google';
import styles from "../styles/Home.module.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Featured from "../components/Featured";
import SaladList from '@/components/SaladList';
import { useState } from 'react';
import AddButton from '@/components/AddButton';
import Add from '@/components/Add';

export default function Home({saladList, admin}) { 
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Salad Ordering App</title>
        <meta name="description" content="Delicious Salads at your doorstep." />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Featured />
      {console.log("ADMINN",admin)}
      {admin && <AddButton setClose={setClose} />}
      <SaladList saladList={saladList}/>
      {!close && <Add setClose={setClose}/>}
     </div>
      
  ); 
}

export const getServerSideProps = async (ctx) =>{
  
  
  
  const myCookie = ctx.req?.headers.cookie || "";
  let admin= false;
  const token = myCookie.split(";").reduce((acc, curr) => {
    const [key, value] = curr.split("=");
    if (key.trim() === "token") { 
      return value;
    }
    return acc;
  }, "");
  
    console.log("cookie token",token, "ENV TOKEN", process.env.TOKEN);

  if(token == process.env.TOKEN){
    admin = true;
  }
  var res=null;
  try {
    res = await axios.get("http://localhost:3000/api/products");
    
  } catch (err) {
    console.log(err);
  }
  return {
    props:{
      saladList: res?.data,
      admin
    },
  };
  
};
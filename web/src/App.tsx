import { useEffect, useState } from "react";
import InvoicePage from "./InvoicePage.tsx";
import { useFormState } from "react-dom";
import { get } from "./request.ts";

export default function App() {
  const [invoices, setInvoices] = useState([]);

  useEffect (() =>{
    async function getInvoices() {
      const datas = await get();

      setInvoices(datas);
    }

    getInvoices();

  }, []);


  return (
    <main>
        <InvoicePage datas = {invoices}/>
    </main>   
  );
}

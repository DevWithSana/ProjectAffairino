import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Devis = () => {
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);
  const [logo, setLogo] = useState(null);
  const [documentType, setDocumentType] = useState("Facture");
  const [dueDate, setDueDate] = useState("");
  const [purchaseOrder, setPurchaseOrder] = useState("");
  const [currency, setCurrency] = useState("MAD");
  const [taxRate, setTaxRate] = useState(0);

  const handleSaveDevis = async () => {
    // Préparation des données pour l'API
    const devisData = {
      items,
      logo,
      documentType,
      dueDate,
      purchaseOrder,
      currency,
      taxRate,
    };
    try {
      const response = await axios.post("http://localhost:5000/api/devis", devisData);
      console.log("Devis enregistré avec succès :", response.data);
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du devis :", error);
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const addItem = () => setItems([...items, { description: "", quantity: 1, price: 0 }]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => (i === index ? { ...item, [field]: value } : item));
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0);
    const taxAmount = (subtotal * taxRate) / 100;
    return (subtotal + taxAmount).toFixed(2);
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById("devis");

    // Utilisation de html2canvas avec une meilleure résolution
    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      const imgWidth = 210; // Largeur du PDF (en mm)
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calcul de la hauteur pour garder les proportions

      // Ajout de l'image capturée dans le PDF avec une meilleure résolution
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("devis.pdf");
    });
  };

  return (
    <div id="devis" className="max-w-4xl mx-auto p-8 text-gray-800" style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)", borderRadius: "10px" }}>
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/3">
          <div className="bg-gray-200 text-gray-800 p-4 rounded-md h-32 flex items-center justify-center relative">
            {logo ? (
              <img src={logo} alt="Logo" className="max-h-32 object-contain" />
            ) : (
              <span>+ Ajoutez votre logo</span>
            )}
            <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleLogoUpload} />
          </div>
        </div>
        <div className="text-right">
          <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="bg-blue-500 text-3xl font-bold border-none p-2 text-white">
            <option value="Facture">FACTURE</option>
            <option value="Devis">DEVIS</option>
          </select>
          <div className="mt-2">
            <label className="text-gray-600 block">#</label>
            <input type="text" className="bg-gray-300 border-none p-2 w-16 text-gray-700" defaultValue="2" />
          </div>
        </div>
      </div>

      {/* Contenu de la facture ou devis */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="text-gray-600 block">De qui est-ce ?</label>
          <input type="text" className="bg-gray-300 border-none p-2 w-full text-gray-700" placeholder="Nom de l'entreprise" />
        </div>
        <div>
          <label className="text-gray-600 block">Date</label>
          <input type="date" className="bg-gray-300 border-none p-2 w-full text-gray-700" />
        </div>
        <div>
          <label className="text-gray-600 block">À qui s'adresse-t-il ?</label>
          <input type="text" className="bg-gray-300 border-none p-2 w-full text-gray-700" placeholder="Nom du client" />
        </div>
        <div>
          <label className="text-gray-600 block">Modalités de paiement</label>
          <input type="text" className="bg-gray-300 border-none p-2 w-full text-gray-700" placeholder="Modalités de paiement" />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-600 block">À payer avant le (date) </label>
        <input type="text" value={`${dueDate} - ${purchaseOrder}`} onChange={(e) => {
          const [date, order] = e.target.value.split(" - ");
          setDueDate(date);
          setPurchaseOrder(order);
        }} className="bg-gray-300 border-none p-2 w-full text-gray-700" placeholder="YYYY-MM-DD - Bon de commande" />
      </div>

      <div className="mb-4">
        <label className="text-gray-600 block">Devise</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="bg-gray-300 border-none p-2 w-full text-gray-700">
          <option value="MAD">MAD</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="text-gray-600 block">Objet</label>
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 bg-gray-200 p-2 mb-2">
            <div className="col-span-6">
              <input type="text" className="bg-gray-300 border-none w-full text-gray-700" placeholder="Description de l'article/service..." value={item.description} onChange={(e) => handleItemChange(index, "description", e.target.value)} />
            </div>
            <div className="col-span-2">
              <input type="number" className="bg-gray-300 border-none w-full text-gray-700" value={item.quantity} onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value))} />
            </div>
            <div className="col-span-2">
              <input type="number" className="bg-gray-300 border-none w-full text-gray-700" value={item.price} onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))} />
            </div>
            <div className="col-span-2 text-right">
              <p className="text-gray-700">{currency} {(item.quantity * item.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <button onClick={addItem} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">+ Élément de campagne</button>
      </div>

      <div className="flex justify-end">
        <div className="w-1/3">
          <div className="bg-gray-200 p-4">
            <div className="flex justify-between">
              <span>Sous-total</span>
              <span>{currency} {items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Impot</span>
              <input type="number" className="bg-gray-300 border-none text-right text-gray-700 w-16" placeholder="0" value={taxRate} onChange={(e) => setTaxRate(parseFloat(e.target.value))} />
            </div>
            <div className="flex justify-between mt-2">
              <span>Total</span>
              <span>{currency} {calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleDownloadPDF} className="mt-8 bg-blue-500 text-white px-6 py-3 rounded">Télécharger PDF</button>
      <button onClick={handleSaveDevis} className="mt-4 bg-green-500 text-white px-6 py-3 rounded">Enregistrer le devis</button>
  
    </div>
  );
};

export default Devis;

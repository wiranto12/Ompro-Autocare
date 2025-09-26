import React from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">TENTANG KAMI</h1>
        <section className="mb-12">
          <h2 className="text-xl font-bold text-orange-600 mb-2">
            Sejarah Perusahaan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Didirikan pada Tahun 2020, OMPRO lahir dengan visi{""}
            <span className="font-semibold italic">
              "Menjadi perusahaan Penyedia Produk Perawatan Kendaraan Terbaik &
              Terbesar di Indonesia"
            </span>
            . Berawal dari kepedulian terhadap kebutuhan perawatan kendaraan yang praktis,
            efektif, dan terjangkau bagi konsumen Indonesia,
            OMPRO kini berkembang menjadi salah satu merek lokal yang kompetitif
            di pasar perawatan kendaraan motor dan mobil.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Terinspirasi untuk menciptakan OMPRO setelah menyadari bahwa banyak
            konsumen di Indonesia menghadapi tantangan dalam merawat kendaraan
            mereka. Produk perawatan yang tersedia saat itu sering kali mahal,
            kurang ramah lingkungan, atau tidak memberikan hasil maksimal.
            Dengan pengalaman dan passion dalam dunia otomotif, tim kami
            memutuskan untuk menghadirkan solusi yang lebih baik melalui produk
            berkualitas tinggi yang terjangkau bagi semua kalangan.
          </p> 
        </section>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div>
          <h2 className="text-lg font-bold text-blue-700">Company Vision</h2>
          <p className="text-gray-700 mb-4">
            Menjadi perusahaan Penyedia Produk Perawatan Kendaraan Terbaik dan
            Terbesar di Indonesia.
          </p>

          <h2 className="text-lg font-bold text-blue-800 mb-2">Company Mission</h2>
          <ol>
            <li>1. Menciptakan Produk yang Praktis dan Berkualitas, dengan yang harga pantas</li>
            <li>2. Membangun Organisasi dengan sistem manajemen yang profesional</li>
            <li>3. Membentuk SDM yang handal, loyal dan beretika mulia</li>
            <li>4. Mengembangkan usaha ke seluruh Indonesia dengan membangun jaringan distribusi dan agen secara menyeluruh</li>
            <li>5. Berupaya memberikan manfaat terbaik untuk seluruh stakeholder</li>
          </ol>


          
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;

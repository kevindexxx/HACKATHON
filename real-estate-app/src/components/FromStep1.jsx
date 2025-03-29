const FormStep1 = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Informasi Pemilik</h2>
            <label>Nama:</label>
            <input 
                type="text" 
                value={formData.nama} 
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                placeholder="Masukkan Nama"
            />

            <label>Alamat:</label>
            <input 
                type="text" 
                value={formData.alamat} 
                onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                placeholder="Masukkan Alamat"
            />

            <label>Luas Tanah (m²):</label>
            <input 
                type="number" 
                value={formData.luas} 
                onChange={(e) => setFormData({ ...formData, luas: e.target.value })}
                placeholder="Masukkan Luas"
            />

            <button onClick={nextStep}>Lanjut</button>
        </div>
    );
};

export default FormStep1;

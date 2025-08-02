import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'

export default function KaryawanTable() {
  const [dataKaryawan, setDataKaryawan] = useState([]) //usestate


  useEffect(() => { //useeffect
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const data = [
        { id: 1, nama: 'Septia' },
        { id: 2, nama: 'Rojak' },
        { id: 3, nama: 'Permana' },
        { id: 4, nama: 'Dwi' },
      ]

      setDataKaryawan(data)
    }
    fetchData()
  }, [])
    
  
  const handleTambah = () => {
    const namaBaru = prompt('Masukkan nama karyawan:')
    if (namaBaru) {
      const idBaru = dataKaryawan.length + 1
      setDataKaryawan([...dataKaryawan, { id: idBaru, nama: namaBaru }])
    }
  }

  const handleEdit = (id) => {
    const karyawan = dataKaryawan.find((k) => k.id === id)
    const namaBaru = prompt('Edit nama karyawan:', karyawan.nama)
    if (namaBaru) {
      const update = dataKaryawan.map((k) =>
        k.id === id ? { ...k, nama: namaBaru } : k
      )
      setDataKaryawan(update)
    }
  }

  const handleHapus = (id) => {
    const konfirmasi = confirm('Yakin ingin menghapus data ini?')
    if (konfirmasi) {
      const baru = dataKaryawan.filter((k) => k.id !== id)
      setDataKaryawan(baru)
    }
  }

  return (
    <div>
      <div className="mb-3 text-end">
        <Button variant="primary" onClick={handleTambah}>
          + Tambah Data Karyawan
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Karyawan</th>
            <th>Lainnya</th>
          </tr>
        </thead>
        <tbody>
          {dataKaryawan.map((karyawan) => (
            <tr key={karyawan.id}>
              <td>{karyawan.id}</td>
              <td>{karyawan.nama}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(karyawan.id)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleHapus(karyawan.id)}
                >
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

function App() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-center mb-4">Krapy</h1>
      <div className="flex justify-center w-3/6 mx-auto gap-2">
        <input
          type="text"
          placeholder="Busca aqui tu juego preferido..."
          className="w-full p-2 rounded outline-none text-black"
        />
        <button className="bg-indigo-500 p-2 rounded">Buscar</button>
      </div>

      <div className="grid grid-cols-12 text-center mt-10 gap-4">
        <div className="col-span-6">
          <h2>PC</h2>
          <table className="w-full border-collapse border">
            <thead className="border-b">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descuento</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GTA V</td>
                <td className="bg-green-700 fw-bold">40%</td>
                <td className="bg-yellow-500 font-bold">$27990</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
            <tfoot className="text-end">
              <tr>
                <td>Sum</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="col-span-6">
          <h2>PC</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descuento</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GTA V</td>
                <td>40%</td>
                <td>27990</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Sum</td>
                <td>$180</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="col-span-6">
          <h2>PC</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descuento</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GTA V</td>
                <td>40%</td>
                <td>27990</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-span-6">
          <h2>PC</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Descuento</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>GTA V</td>
                <td>40%</td>
                <td>27990</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

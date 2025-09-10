import  { Component } from "react";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      price: "",
      discount: "",
      products: [],
      editingProduct: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, discount, products, editingProduct } = this.state;

    if (!title || !price || !discount) {
      return alert("Title, price va discount kiritish shart");
    }

    if (Number(price) < 0 || Number(discount) < 0) {
      return alert("Narx va chegirma manfiy bo'lishi mumkin emas");
    }

    if (editingProduct) {
      const updatedProducts = products.map((p) =>
        p.id === editingProduct.id
          ? {
              id: editingProduct.id,
              title,
              price: Number(price),
              discount: Number(discount),
            }
          : p
      );
      this.setState({
        products: updatedProducts,
        title: "",
        price: "",
        discount: "",
        editingProduct: null,
      });
    } else {
      const newProduct = {
        id: Date.now(),
        title,
        price: Number(price),
        discount: Number(discount),
      };
      this.setState({
        products: [...products, newProduct],
        title: "",
        price: "",
        discount: "",
      });
    }
  };

  handleDelete = (id) => {
    this.setState({ products: this.state.products.filter((p) => p.id !== id) });
  };

  handleUpdate = (product) => {
    this.setState({
      title: product.title,
      price: product.price,
      discount: product.discount,
      editingProduct: product,
    });
  };

  handleCancel = () => {
    this.setState({
      title: "",
      price: "",
      discount: "",
      editingProduct: null,
    });
  };

  render() {
    const { title, price, discount, products, editingProduct } = this.state;

    return (
      <div className="p-4">
        <h1>Products</h1>

        <form onSubmit={this.handleSubmit} className="mt-3 flex flex-col gap-2 w-[400px]">
          <input
            type="text"
            placeholder="Nomi"
            value={title}
            onChange={(e) => this.setState({ title: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Narx"
            value={price}
            onChange={(e) => this.setState({ price: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Chegirma %"
            value={discount}
            onChange={(e) => this.setState({ discount: e.target.value })}
            className="border p-2 rounded"
          />
          <div className="flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-3 py-3 rounded">
              {editingProduct ? "Edit" : "Create"}
            </button>
            {editingProduct && (
              <button type="button" onClick={this.handleCancel} className="px-3 py-3 rounded border">
                Bekor qilish
              </button>
            )}
          </div>
        </form>

        <ul className="mt-4 max-w-sm">
          {products.length ? (
            products.map((p) => {
              const finalPrice = p.price - (p.price * p.discount) / 100;
              return (
                <li key={p.id} className="py-2 border-b">
                  <div>Name: {p.title}</div>
                  <div className="text-sm text-gray-600">Price: {p.price}$  Discount: {p.discount}% AllPrice: ${finalPrice}</div>
                  <div className="mt-2 flex gap-2">
                    <button onClick={() => this.handleUpdate(p)} className="px-2 py-1 border rounded">Edit</button>
                    <button onClick={() => this.handleDelete(p.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="py-2 text-gray-600">Not found</li>
          )}
        </ul>
      </div>
    );
  }
}

module.exports = {

  create: (req, res) => {
    const db = req.app.get("db")
    let { name, description, price, image_url } = req.body
    db.create_product([name, description, price, image_url])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).send({ errMessage: "something went wrong in creating a new product" })
        console.log(err)
      })
  },

  getOne: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    db.read_product([id])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).console.log(`GetOne err ${err}`)
      })
  },

  getAll: (req, res) => {
    const db = req.app.get("db")
    db.read_products()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).console.log(`GetAll err ${err}`)
      })
  },

  update: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    let { desc } = req.query
    db.update_product([id, desc])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).send({ errMessage: "Something went wrong with updating product in table" })
        console.log(err)
      })
  },

  delete: (req, res) => {
    const db = req.app.get("db")
    let { id } = req.params
    db.delete_product([id])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).send({ errMessage: "Something went wrong in deleting product from table" })
        console.log(err)
      })
  }
}
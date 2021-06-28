const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION OPEN")
  })
  .catch(err => {
    console.log("OH NO ERROER!!!!")
  })

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive ya dodo!']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  }, 
  size: {
    type: String,
    enum:['S','M','L']
  }
  // {
    // type: [String],
    // default:['Cycling']
  // }

});

//  productSchema.methods.greet = () => {}
 productSchema.methods.greet = function () {
   console.log("HELLO!!! HI!! HOWDY!!!")
   console.log(`- from ${this.name}`)
 }
productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;
  return this.save();
}

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save;
}

const Product = mongoose.model('Product', productSchema)


const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Mountain Bike'})
  // foundProduct.greet();
  // foundProduct.onSale = !foundProduct.onSale
  // foundProduct.save()
  console.log(foundProduct)
  await foundProduct.toggleOnSale();
  console.log(foundProduct)
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct)
}

findProduct();

// const bike = new Product({ name: 'Cycling Jersey', price: 30.00, categories:['Cycling'], size:'XS'})
// bike.save()
//   .then(data => {
//     console.log("IT WORKED")
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO ERROR, NAM IS REQUIRED")
//     console.log(err)
//   })

// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -19.9}, { new: true, runValidators: true})
//   .then(data => {
//     console.log("IT WORKED")
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO ERROR")
//     console.log(err)
//   })
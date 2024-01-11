
import {Schema, model, models} from "mongoose"

const ProductSchema = new Schema({
    name: {type: String, 
            required: [true, "Titulo es un campo obligatorio."],
            unique: true},
    description: String,
    price: {type: Number,
            required: [true, "Precio es un campo obligatorio."]},
    stock: {type: Number,
        required: [true, "Cantidad es un campo obligatorio."]}
})

export default models.Product || model("Product", ProductSchema)
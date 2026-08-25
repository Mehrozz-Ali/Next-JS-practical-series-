"use client";

import { removeProduct } from "@/actions/products";
import Form from "next/dist/client/form";
import { useOptimistic } from "react";


type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}


export default function ProductDetail({ products }: { products: Product[] }) {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter(product => product.id !== productId)
    })


    const removeProductById = async (productId: number) => {
        setOptimisticProducts(productId);
        await removeProduct(productId);
    }

    return (
        <ul className="space-y-4 p-4">
            {optimisticProducts.map((product) => (
                <li key={product.id} className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p>{product.description}</p>
                    <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
                    <Form action={removeProductById.bind(null, product.id)}>
                        <button type="submit" className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-500">
                            Delete
                        </button>
                    </Form>
                </li>
            ))
            }
        </ul>
    )

}
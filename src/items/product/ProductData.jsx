import { useEffect, useState } from "react";

const ProductData = () => {
    const [category, setCategory] = useState([])

    
    useEffect( () => {
        const fetchDataforCateg = async() => {
            const categoryResponse = await fetch('https://65cc43dcdd519126b83e2b68.mockapi.io/product');
            const categoryData = await categoryResponse.json();

            const category = categoryData.category
            if(category === 'sneakers') console.log('hellooo');
            setCategory(category)
        }
        fetchDataforCateg()
    }, [])

    return category
};

export default ProductData;
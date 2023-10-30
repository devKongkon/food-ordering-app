import { BsSearch } from "react-icons/bs";
import { Container, products } from '../../index'
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";
function AllFood() {
    const [searchMethod, setSearchMethod] = useState('');
    // console.log(searchTerm)
    const [productData, setProductData] = useState(products);
    const [sortingMethod, setSortingMethod] = useState('default')
    /* Pagination method integration */
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; //Number of items per page
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Sorting function
    const sortProducts = (products, method) => {
        if (method === 'ascending') {
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
        } else if (method === 'descending') {
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
        } else if (method === 'high-price') {
            return [...products].sort((a, b) => b.price - a.price);
        } else if (method === 'low-price') {
            return [...products].sort((a, b) => a.price - b.price);
        } else {
            return products;
        }
    };
    const sortedProducts = sortProducts(productData, sortingMethod); // Sort the products based on the selected method

    return (
        <section>
            <Container>
                {/* search and filter section */}
                <div className='flex flex-wrap justify-between my-10'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="I'm looking for ...."
                            value={searchMethod}
                            onChange={(e) => setSearchMethod(e.target.value)}
                            className='pr-10 pl-4 border py-2 w-[300px]'
                        />
                        <span className='absolute pr-4 top-3.5 right-0'>
                            <BsSearch />
                        </span>
                    </div>
                    {/* sorting field */}
                    <div>
                        <select
                            className="border px-4 py-2"
                            value={sortingMethod}
                            onChange={(e) => setSortingMethod(e.target.value)}
                        >
                            <option >Default</option>
                            <option value="ascending">Alphabetically, A-Z</option>
                            <option value="descending">Alphabetically, Z-A</option>
                            <option value="high-price">High price</option>
                            <option value="low-price">Low price</option>
                        </select>
                    </div>
                </div>
                {/* All product and search method */}
                <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 sm:grid-cols-3">
                    {
                        sortedProducts?.filter((item) => {
                            if (searchMethod === '') return item;
                            if (item.title.toLocaleLowerCase().includes(searchMethod.toLocaleLowerCase())
                            )
                                return item;
                        })
                            .slice(indexOfFirstItem, indexOfLastItem)
                            .map((item) => (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                />
                            ))
                    };
                </div>
                {/* Pagination component */}
                <div>
                    <ReactPaginate
                        pageCount={Math.ceil(sortedProducts.length / itemsPerPage)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={({ selected }) => setCurrentPage(selected)}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        nextClassName="next"
                        previousLabel="< previous"
                        nextLabel = "next >"
                    />
                </div>
            </Container>
        </section>
    )
}

export default AllFood;


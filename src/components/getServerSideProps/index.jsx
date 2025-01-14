export async function getServerSideProps() {
    const PRODUCTS_URL = 'http://localhost:5000/products';
    let products = [];
    let isLoading = true;
  
    try {
      const res = await fetch(PRODUCTS_URL);
      const data = await res.json();
      products = data.data || [];
      isLoading = false;
    } catch (error) {
      console.error('Error fetching products:', error);
      products = [];
      isLoading = false;
    }
  
    return {
      props: {
        products,
        isLoading
      },
    };
  }
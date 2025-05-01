(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProducService {

        getProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private email = 'test@test.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo', template, emailList);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProducService;
        private mailer: Mailer;

        constructor(productService: ProducService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail([''], 'to-clients');
        }
    
    }

    class CartBloc {
        addToCart(productId: number) {
            console.log('agregando al carrito', productId);
        }
    }
    

    const productBloc = new ProductBloc(new ProducService(), new Mailer());
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);
})();
export const getProducts = async () => {
    return [
        {
            title: 'Apartamento de luxo',
            image: 'https://via.placeholder.com/300',
            category: 'Imóveis',
            description: 'Apartamento com 3 quartos, 2 banheiros e vaga na garagem.',
            price: 'R$ 500.000,00'
        },
        {
            title: 'Carro esportivo',
            image: 'https://via.placeholder.com/300',
            category: 'Automóveis',
            description: 'Carro com baixa quilometragem e único dono.',
            price: 'R$ 80.000,00'
        },
        {
            title: 'Smartphone de última geração',
            image: 'https://via.placeholder.com/300',
            category: 'Eletrônicos',
            description: 'Smartphone com 128GB de armazenamento e câmera de alta resolução.',
            price: 'R$ 3.000,00'
        }
    ];
}

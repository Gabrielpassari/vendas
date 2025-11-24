const BASE_URL ="https://fakestoreapi.com/products";
/**
 * get - ler todos os produtos
* @return {Promise<Array>} Lista de produtos
*/
export async function getProducts () {
    try {
        const response =await fetch(BASE_URL)
        if (!response.ok)
            throw new Error("Erro ao buscar produtos")
        const data = await response.json();
        return data;
} catch (error) {
    console.error("Erro em getProducts:", error);
    return [];
}
}

/**
 * Get - let um produto pelo ID
 * @param {number} id - ID do produto
 * @return {Promise<Object>} Produto encontrado 
*/
export async function getProductById(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`)
    if(!response.ok)
        throw new Error("Erro ao buscar produto");
    const data = await response.json();
    return data;
    } catch (error) {
        console.error("Erro em getProductById:", error);
        return null;
    }
}

/**
 * POST - Criar um novo produto
 * @param {Object} product - Dados do produto
 * @return {Promise<Object>} Produto criado
 */
export async function createProduct(product) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        });
        if (!response.ok)
            throw new Error("Erro ao criar produto");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro em createProduct:", error);
        return null;
    }
}

/**
 * Put -atualizar um produto existente
 * @param {number} id - ID do produto
 * @param {Object} product - Dados do produto
 * @return {Promise<Object>} Produto atualizado
 */

export async function updateProduct(id, product) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product),
        });
        if (!response.ok)
            throw new Error("Erro ao atualizar produto");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro em updateProduct:", error);
        return null;
    }
}

/**
 *DELETE - deletar um produto
 * @param {number} id - ID do produto
 * @return {Promise<Object>} Produto deletado
 */
export async function deleteProduct(id) {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok)
            throw new Error("Erro ao deletar produto");
        return true;
    } catch (error) {
        console.error("Erro em deleteProduct:", error);
        return false;

    }
}
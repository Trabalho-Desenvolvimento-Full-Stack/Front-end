import { Produto } from './produto.model';
import { Pedido } from './pedido.model';

export class ItemPedido{
    id_pedido !: Pedido;
    id_produto !: Produto;

}
import styles from '../styles/listaProdutos.module.css'
import { useEffect, useState } from "react";
import ListaProdutos from "./ListaProdutos";

export default function Home() {

const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            } catch (erro) {
                alert("A conexão com a API falhou!")
            }
        }
        receberListaProdutos();
    }, []);

    if (lista.legth === 0) {
        return <h1>Carregando...</h1>
    }

    const orderAZ = () =>{
        const listaAux = [...lista].sort((a, b)=> a.title.localeCompare(b.title));
        setLista(listaAux);
    }

    return (
        <>
        <header></header>
        <h1 className={styles.blocoLista}>Lista de Produtos</h1>
        <button onClick={()=> orderAZ()}>AZ</button>
        <ListaProdutos lista={lista}/>
        </>
    );}
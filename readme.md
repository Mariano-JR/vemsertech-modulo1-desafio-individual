
# Lógica de Programação - Projeto Individual Final

Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição (sejam criativos).

- Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes;

- A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing;

- Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

## Requisitos

Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:

- Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails;
- Criar uma função para montar o corpo do e-mail a ser enviado;
- Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing;
- Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.

---

## Observações

- Os passos acima são um guia, mas não obrigatórios. Podem desenvolver uma lógica diferente, que atenda ao solicitado;

- Podem separar as funcionalidades em arquivos, de acordo com a necessidade que houver.

## Rodando localmente

Entre no diretório do projeto

```bash
  cd vemsertech-modulo1-desafio-individual
```

Instale as dependências

```bash
  npm install
```

Inicie o projeto

```bash
  node main.js
```


## Autores

- [@Mariano-JR](https://www.github.com/Mariano-JR/)
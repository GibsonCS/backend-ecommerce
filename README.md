# Backend E-commerce

Sistema backend para uma plataforma de e-commerce desenvolvida com boas práticas e arquitetura moderna.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)
- [Funcionalidades](#funcionalidades)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)

## 🎯 Visão Geral

Este projeto é um backend robusto para e-commerce que gerencia usuários, produtos, clientes e compras. O sistema inclui autenticação, autorização baseada em papéis (RBAC) e operações completas de e-commerce.

## 🚀 Tecnologias

- Linguagem de Programação: [Especificar]
- Framework: [Especificar]
- Banco de Dados: [Especificar]
- Autenticação: JWT
- Documentação da API: [Especificar]

## 🗄️ Estrutura do Banco de Dados

O diagrama abaixo representa a estrutura do banco de dados do sistema:

```mermaid
erDiagram
USER {
uuid userId PK
string login
string password
string email
date createAt
}

    ROLE {
        uuid roleId PK
        string name
        date createAt
    }

    USER_ROLE {
        uuid userRoleId PK
        uuid userId FK
        uuid roleId FK
        date createAt
    }

    CLIENT {
        uuid clientId PK
        uuid userId FK
        string name
        string cpf
        string phone
        string address
    }

    COMPRA {
        uuid compraId PK
        uuid clientId FK
        date dataCompra
        decimal total
    }

    PRODUTO {
        uuid produtoId PK
        string nome
        decimal preco
        integer estoque
        date createAt
    }

    COMPRA_PRODUTO {
        uuid compraProdutoId PK
        uuid compraId FK
        uuid produtoId FK
        integer quantidade
        decimal precoUnitario
    }

    USER ||--o{ USER_ROLE : "possui"
    ROLE ||--o{ USER_ROLE : "atribuído a"
    USER ||--|| CLIENT : "representa"
    CLIENT ||--o{ COMPRA : "realiza"
    COMPRA ||--o{ COMPRA_PRODUTO : "contém"
    PRODUTO ||--o{ COMPRA_PRODUTO : "está em"
```

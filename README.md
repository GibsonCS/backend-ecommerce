# Backend E-commerce

A robust backend system for an e-commerce platform, built with modern architecture and best practices.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Database Structure](#database-structure)
- [Features](#features)
- [Setup](#setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)

## 🎯 Overview

This project is a backend for managing users, products, clients, and orders in an e-commerce platform.  
It includes authentication, role-based access control (RBAC), and complete e-commerce operations.

> ⚠️ **Project Status:** In Development  
> This repository is actively being developed. Features and documentation are subject to change.

## 🚀 Technologies

- Programming Language: [Specify]
- Framework: [Specify]
- Database: [Specify]
- Authentication: JWT
- API Documentation: [Specify]

## 🗄️ Database Structure

The diagram below illustrates the system's database structure:

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

ORDER {
    uuid orderId PK
    uuid clientId FK
    date orderDate
    decimal total
}

PRODUCT {
    uuid productId PK
    string name
    decimal price
    integer stock
    date createAt
}

ORDER_PRODUCT {
    uuid orderProductId PK
    uuid orderId FK
    uuid productId FK
    integer quantity
    decimal unitPrice
}

USER ||--o{ USER_ROLE : "has"
ROLE ||--o{ USER_ROLE : "assigned to"
USER ||--|| CLIENT : "represents"
CLIENT ||--o{ ORDER : "makes"
ORDER ||--o{ ORDER_PRODUCT : "contains"
PRODUCT ||--o{ ORDER_PRODUCT : "included in"

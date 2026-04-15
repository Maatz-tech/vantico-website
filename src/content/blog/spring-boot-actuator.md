---
title: "O que o Spring Boot Actuator e suas vulnerabilidades"
date: "2026-03-02"
image: "/images/blog/post-8.webp"
category: "Labs"
tags: ["spring boot", "labs"]
summary: "Este é um resumo do post. Seu objetivo é informar rapidamente o leitor sobre o conteúdo, facilitando a decisão de leitura."
featured: false
---

O Spring Boot Actuator é um módulo do framework Spring Boot que fornece endpoints de monitoramento e gerenciamento para aplicações em produção. Através de endpoints como /actuator/health, /actuator/env e /actuator/beans, desenvolvedores e equipes de operações conseguem verificar o estado da aplicação, acessar variáveis de ambiente e inspecionar a configuração de beans do Spring. Embora extremamente útil para DevOps, o Actuator pode se tornar um vetor de ataque crítico quando exposto sem as devidas proteções.

As vulnerabilidades mais graves relacionadas ao Spring Boot Actuator envolvem a exposição de endpoints sensíveis sem autenticação. O endpoint /actuator/env pode revelar credenciais de banco de dados, chaves de API e tokens de acesso armazenados em variáveis de ambiente. O /actuator/heapdump permite o download de um dump de memória da JVM, que pode conter senhas e dados sensíveis em texto claro. Em casos mais graves, o endpoint /actuator/gateway/routes (em aplicações com Spring Cloud Gateway) pode permitir a injeção de rotas maliciosas via SpEL injection, levando à execução remota de código.

A mitigação dessas vulnerabilidades começa por desabilitar todos os endpoints do Actuator que não são estritamente necessários em produção, usando a configuração management.endpoints.web.exposure.include para expor apenas os endpoints essenciais. Todos os endpoints expostos devem ser protegidos por autenticação via Spring Security, e o acesso deve ser restrito a redes internas ou VPNs. Durante pentests, sempre verificamos a presença de endpoints do Actuator expostos, pois essa é uma das fontes mais ricas de informações sensíveis em aplicações Java modernas.

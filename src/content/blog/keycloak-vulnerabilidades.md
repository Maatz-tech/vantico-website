---
title: "Um Guia para o Keycloak e suas vulnerabilidades de segurança"
date: "2026-03-02"
image: "/images/blog/post-7.jpg"
category: "Labs"
tags: ["keycloak", "labs"]
summary: "Este é um resumo do post. Seu objetivo é informar rapidamente o leitor sobre o conteúdo, facilitando a decisão de leitura."
featured: false
---

O Keycloak é uma solução open-source de gerenciamento de identidade e acesso (IAM) amplamente adotada por organizações que buscam centralizar a autenticação e autorização de suas aplicações. Desenvolvido originalmente pela Red Hat, ele oferece funcionalidades como Single Sign-On (SSO), federação de identidades, autenticação multifator e integração com protocolos como OpenID Connect, OAuth 2.0 e SAML 2.0. Apesar de sua robustez, como qualquer software complexo, o Keycloak possui um histórico de vulnerabilidades que merecem atenção.

Entre as vulnerabilidades mais comuns encontradas em implantações do Keycloak estão falhas de Cross-Site Scripting (XSS) em páginas de login customizadas, problemas de configuração em redirect URIs que permitem open redirect, e vulnerabilidades de Server-Side Request Forgery (SSRF) em funcionalidades de federação. CVEs como CVE-2024-1132 e CVE-2023-6544 demonstram que até versões recentes podem conter falhas críticas que permitem bypass de autenticação ou escalação de privilégios.

Para manter uma implantação segura do Keycloak, é fundamental seguir as melhores práticas: manter o software sempre atualizado, restringir redirect URIs a domínios específicos e validados, configurar Content Security Policy adequadamente, habilitar proteções contra brute force e monitorar logs de autenticação para detectar atividades suspeitas. Em nossos pentests, frequentemente encontramos instâncias do Keycloak com configurações padrão inseguras ou versões desatualizadas, reforçando a importância de revisões periódicas de segurança nesse componente crítico da infraestrutura.
